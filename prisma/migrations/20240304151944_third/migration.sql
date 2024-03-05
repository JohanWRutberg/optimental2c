/*
  Warnings:

  - Made the column `journal` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "journal" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
