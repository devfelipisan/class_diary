import { v4 as uuidv4 } from "uuid";
import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import { stringify } from "querystring";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    let id = stringify(req.query);
    id = id.split("=")[1];
    if (id !== undefined && id !== null && id !== "all") {
      const teacher = await prisma.teachers.findUnique({
        where: {
          id: id,
        },
        select: {
          graduating_class: {
            where: {
              teacher_id: id,
            },
          },
        },
      });
      return res.status(200).json(teacher);
    } else {
      const teachersList = await prisma.teachers.findMany();
      return res.status(200).json(teachersList);
    }
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
