/*
  Warnings:

  - Made the column `graduating_class_id` on table `students` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_graduating_class_id_fkey";

-- AlterTable
ALTER TABLE "students" ALTER COLUMN "graduating_class_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_graduating_class_id_fkey" FOREIGN KEY ("graduating_class_id") REFERENCES "graduating_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
