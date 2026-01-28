/*
  Warnings:

  - You are about to drop the column `auth_type` on the `Merchant` table. All the data in the column will be lost.
  - Added the required column `authType` to the `Merchant` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OnRampStatus" AS ENUM ('Success', 'Failure', 'Processing');

-- AlterTable
ALTER TABLE "Merchant" DROP COLUMN "auth_type",
ADD COLUMN     "authType" "AuthType" NOT NULL;

-- CreateTable
CREATE TABLE "onRampTransaction" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "amount" "OnRampStatus" NOT NULL,
    "status" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "onRampTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Balance" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "locked" INTEGER NOT NULL,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "onRampTransaction_token_key" ON "onRampTransaction"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Balance_userId_key" ON "Balance"("userId");

-- AddForeignKey
ALTER TABLE "onRampTransaction" ADD CONSTRAINT "onRampTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Balance" ADD CONSTRAINT "Balance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
