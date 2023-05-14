import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id?.toString();

  if (req.method == "GET" && id == "all") {
    const presencesList = await prisma.presences.findMany();
    return res.status(200).json(presencesList);
  }

  if (req.method == "GET" && id) {
    const presencesList = await prisma.presences.findMany({
      where: { student_id: id },
      select: {
        presence: true,
        student: { select: { name: true, birthday: true } },
      },
    });
    return res.status(200).json(presencesList);
  }

  if (req.method == "POST" && id == "create") {
    const { student_id, presence } = req.body;
    const newPresence = await prisma.presences.create({
      data: {
        id: uuidv4(),
        student: {
          connect: {
            id: student_id,
          },
        },
        presence,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newPresence);
  }
}
