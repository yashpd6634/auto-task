// ./router/user.ts
import { Router, Request, Response } from "express";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import { authMiddleware } from "../middleware";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const router = Router();

router.post("/signup", async (req: Request, res: Response): Promise<any> => {
  const parsedData = SignupSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({
      errors: parsedData.error.flatten().fieldErrors,
    });
  }

  const { username, password, name } = parsedData.data;

  const userExists = await prismaClient.user.findUnique({
    where: { email: username },
  });

  if (userExists) {
    return res
      .status(403)
      .json({ message: "User already exists with this email" });
  }

  await prismaClient.user.create({
    data: { email: username, password, name },
  });

  return res.status(200).json({ message: "Please verify your email" });
});

router.post("/signin", async (req: Request, res: Response): Promise<any> => {
  const parsedData = SigninSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({
      errors: parsedData.error.flatten().fieldErrors,
    });
  }

  const { username, password } = parsedData.data;

  const user = await prismaClient.user.findUnique({
    where: { email: username, password },
  });

  if (!user) {
    return res.status(403).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET);

  return res.status(200).json({ token: token });
});

router.get(
  "/",
  authMiddleware,
  async (req: Request, res: Response): Promise<any> => {
    // TODP: fix the type
    // @ts-ignore
    const id = req.id;
    const user = await prismaClient.user.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
      },
    });

    return res.json({
      user,
    });
  }
);

export const userRouter = router;
