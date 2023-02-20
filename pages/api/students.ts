import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const studentsList = await prisma.students.findMany();
    return res.status(200).json(studentsList);
  }

  if (req.method == "POST") {
    const newStudents = await prisma.students.create({
      data: {
        id: uuidv4(),
        name: "Novo Estudante",
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newStudents);
  }
}
