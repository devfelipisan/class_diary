-- CreateTable
CREATE TABLE "presences" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "presence" BOOLEAN NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "presences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "graduating_class" (
    "id" TEXT NOT NULL,
    "school_year" INTEGER NOT NULL,
    "school_series" TEXT NOT NULL,
    "teacher_id" TEXT NOT NULL,

    CONSTRAINT "graduating_class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "graduating_class_id" TEXT,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "presences_id_key" ON "presences"("id");

-- CreateIndex
CREATE UNIQUE INDEX "graduating_class_id_key" ON "graduating_class"("id");

-- CreateIndex
CREATE UNIQUE INDEX "students_id_key" ON "students"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_id_key" ON "teachers"("id");

-- AddForeignKey
ALTER TABLE "presences" ADD CONSTRAINT "presences_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "graduating_class" ADD CONSTRAINT "graduating_class_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_graduating_class_id_fkey" FOREIGN KEY ("graduating_class_id") REFERENCES "graduating_class"("id") ON DELETE SET NULL ON UPDATE CASCADE;
