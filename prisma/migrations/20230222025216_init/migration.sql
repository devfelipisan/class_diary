-- CreateTable
CREATE TABLE "apprendiceship" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "competence_id" TEXT NOT NULL,
    "group_year_id" TEXT NOT NULL,
    "unit_id" TEXT NOT NULL,
    "object_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,
    "comment_id" TEXT NOT NULL,
    "resume_id" TEXT,
    "field_id" TEXT,
    "axis_id" TEXT,
    "created" DATETIME NOT NULL,
    CONSTRAINT "apprendiceship_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "competences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_group_year_id_fkey" FOREIGN KEY ("group_year_id") REFERENCES "group_years" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "units" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_object_id_fkey" FOREIGN KEY ("object_id") REFERENCES "objects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_field_id_fkey" FOREIGN KEY ("field_id") REFERENCES "fields" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "apprendiceship_axis_id_fkey" FOREIGN KEY ("axis_id") REFERENCES "axes" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "competences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "units" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "resumes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "axes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "fields" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created" DATETIME
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "comment" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "objects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created" DATETIME
);

-- CreateTable
CREATE TABLE "group_years" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "presences" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "student_id" TEXT NOT NULL,
    "competence_id" TEXT NOT NULL,
    "presence" BOOLEAN NOT NULL,
    "created" DATETIME NOT NULL,
    CONSTRAINT "presences_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "presences_competence_id_fkey" FOREIGN KEY ("competence_id") REFERENCES "competences" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "coefficients" (
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

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created" DATETIME NOT NULL
);
