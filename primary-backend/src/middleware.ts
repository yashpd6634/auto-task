import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  const token = req.headers.authorization as string;

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // @ts-ignore
    req.id = payload.id;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "You are not logged in",
    });
  }
}
