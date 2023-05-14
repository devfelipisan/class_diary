export default async function StudentsList() {
  const result = fetch("/api/students/all").then(
    async (response) => await response.json().then((data) => data)
  );

  return result;
}

export async function StudentsCreate(body: string) {
  const result = fetch("/api/students/create", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body,
  });
  return result;
}
