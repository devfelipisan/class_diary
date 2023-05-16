export default async function TeachersList() {
  const result = fetch("/api/teachers/all").then(
    async (response) => await response.json().then((data) => data)
  );
  return result;
}

export async function TeacherDelete(id: string) {
  const result = fetch(`/api/teachers/${id}`, {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return result;
}
