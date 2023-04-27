import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/client";
import { Prisma } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const skillsList = await prisma.graduating_class.findMany();
    return res.status(200).json(skillsList);
  }

  if (req.method == "POST") {
    const { school_year, school_series }: Prisma.graduating_classCreateInput =
      req.body;
    const newStudents = await prisma.graduating_class.create({
      data: {
        id: uuidv4(),
        school_year,
        school_series,
      },
    });
    return res.status(201).json(newStudents);
  }
}
