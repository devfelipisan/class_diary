/*
  Warnings:

  - The primary key for the `group_years` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_group_years" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);
INSERT INTO "new_group_years" ("created", "description", "id") SELECT "created", "description", "id" FROM "group_years";
DROP TABLE "group_years";
ALTER TABLE "new_group_years" RENAME TO "group_years";
CREATE UNIQUE INDEX "group_years_id_key" ON "group_years"("id");
CREATE TABLE "new_apprendiceship" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "competence_id" TEXT NOT NULL,
    "group_year_id" TEXT NOT NULL,
    "unit_id" INTEGER NOT NULL,
    "object_id" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,
    "comment_id" TEXT NOT NULL,
    "resume_id" INTEGER NOT NULL,
    "field_id" INTEGER NOT NULL,
    "axis_id" INTEGER NOT NULL,
    "created" DATETIME NOT NULL,
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
INSERT INTO "new_apprendiceship" ("axis_id", "comment_id", "competence_id", "created", "field_id", "group_year_id", "id", "object_id", "resume_id", "skill_id", "unit_id") SELECT "axis_id", "comment_id", "competence_id", "created", "field_id", "group_year_id", "id", "object_id", "resume_id", "skill_id", "unit_id" FROM "apprendiceship";
DROP TABLE "apprendiceship";
ALTER TABLE "new_apprendiceship" RENAME TO "apprendiceship";
CREATE UNIQUE INDEX "apprendiceship_id_key" ON "apprendiceship"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
