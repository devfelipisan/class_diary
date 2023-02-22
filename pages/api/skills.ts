import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const skillsList = await prisma.skills.findMany();
    return res.status(200).json(skillsList);
  }

  if (req.method == "POST") {
    const { description } = req.body;
    const skill = await prisma.skills.findMany({
      where: { description: { contains: description } },
    });
    return res.status(200).json(skill);
  }
}
