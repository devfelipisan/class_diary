export default async function StudentsList() {
  const result = fetch("/api/students/all").then(
    async (response) => await response.json().then((data) => data)
  );

  return result;
}
