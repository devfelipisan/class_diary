import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const studentsList = await prisma.students.findMany();
    return res.status(200).json(studentsList);
  }

  if (req.method == "POST") {
    const { name } = req.body;
    const newStudents = await prisma.students.create({
      data: {
        id: uuidv4(),
        name: name,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newStudents);
  }
}
