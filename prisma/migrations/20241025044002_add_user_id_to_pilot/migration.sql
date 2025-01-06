/*
  Warnings:

  - You are about to drop the column `name` on the `Pilot` table. All the data in the column will be lost.
  - You are about to drop the `PilotSchedule` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Pilot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Pilot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PilotSchedule" DROP CONSTRAINT "PilotSchedule_flightId_fkey";

-- DropForeignKey
ALTER TABLE "PilotSchedule" DROP CONSTRAINT "PilotSchedule_pilotId_fkey";

-- AlterTable
ALTER TABLE "Pilot" DROP COLUMN "name",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "PilotSchedule";

-- DropEnum
DROP TYPE "ScheduleStatus";

-- CreateIndex
CREATE UNIQUE INDEX "Pilot_userId_key" ON "Pilot"("userId");

-- AddForeignKey
ALTER TABLE "Pilot" ADD CONSTRAINT "Pilot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
