/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "competences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "apprendiceship" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "competence_id" TEXT NOT NULL,
    "group_year_id" INTEGER NOT NULL,
    "unit_id" INTEGER NOT NULL,
    "object_id" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,
    "comment_id" TEXT NOT NULL,
    "resume_id" INTEGER NOT NULL,
    "field_id" INTEGER NOT NULL,
    "axis_id" INTEGER NOT NULL,
    CONSTRAINT "apprendiceship_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "competences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_group_year_id_fkey" FOREIGN KEY ("group_year_id") REFERENCES "group_years" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_object_id_fkey" FOREIGN KEY ("object_id") REFERENCES "objects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_axis_id_fkey" FOREIGN KEY ("axis_id") REFERENCES "axes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "units" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "resumes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "axes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "fields" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "comment" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "objects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "group_years" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "competences_id_key" ON "competences"("id");

-- CreateIndex
CREATE UNIQUE INDEX "apprendiceship_id_key" ON "apprendiceship"("id");
