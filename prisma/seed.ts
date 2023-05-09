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

interface teachersDto {
  id: string;
  name: string;
  email: string;
  created: string;
}

const teachersArray: Array<teachersDto> = [
  {
    id: "3f55b930-652f-48cf-a347-831cdf66001f",
    name: "Carolina Jaqueline Martins",
    email: "carolina_martins@emcinfo.com.br",
    created: "2023-05-08T14:41:10.000Z",
  },
  {
    id: "ff5dd933-3312-4738-8faf-753be62dfe12",
    name: "Priscila Fabiana Teresinha Farias",
    email: "priscilafabianafarias@zf.com",
    created: "2023-05-08T14:50:20.000Z",
  },
  {
    id: "0eaa8734-56aa-4500-81e7-a04adde658f7",
    name: "Nair Raimunda Nair Assis",
    email: "nair-assis96@gemail.com",
    created: "2023-05-08T14:50:42.000Z",
  },
  {
    id: "1ac155c0-f058-4e57-8142-9cb122023a41",
    name: "Letícia Vera Pinto",
    email: "leticia_vera_pinto@hidracom.com.br",
    created: "2023-05-08T14:51:00.000Z",
  },
  {
    id: "77bb3075-d8bf-4052-b797-8aec6a11f9e6",
    name: "Luciana Amanda Almeida",
    email: "luciana-almeida80@monetto.com.br",
    created: "2023-05-08T14:51:18.000Z",
  },
  {
    id: "478f87bc-1d37-453e-afe5-bb74f46830ad",
    name: "Josefa Tânia Galvão",
    email: "josefa.tania.galvao@tribunaimpressa.com.br",
    created: "2023-05-08T14:51:58.000Z",
  },
];

interface graduatingClassDto {
  id: string;
  school_year: number;
  school_series: string;
  teacher_id: string;
}

const graduatingClassArray: Array<graduatingClassDto> = [
  {
    id: "77a67e98-b92e-4a3c-8dcf-aaacb1726614",
    school_series: "1º",
    school_year: 1,
    teacher_id: "2581b418-15b5-455e-9265-e44474c2b6e5",
  },
  {
    id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
    school_series: "2º",
    school_year: 2,
    teacher_id: "c78a6aa7-08e7-4d5a-9229-2d721b2508b2",
  },
  {
    id: "b44f6e96-193a-405f-90b6-35c006992930",
    school_series: "3º",
    school_year: 3,
    teacher_id: "3f55b930-652f-48cf-a347-831cdf66001f",
  },
  {
    id: "151b58ea-1929-4ac0-a7e7-cca9d6789c6d",
    school_series: "4º",
    school_year: 4,
    teacher_id: "ff5dd933-3312-4738-8faf-753be62dfe12",
  },
];

interface studentsDto {
  id: string;
  name: string;
  birthday: string;
  created: string;
  graduating_class_id: string;
}

