import { Router, Request, Response } from "express";
import { SigninSchema, SignupSchema } from "../types";
import { prismaClient } from "../db";
import { authMiddleware } from "../middleware";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

const router = Router();

router.get("/available", async (req, res) => {
  const availableTrigger = await prismaClient.availableTrigger.findMany({});

  res.json({
    availableTrigger,
  });
});

export const triggerRouter = Router();
