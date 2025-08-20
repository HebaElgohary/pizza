/*
  Warnings:

  - You are about to drop the column `rolr` on the `Chef` table. All the data in the column will be lost.
  - Added the required column `role` to the `Chef` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Chef" DROP COLUMN "rolr",
ADD COLUMN     "role" TEXT NOT NULL;
