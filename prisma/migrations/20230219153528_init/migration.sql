/*
  Warnings:

  - You are about to drop the `subjects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `subject_id` on the `coefficients` table. All the data in the column will be lost.
  - You are about to drop the column `subject_id` on the `presences` table. All the data in the column will be lost.
  - Added the required column `competence_id` to the `coefficients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `competence_id` to the `presences` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "subjects";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_coefficients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "student_id" TEXT NOT NULL,
    "teacher_id" TEXT NOT NULL,
    "competence_id" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "created" DATETIME NOT NULL,
    CONSTRAINT "coefficients_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "coefficients_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "coefficients_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "competences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_coefficients" ("created", "grade", "id", "student_id", "teacher_id") SELECT "created", "grade", "id", "student_id", "teacher_id" FROM "coefficients";
DROP TABLE "coefficients";
ALTER TABLE "new_coefficients" RENAME TO "coefficients";
CREATE TABLE "new_presences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "student_id" TEXT NOT NULL,
    "competence_id" TEXT NOT NULL,
    "presence" BOOLEAN NOT NULL,
    "created" DATETIME NOT NULL,
    CONSTRAINT "presences_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "presences_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "competences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_presences" ("created", "id", "presence", "student_id") SELECT "created", "id", "presence", "student_id" FROM "presences";
DROP TABLE "presences";
ALTER TABLE "new_presences" RENAME TO "presences";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
