/*
  Warnings:

  - You are about to alter the column `amount` on the `Balance` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Changed the type of `amount` on the `onRampTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `onRampTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Balance" ALTER COLUMN "amount" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "onRampTransaction" DROP COLUMN "amount",
ADD COLUMN     "amount" INTEGER NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "OnRampStatus" NOT NULL;
