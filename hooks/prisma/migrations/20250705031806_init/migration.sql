-- CreateTable
CREATE TABLE "AutoRunOutbox" (
    "id" TEXT NOT NULL,
    "autoRunId" TEXT NOT NULL,

    CONSTRAINT "AutoRunOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AutoRunOutbox_autoRunId_key" ON "AutoRunOutbox"("autoRunId");

-- AddForeignKey
ALTER TABLE "AutoRunOutbox" ADD CONSTRAINT "AutoRunOutbox_autoRunId_fkey" FOREIGN KEY ("autoRunId") REFERENCES "AutoRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
