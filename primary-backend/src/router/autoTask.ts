import { Router } from "express";
import { authMiddleware } from "../middleware";
import { AutoTaskSchema } from "../types";
import { prismaClient } from "../db";

const router = Router();

router.post("/", authMiddleware, async (req, res): Promise<any> => {
  const body = req.body;
  // @ts-ignore
  const id = req.id; // Assuming req.id is set by authMiddleware
  const parsedData = AutoTaskSchema.safeParse(body);

  if (!parsedData.success) {
    return res.status(411).json({
      message: "Invalid inputs",
    });
  }

  const autoTask = await prismaClient.auto.create({
    data: {
      name: parsedData.data.name,
      description: parsedData.data.description,
      userId: id, // Assuming req.id is set by authMiddleware
      trigger: {
        create: {
          availableTriggerId: parsedData.data.availableTriggerId,
          metadata: parsedData.data.triggerMetadata,
        },
      },
      actions: {
        create: parsedData.data.actions.map((action, index) => ({
          availableActionId: action.availableActionId,
          metadata: action.actionMetadata,
          sortingOrder: index,
        })),
      },
    },
  });

  res.status(201).json({
    autoTaskId: autoTask.id,
  });
});

router.get("/", authMiddleware, async (req, res): Promise<any> => {
  // @ts-ignore
  const id = req.id; // Assuming req.id is set by authMiddleware
  const autoTasks = await prismaClient.auto.findMany({
    where: { userId: id },
    include: {
      actions: {
        include: {
          type: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });

  return res.status(200).json({ autoTasks });
});

router.get("/:autoTaskId", authMiddleware, async (req, res): Promise<any> => {
  // @ts-ignore
  const id = req.id; // Assuming req.id is set by authMiddleware
  const autoTaskId = req.params.autoTaskId;
  const autoTask = await prismaClient.auto.findUnique({
    where: { userId: id, id: autoTaskId },
    include: {
      actions: {
        include: {
          type: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });

  return res.status(200).json({ autoTask });
});

export const autoTaskRouter = router;
