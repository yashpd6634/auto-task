import { PrismaClient } from "../generated/prisma";
const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.availableTrigger.deleteMany();

  await prismaClient.availableTrigger.create({
    data: {
      id: "webhook",
      name: "Webhook",
      image:
        "https://mailparser.io/wp-content/uploads/2018/08/what-is-a-webhook-1024x536.jpeg",
    },
  });

  await prismaClient.availableAction.deleteMany();

  await prismaClient.availableAction.create({
    data: {
      id: "email",
      name: "Email",
      image:
        "https://img.freepik.com/premium-vector/envelope-vector-illustration_1186366-91735.jpg?semt=ais_hybrid&w=740",
    },
  });

  await prismaClient.availableAction.create({
    data: {
      id: "whatsapp",
      name: "Whatsapp",
      image:
        "https://images.icon-icons.com/2657/PNG/256/whatsapp_icon_161055.png",
    },
  });
}

main();
