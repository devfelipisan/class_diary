import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const axesList = await prisma.axes.findMany();
    return res.status(200).json(axesList);
  }

  if (req.method == "POST") {
    const { description } = req.body;
    const newAxios = await prisma.axes.create({
      data: {
        description,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newAxios);
  }
}
