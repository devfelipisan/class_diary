import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const competencesList = await prisma.competences.findMany();
    return res.status(200).json(competencesList);
  }

  if (req.method == "POST") {
    const { id, name } = req.body;
    const newCompetence = await prisma.competences.create({
      data: {
        id,
        name,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newCompetence);
  }
}
