import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const groupYearsList = await prisma.group_years.findMany();
    return res.status(200).json(groupYearsList);
  }

  if (req.method == "POST") {
    const { description } = req.body;
    const newGroupYear = await prisma.group_years.create({
      data: {
        description,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newGroupYear);
  }
}
