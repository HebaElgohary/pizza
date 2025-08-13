-- CreateEnum
CREATE TYPE "public"."ProductExtras" AS ENUM ('CHEESE', 'ONION', 'POTATO');

-- CreateTable
CREATE TABLE "public"."Extra" (
    "id" TEXT NOT NULL,
    "name" "public"."ProductExtras" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Extra" ADD CONSTRAINT "Extra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
