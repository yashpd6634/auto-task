import { Kafka } from "kafkajs";
import { PrismaClient } from "../generated/prisma";

const TOPIC_NAME = "autoTask-events";
const client = new PrismaClient();

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

async function main() {
  const producer = kafka.producer();
  await producer.connect();

  while (1) {
    const pendingRows = await client.autoRunOutbox.findMany({
      where: {},
      take: 10,
    });

    console.log(pendingRows);

    producer.send({
      topic: TOPIC_NAME,
      messages: pendingRows.map((row) => ({
        value: JSON.stringify({ autoRunId: row.autoRunId, stage: 0 }),
      })),
    });

    await client.autoRunOutbox.deleteMany({
      where: {
        id: {
          in: pendingRows.map((row) => row.id),
        },
      },
    });

    await new Promise((r) => setTimeout(r, 3000));
  }
}

main();
