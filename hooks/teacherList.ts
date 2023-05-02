export default async function TeachersList() {
  const result = fetch("/api/teachers/all").then(
    async (response) => await response.json().then((data) => data)
  );

  return result;
}
