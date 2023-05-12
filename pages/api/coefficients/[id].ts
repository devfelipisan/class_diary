import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const id = JSON.stringify(req.query.id);
    if (id != "all") {
      const coefficientsList = await prisma.coefficients.findMany();
      return res.status(200).json(coefficientsList);
    }
    const coefficientsView = await prisma.coefficients.findMany({
      where: { id },
    });
    return res.status(200).json(coefficientsView);
  }

  if (req.method == "PUT") {
    const { id, student_id, teacher_id, competence_id, grade } = req.body;
    const coefficientsDelete = await prisma.coefficients.upsert({
      where: { id },
      update: { grade },
      create: {
        id,
        student_id,
        teacher_id,
        competence_id,
        grade,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(coefficientsDelete);
  }

  if (req.method == "POST") {
    const { student_id, teacher_id, competence_id, grade } = req.body;
    const newCoefficient = await prisma.coefficients.create({
      data: {
        id: uuidv4(),
        student_id,
        teacher_id,
        competence_id,
        grade,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newCoefficient);
  }
}
