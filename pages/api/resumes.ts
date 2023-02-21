import { prisma } from "@/prisma/client";
import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const resumesList = await prisma.resumes.findMany();
    return res.status(200).json(resumesList);
  }

  if (req.method == "POST") {
    const { description } = req.body;
    const newResume = await prisma.resumes.create({
      data: {
        id: uuidv4(),
        description,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newResume);
  }
}
