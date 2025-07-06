-- CreateTable
CREATE TABLE "AutoRun" (
    "id" TEXT NOT NULL,
    "autoId" TEXT NOT NULL,

    CONSTRAINT "AutoRun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AutoRun" ADD CONSTRAINT "AutoRun_autoId_fkey" FOREIGN KEY ("autoId") REFERENCES "Auto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
