import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id?.toString();

  if (req.method == "GET") {
    try {
      if (id == "all") {
        const graduatinList = await prisma.graduating_class.findMany({
          select: {
            id: true,
            school_series: true,
            school_year: true,
            teacher_id: true,
            teacher: { select: { name: true, email: true } },
            student_id: true,
          },
        });
        return res.status(200).json(graduatinList);
      } else {
        const graduatinList = await prisma.graduating_class.findFirst({
          where: { id },
          select: {
            id: true,
            school_series: true,
            school_year: true,
            teacher_id: true,
            teacher: { select: { name: true, email: true } },
            student_id: true,
          },
        });
        return res.status(200).json(graduatinList);
      }
    } catch (e: any) {
      return res.status(500).json(`${e}`);
    }
  }

  if (req.method == "POST" && id == "create") {
    const { school_year, school_series, student_id, teacher_id } = req.body;
    if (student_id) {
      const newGraduating = await prisma.graduating_class.create({
        data: {
          id: uuidv4(),
          school_year,
          school_series,
          student_id: {
            connect: {
              id: student_id,
            },
          },
          teacher_id,
        },
      });
      return res.status(201).json(newGraduating);
    }
    const newGraduating = await prisma.graduating_class.create({
      data: {
        id: uuidv4(),
        school_year,
        school_series,
        teacher_id,
      },
    });
    return res.status(201).json(newGraduating);
  }

  if (req.method == "DELETE" && id) {
    const graduatinDelete = await prisma.graduating_class.delete({
      where: {
        id,
      },
    });
    return res.status(202).json(graduatinDelete);
  }
}
