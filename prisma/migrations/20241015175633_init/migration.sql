/*
  Warnings:

  - You are about to drop the column `company` on the `Flight` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Flight` table. All the data in the column will be lost.
  - Added the required column `timeEnd` to the `Flight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeStart` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flight" DROP COLUMN "company",
DROP COLUMN "time",
ADD COLUMN     "timeEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "timeStart" TIMESTAMP(3) NOT NULL;