const studentsArray: Array<studentsDto> = [
  {
    id: "9e80a214-ca72-480a-b1e3-0f57929a1715",
    name: "Isabelle Sandra Figueiredo",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:42:49.000Z",
    graduating_class_id: "77a67e98-b92e-4a3c-8dcf-aaacb1726614",
  },
  {
    id: "0029af12-54fb-47b2-b6eb-79669674a319",
    name: "Sônia Lavínia Monteiro",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:37.000Z",
    graduating_class_id: "77a67e98-b92e-4a3c-8dcf-aaacb1726614",
  },
  {
    id: "702c1ae1-231c-49e8-89cb-e645c96f5b05",
    name: "Evelyn Analu Barros",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:35.000Z",
    graduating_class_id: "77a67e98-b92e-4a3c-8dcf-aaacb1726614",
  },
  {
    id: "5fdef224-89a0-49cf-b353-a0eacca09e64",
    name: "Regina Sabrina Hadassa Barros",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:34.000Z",
    graduating_class_id: "77a67e98-b92e-4a3c-8dcf-aaacb1726614",
  },
  {
    id: "6ac5d897-24ec-4c84-8f19-73e9e9f94c83",
    name: "Marlene Camila Pinto",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:33.000Z",
    graduating_class_id: "77a67e98-b92e-4a3c-8dcf-aaacb1726614",
  },
  {
    id: "eb2f64a7-e57f-4943-b902-a4776ed2c67a",
    name: "Regina Benedita Sabrina Nogueira",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:32.000Z",
    graduating_class_id: "77a67e98-b92e-4a3c-8dcf-aaacb1726614",
  },
  {
    id: "d344f92d-697d-489b-baa5-b7bd1a48a5b8",
    name: "Ana Beatriz Rezende",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:30.000Z",
    graduating_class_id: "77a67e98-b92e-4a3c-8dcf-aaacb1726614",
  },
  {
    id: "558c33cb-a455-442b-8c17-81e95f2f3579",
    name: "Alessandra Fernanda Rebeca Assis",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:29.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "1e4d3dd7-53fc-42cd-ba68-e53cd5f49294",
    name: "Sarah Josefa Barbosa",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:28.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "af9e6729-69e2-4ddd-9642-7e4e8ccb7ed1",
    name: "Isabelly Olivia Rezende",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:27.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "a228654e-c093-442a-b983-adc7d349b413",
    name: "Antonella Isadora Caldeira",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:25.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "34c2b4b3-be6a-4449-90c4-00f62b97e40f",
    name: "Daiane Sarah Beatriz Drumond",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:24.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "ab679156-2444-41f0-922f-60e191530860",
    name: "Gabriela Cecília Cardoso",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:23.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "09c6ce7b-cbe1-401d-a0f4-50c891421c82",
    name: "Vanessa Catarina das Neves",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:21.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "fcc29a3f-c39a-447a-b60d-fc4df353d21e",
    name: "Tereza Rayssa Oliveira",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:20.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "1881bb70-686b-4126-baea-06e8d2aea594",
    name: "Rosângela Juliana Fátima Martins",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:19.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "4b0d117d-2dc6-4d30-8c27-ba5a9edba807",
    name: "Alana Gabriela Raimunda da Cunha",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:18.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "f3887178-6b2f-41d7-b1e8-7f3c492c38a8",
    name: "Sophia Alana Cristiane Fernandes",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:16.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "0d00b6ed-29d6-47ba-b400-d0973aa8d376",
    name: "Evelyn Yasmin da Luz",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:15.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "914c1f21-fbc0-4dfa-9837-b3c8bdd21dfc",
    name: "Carolina Kamilly Laura Ferreira",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:14.000Z",
    graduating_class_id: "601a1b0b-b989-49d7-9d3c-b6a9b638b301",
  },
  {
    id: "fc519217-6939-47fa-ac88-fd176872eaa4",
    name: "Clarice Rosa Fátima Aparício",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:12.000Z",
    graduating_class_id: "b44f6e96-193a-405f-90b6-35c006992930",
  },
  {
    id: "9edbc7d9-175c-4f50-974a-9f6fc25ff858",
    name: "Cristiane Tatiane Drumond",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:11.000Z",
    graduating_class_id: "b44f6e96-193a-405f-90b6-35c006992930",
  },
  {
    id: "01610ad5-806a-4cea-8cd8-689e090e247e",
    name: "Rosângela Luana Sueli Silveira",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:10.000Z",
    graduating_class_id: "b44f6e96-193a-405f-90b6-35c006992930",
  },
  {
    id: "0228caeb-ef81-43ef-b185-af3261daf697",
    name: "Amanda Brenda Costa",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:09.000Z",
    graduating_class_id: "b44f6e96-193a-405f-90b6-35c006992930",
  },
  {
    id: "dfed1544-26c9-444e-b0be-db31485d3512",
    name: "Marli Aparecida Gonçalves",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:07.000Z",
    graduating_class_id: "b44f6e96-193a-405f-90b6-35c006992930",
  },
  {
    id: "1f428bf1-f1d7-44cb-ba1f-e14004eb68d0",
    name: "Teresinha Betina Cardoso",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:06.000Z",
    graduating_class_id: "b44f6e96-193a-405f-90b6-35c006992930",
  },
  {
    id: "4107108c-3b2a-4203-b9c5-7f2b84c5f38d",
    name: "Kamilly Manuela Rezende",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:05.000Z",
    graduating_class_id: "151b58ea-1929-4ac0-a7e7-cca9d6789c6d",
  },
  {
    id: "fbd710c9-577c-4c7f-b235-fa1bd1275e89",
    name: "Rosa Melissa Moura",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:03.000Z",
    graduating_class_id: "151b58ea-1929-4ac0-a7e7-cca9d6789c6d",
  },
  {
    id: "a121b7ae-5d9c-49cb-93f9-1d82a78d2e9a",
    name: "Yasmin Rosângela Aparício",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:02.000Z",
    graduating_class_id: "151b58ea-1929-4ac0-a7e7-cca9d6789c6d",
  },
  {
    id: "04c670d0-582c-4867-8b98-49b29706ce2c",
    name: "Laís Márcia Isabela Almeida",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:53:01.000Z",
    graduating_class_id: "151b58ea-1929-4ac0-a7e7-cca9d6789c6d",
  },
  {
    id: "b5006e30-0640-42ed-8f70-bf00e1bd14e5",
    name: "Caroline Isabel Ayla Melo",
    birthday: "2021-12-12T03:00:00.000Z",
    created: "2023-05-08T14:52:59.000Z",
    graduating_class_id: "151b58ea-1929-4ac0-a7e7-cca9d6789c6d",
  },
];

