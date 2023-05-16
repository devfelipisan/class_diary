import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id?.toString();

  if (req.method == "GET") {
    if (id !== "all") {
      const teacher = await prisma.teachers.findUnique({
        where: {
          id,
        },
      });
      return res.status(200).json(teacher);
    } else {
      const teachersList = await prisma.teachers.findMany();
      return res.status(200).json(teachersList);
    }
  }

  if (req.method == "POST" && id == "create") {
    const { name, email }: Prisma.teachersCreateInput = req.body;
    const newTeacher = await prisma.teachers.create({
      data: {
        id: uuidv4(),
        name: name,
        email: email,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newTeacher);
  }

  if (req.method == "DELETE") {
    const deleteTeacher = await prisma.teachers.delete({
      where: {
        id,
      },
    });
    res.status(202).json(deleteTeacher);
  }
}
