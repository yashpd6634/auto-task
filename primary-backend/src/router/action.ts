import { Router, Request, Response } from "express";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import { authMiddleware } from "../middleware";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const router = Router();

router.get("/available", async (req, res) => {
  const availableActions = await prismaClient.availableAction.findMany({});

  res.json({
    availableActions,
  });
});

export const actionRouter = router;
