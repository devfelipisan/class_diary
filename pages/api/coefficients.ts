import { prisma } from "@/prisma/client";
import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const coefficientsList = await prisma.coefficients.findMany();
    return res.status(200).json(coefficientsList);
  }

  if (req.method == "POST") {
    const { student_id, teacher_id, competence_id, grade } = req.body;
    const newCoefficient = await prisma.coefficients.create({
      data: {
        id: uuidv4(),
        //student_id,
        //teacher_id,
        competence_id,
        grade,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newCoefficient);
  }
}
