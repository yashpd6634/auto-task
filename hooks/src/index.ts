import express from "express";
import { PrismaClient } from "../generated/prisma";

const app = express();
const client = new PrismaClient();

app.post("/hooks/catch/:userId/:autoId", async (req, res) => {
  const { userId, autoId } = req.params;
  const body = req.body;

  await client
    .$transaction(async (tx) => {
      const autoRun = await tx.autoRun.create({
        data: {
          autoId,
          metadata: body,
        },
      });

      await tx.autoRunOutbox.create({
        data: {
          autoRunId: autoRun.id,
        },
      });

      res
        .status(201)
        .json({ message: "Auto run created successfully", autoRun });
    })
    .catch((error) => {
      console.error("Error creating auto run:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});