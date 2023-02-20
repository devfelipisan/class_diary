import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const objectsList = await prisma.objects.findMany();
    return res.status(200).json(objectsList);
  }

  if (req.method == "POST") {
    const { description } = req.body;
    const newObject = await prisma.objects.create({
      data: {
        description,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newObject);
  }
}
