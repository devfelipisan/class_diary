import { prisma } from "@/prisma/client";
import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const unitsList = await prisma.units.findMany();
    return res.status(200).json(unitsList);
  }

  if (req.method == "POST") {
    const { id, description } = req.body;
    const newUnits = await prisma.units.create({
      data: {
        id: uuidv4(),
        description,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newUnits);
  }
}