interface presenceDto {
  id: string;
  student_id: string;
  competence_id: string;
  presence: boolean;
  created: string;
}

const presenseArray: Array<presenceDto> = [
  {
    id: "d236c98c-af62-4655-a1ee-4a17bfaff3d3",
    student_id: "04c670d0-582c-4867-8b98-49b29706ce2c",
    competence_id: "LI",
    presence: true,
    created: "2023-05-08T14:38:30.000Z",
  },
  {
    id: "fee1ca04-0eaf-4b50-843f-0d83892b1320",
    student_id: "01610ad5-806a-4cea-8cd8-689e090e247e",
    competence_id: "AR",
    presence: true,
    created: "2023-05-09T14:37:20.000Z",
  },
  {
    id: "7cdd9172-2f31-44d8-bdea-6fd9f45e30c4",
    student_id: "4107108c-3b2a-4203-b9c5-7f2b84c5f38d",
    competence_id: "GE",
    presence: true,
    created: "2023-05-09T14:37:36.000Z",
  },
  {
    id: "0b0f2c30-ddda-424e-a7ad-0541358fc081",
    student_id: "4107108c-3b2a-4203-b9c5-7f2b84c5f38d",
    competence_id: "CI",
    presence: true,
    created: "2023-05-09T14:37:45.000Z",
  },
  {
    id: "9a63eae6-b601-4d41-9e0d-6874eefbd1e1",
    student_id: "4107108c-3b2a-4203-b9c5-7f2b84c5f38d",
    competence_id: "MA",
    presence: true,
    created: "2023-05-09T14:37:53.000Z",
  },
  {
    id: "048fa233-4ded-4c2b-aea9-74bde3d74f91",
    student_id: "4107108c-3b2a-4203-b9c5-7f2b84c5f38d",
    competence_id: "EF",
    presence: true,
    created: "2023-05-09T14:37:59.000Z",
  },
  {
    id: "ed5eeffc-10d6-469a-b3b2-fa9a9de33fb5",
    student_id: "4107108c-3b2a-4203-b9c5-7f2b84c5f38d",
    competence_id: "MA",
    presence: true,
    created: "2023-05-09T14:42:30.000Z",
  },
  {
    id: "8c176e10-0fd4-41e3-ae03-fa9c167d44d2",
    student_id: "4107108c-3b2a-4203-b9c5-7f2b84c5f38d",
    competence_id: "LI",
    presence: true,
    created: "2023-05-09T14:43:08.000Z",
  },
  {
    id: "f0bc603f-04fc-4563-a193-8436c06caf7a",
    student_id: "01610ad5-806a-4cea-8cd8-689e090e247e",
    competence_id: "EF",
    presence: true,
    created: "2023-05-09T14:43:31.000Z",
  },
  {
    id: "5a94ff4f-3198-4aa0-aaf5-cabc7d675ebc",
    student_id: "01610ad5-806a-4cea-8cd8-689e090e247e",
    competence_id: "CI",
    presence: true,
    created: "2023-05-09T14:43:58.000Z",
  },
  {
    id: "6e564a11-a60f-46ab-a631-0ab8bca4cd16",
    student_id: "04c670d0-582c-4867-8b98-49b29706ce2c",
    competence_id: "GE",
    presence: true,
    created: "2023-05-09T14:44:33.000Z",
  },
  {
    id: "3ac55dfe-0ea1-4dc7-bcfa-2bc89ab87852",
    student_id: "04c670d0-582c-4867-8b98-49b29706ce2c",
    competence_id: "GE",
    presence: true,
    created: "2023-05-09T14:44:42.000Z",
  },
  {
    id: "dac5410f-6c4e-4063-9ccd-49932da78986",
    student_id: "04c670d0-582c-4867-8b98-49b29706ce2c",
    competence_id: "CI",
    presence: true,
    created: "2023-05-09T14:44:08.000Z",
  },
  {
    id: "b5419b92-04fb-4006-a215-53849d28f614",
    student_id: "04c670d0-582c-4867-8b98-49b29706ce2c",
    competence_id: "EF",
    presence: true,
    created: "2023-05-09T14:43:42.000Z",
  },
  {
    id: "8c176e10-0fd4-41e3-ae03-fa9c167d44d2",
    student_id: "04c670d0-582c-4867-8b98-49b29706ce2c",
    competence_id: "LI",
    presence: true,
    created: "2023-05-09T14:43:08.000Z",
  },
  {
    id: "6a997719-b89e-4928-a862-c39f7c4a770c",
    student_id: "fcc29a3f-c39a-447a-b60d-fc4df353d21e",
    competence_id: "MA",
    presence: true,
    created: "2023-05-09T14:42:56.000Z",
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

  teachersArray.map(async (teacher: teachersDto) => {
    await prisma.teachers.upsert({
      where: { id: teacher.id },
      update: { name: teacher.name, email: teacher.email },
      create: {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        created: new Date(Date()).toISOString(),
      },
    });
  });

  graduatingClassArray.map(async (graduatingClass: graduatingClassDto) => {
    await prisma.graduating_class.upsert({
      where: { id: graduatingClass.id },
      update: {
        school_series: graduatingClass.school_series,
        school_year: graduatingClass.school_year,
        teacher_id: graduatingClass.teacher_id,
      },
      create: {
        id: graduatingClass.id,
        school_series: graduatingClass.school_series,
        school_year: graduatingClass.school_year,
        teacher_id: graduatingClass.teacher_id,
      },
    });
  });

  studentsArray.map(async (students: studentsDto) => {
    await prisma.students.upsert({
      where: { id: students.id },
      update: {
        name: students.name,
        birthday: students.birthday,
        graduating_class_id: students.graduating_class_id,
        created: students.created,
      },
      create: {
        id: students.id,
        name: students.name,
        birthday: students.birthday,
        graduating_class_id: students.graduating_class_id,
        created: students.created,
      },
    });
  });

  presenseArray.map(async (presences: presenceDto) => {
    await prisma.presences.upsert({
      where: { id: presences.id },
      update: {
        competence_id: presences.competence_id,
        presence: presences.presence,
      },
      create: {
        id: presences.id,
        student_id: presences.student_id,
        competence_id: presences.competence_id,
        presence: presences.presence,
        created: presences.created,
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
