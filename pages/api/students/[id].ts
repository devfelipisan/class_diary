import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/client";
import { Prisma } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id ? req.query.id.toString() : "";

  console.log(id);

  if (req.method == "GET" && id != "all") {
    const studentsList = await prisma.students.findMany({ where: { id } });
    return res.status(200).json(studentsList);
  }

  if (req.method == "GET") {
    const studentsList = await prisma.students.findMany();
    return res.status(200).json(studentsList);
  }

  if (req.method == "POST" && id == "create") {
    const {
      name,
      birthday,
      graduating_class_id,
    }: Prisma.studentsCreateManyInput = req.body;
    if (graduating_class_id) {
      const newStudents = await prisma.students.create({
        data: {
          id: uuidv4(),
          name: name,
          birthday: birthday,
          graduating_class: {
            connect: { id: graduating_class_id },
          },
          created: new Date(Date()).toISOString(),
        },
      });
      return res.status(201).json(newStudents);
    }
    const newStudents = await prisma.students.create({
      data: {
        id: uuidv4(),
        name: name,
        birthday: birthday,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newStudents);
  }

  if (req.method == "DELETE" && id) {
    const deleteStudent = await prisma.students.delete({
      where: {
        id,
      },
    });
    res.status(202).json(deleteStudent);
  }
}
