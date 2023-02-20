import { prisma } from "@/prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const apprendiceshipList = await prisma.apprendiceship.findMany();
    return res.status(200).json(apprendiceshipList);
  }

  if (req.method == "POST") {
    const {
      id,
      competence_id,
      group_year_id,
      unit_id,
      object_id,
      skill_id,
      comment_id,
      resume_id,
      field_id,
      axis_id,
    } = req.body;
    const newApprendiceship = await prisma.apprendiceship.create({
      data: {
        id,
        competence_id,
        group_year_id,
        unit_id,
        object_id,
        skill_id,
        comment_id,
        resume_id,
        field_id,
        axis_id,
        created: new Date(Date()).toISOString(),
      },
    });
    return res.status(201).json(newApprendiceship);
  }
}
