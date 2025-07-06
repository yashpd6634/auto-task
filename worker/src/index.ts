import { Kafka } from "kafkajs";
// import { PrismaClient } from "../generated/prisma";

const TOPIC_NAME = "autoTask-events";
// const client = new PrismaClient();

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

async function main() {
  const consumer = kafka.consumer({ groupId: "main-worker" });
  await consumer.connect();
  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      const autoRunId = message.value?.toString();
      if (!autoRunId) return;

    //   const autoRun = await client.autoRun.findUnique({
    //     where: { id: autoRunId },
    //   });

    //   if (!autoRun) return;

    //   await client.autoRunOutbox.create({
    //     data: {
    //       autoId: autoRun.autoId,
    //       availableTriggerId: autoRun.availableTriggerId,
    //       autoRunId: autoRun.id,
    //     },
    //   });

      console.log(`Processed Auto Run ID: ${autoRunId}`);

      await consumer.commitOffsets([
        {
            topic: TOPIC_NAME, 
            partition: partition, 
            offset: (parseInt(message.offset) + 1).toString() 
        },
      ]);
    },
  });
}

main();
