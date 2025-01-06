/*
  Warnings:

  - You are about to drop the column `status` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `availability` on the `Pilot` table. All the data in the column will be lost.
  - You are about to drop the column `licenseNumber` on the `Pilot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Flight" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Pilot" DROP COLUMN "availability",
DROP COLUMN "licenseNumber";

-- DropEnum
DROP TYPE "AvailabilityStatus";

-- DropEnum
DROP TYPE "FlightStatus";
