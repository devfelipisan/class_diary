export default async function ClassList() {
  const result = fetch("/api/graduating_class").then(
    async (response) => await response.json().then((data) => data)
  );

  return result;
}
