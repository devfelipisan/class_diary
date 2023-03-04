export interface StudentDto {
  id?: string;
  name: string;
  created?: string;
}

export default async function getStudent(): Promise<Array<StudentDto>> {
  const response = await fetch(`${process.env.LOCALHOST}/api/students`);
  const data = await response.json();
  return data;
}

export async function createStudent(body: StudentDto) {
  await fetch(`${process.env.LOCALHOST}/api/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => console.log(res.json))
    .catch((err) => console.log(err));
}

export async function deleteStudent(userId: string) {
  await fetch(`${process.env.LOCALHOST}/api/students`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: userId }),
  });
}
