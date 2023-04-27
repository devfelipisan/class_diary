import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method);

  if (req.method == "GET") {
    const teachersList = await prisma.teachers.findMany();
    return res.status(200).json(teachersList);
  }

  if (req.method == "POST") {
    const { name, email }: Prisma.teachersCreateInput = req.body;
    const newTeacher = await prisma.teachers.create({
      data: {
        id: uuidv4(),
        name: name,
        email: email,
        created: new Date(Date()).toISOString(),
      },
    });
    console.log(newTeacher);
    return res.status(201).json(newTeacher);
  }

  if (req.method == "DELETE") {
    const { id } = req.body;
    const deleteTeacher = await prisma.teachers.delete({
      where: {
        id,
      },
    });
    res.json(deleteTeacher);
  }
}
