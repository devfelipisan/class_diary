import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if ((req.method = "GET")) {
    const teachersList = await prisma.teachers.findMany();
    return res.status(200).json(teachersList);
  }

  if ((req.method = "POST")) {
    const { name } = req.body;
    const newTeacher = await prisma.teachers.create({
      data: {
        name,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newTeacher);
  }
}
