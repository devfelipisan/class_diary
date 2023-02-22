import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const fieldsList = await prisma.fields.findMany();
    return res.status(200).json(fieldsList);
  }

  if (req.method == "POST") {
    const { id, description } = req.body;
    const newField = prisma.fields.create({
      data: {
        id,
        description,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newField);
  }
}
