-- CreateTable
CREATE TABLE "PilotUnavailability" (
    "id" SERIAL NOT NULL,
    "pilotId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PilotUnavailability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PilotUnavailability" ADD CONSTRAINT "PilotUnavailability_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
