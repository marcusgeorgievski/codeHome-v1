/*
  Warnings:

  - You are about to drop the column `complete` on the `Project` table. All the data in the column will be lost.
  - Added the required column `status` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COMPLETE', 'ACTIVE', 'HOLD', 'PLANNING');

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "complete",
ADD COLUMN     "readme" TEXT,
ADD COLUMN     "status" TEXT NOT NULL,
ALTER COLUMN "feature" SET DEFAULT false;
