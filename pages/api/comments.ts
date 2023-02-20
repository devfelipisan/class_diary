import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const commentsList = await prisma.comments.findMany();
    return res.status(200).json(commentsList);
  }

  if (req.method == "POST") {
    const { comment } = req.body;
    const newComment = await prisma.comments.create({
      data: {
        comment,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newComment);
  }
}
