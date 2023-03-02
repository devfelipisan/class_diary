export interface StudentDto {
  id?: string;
  name: string;
  created?: string;
}

export async function getStudent(): Promise<Array<StudentDto>> {
  const response = await fetch("http://localhost:3000/api/students");
  const data = await response.json();
  return data;
}

export async function createStudent(body: StudentDto) {
  await fetch("http://localhost:3000/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => console.log(res.json))
    .catch((err) => console.log(err));
}
