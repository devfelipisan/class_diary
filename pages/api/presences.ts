import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const presencesList = await prisma.presences.findMany();
    return res.status(200).json(presencesList);
  }

  if (req.method == "POST") {
    const { student_id, competence_id, presence } = req.body;
    const newPresence = await prisma.presences.create({
      data: {
        id: uuidv4(),
        student_id,
        competence_id,
        presence,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newPresence);
  }
}
