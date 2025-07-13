require("dotenv").config();

import { Kafka } from "kafkajs";
import { PrismaClient } from "../generated/prisma";
import { JsonObject } from "../generated/prisma/runtime/library";
import { parse } from "./parser";
import { sendEmail } from "./sendEmail";

const TOPIC_NAME = "autoTask-events";
const prismaClient = new PrismaClient();

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

async function main() {
  const consumer = kafka.consumer({ groupId: "main-worker" });
  await consumer.connect();
  const producer = kafka.producer();
  await producer.connect();

  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value?.toString(),
      });

      const parsedValue = JSON.parse(message.value?.toString() || "");
      const autoRunId = parsedValue.autoRunId;
      const stage = parsedValue.stage;

      const autoRunDetails = await prismaClient.autoRun.findFirst({
        where: {
          id: autoRunId,
        },
        include: {
          auto: {
            include: {
              trigger: {
                include: {
                  type: true,
                },
              },
              actions: {
                include: {
                  type: true,
                },
              },
            },
          },
        },
      });

      const currentAction = autoRunDetails?.auto.actions.find(
        (action) => action.sortingOrder === stage
      );

      if (!currentAction) {
        console.log("Current action not found");
        return;
      }

      const autoRunMetadata = autoRunDetails?.metadata;
      if (!autoRunMetadata) return;

      if (currentAction.type.id === "email") {
        const body = parse(
          (currentAction.metadata as JsonObject)?.body as string,
          autoRunMetadata
        );
        const to = parse(
          (currentAction.metadata as JsonObject)?.email as string,
          autoRunMetadata
        );
        const subject = parse(
          (currentAction.metadata as JsonObject)?.subject as string,
          autoRunMetadata
        );

        await sendEmail(to, body, subject);
        console.log(`Sending out an email to ${to} body is ${body}`);
      }

      if (currentAction.type.id === "whatsapp") {
        console.log("Sending out a whatsapp notification");
      }

      await new Promise((r) => setTimeout(r, 500));

      if (!autoRunId) return;

      const lastStage = (autoRunDetails?.auto.actions.length || 1) - 1;
      if (lastStage !== stage) {
        await producer.send({
          topic: TOPIC_NAME,
          messages: [
            {
              value: JSON.stringify({
                stage: stage + 1,
                autoRunId,
              }),
            },
          ],
        });
      }

      console.log(`Processed Auto Run ID: ${autoRunId}`);

      await consumer.commitOffsets([
        {
          topic: TOPIC_NAME,
          partition: partition,
          offset: (parseInt(message.offset) + 1).toString(),
        },
      ]);
    },
  });
}

main();
