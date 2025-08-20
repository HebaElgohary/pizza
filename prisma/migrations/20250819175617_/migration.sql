/*
  Warnings:

  - Made the column `productId` on table `OrderedProduct` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."OrderedProduct" DROP CONSTRAINT "OrderedProduct_productId_fkey";

-- AlterTable
ALTER TABLE "public"."OrderedProduct" ALTER COLUMN "productId" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."Chef" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rolr" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "bio" TEXT NOT NULL,

    CONSTRAINT "Chef_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."OrderedProduct" ADD CONSTRAINT "OrderedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
