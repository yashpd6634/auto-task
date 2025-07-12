import express from "express";
import { PrismaClient } from "../generated/prisma";

const app = express();
const client = new PrismaClient();
app.use(express.json());

app.post("/hooks/catch/:userId/:autoId", async (req, res) => {
  const { userId, autoId } = req.params;
  const body = req.body;

  try {
    const { autoRun, autoRunOutbox } = await client.$transaction(async (tx) => {
      const autoRun = await tx.autoRun.create({
        data: {
          autoId,
          metadata: body,
        },
      });

      const autoRunOutbox = await tx.autoRunOutbox.create({
        data: {
          autoRunId: autoRun.id,
        },
      });

      return { autoRun, autoRunOutbox };
    });

    res.status(201).json({
      message: "Auto run created successfully",
      autoRun,
      autoRunOutbox,
    });
  } catch (error) {
    console.error("Error creating auto run:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
