import { prisma } from "./client";

interface competencesdto {
  id: string;
  name: string;
  created?: string;
}

const competencesArray: Array<competencesdto> = [
  {
    id: "LP",
    name: "Língua Portuguesa",
  },
  {
    id: "AR",
    name: "Arte",
  },
  {
    id: "EF",
    name: "Educação Física",
  },
  {
    id: "LI",
    name: "Língua Inglesa",
  },
  {
    id: "MA",
    name: "Matemática",
  },
  {
    id: "CI",
    name: "Ciências",
  },
  {
    id: "GE",
    name: "Geografia",
  },
  {
    id: "HI",
    name: "História",
  },
  {
    id: "ER",
    name: "Ensino Religioso",
  },
];

async function main() {
  competencesArray.map(async (competence: competencesdto) => {
    await prisma.competences.upsert({
      where: { id: competence.id },
      update: { name: competence.name },
      create: {
        id: competence.id,
        name: competence.name,
        created: new Date(Date()).toISOString(),
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
