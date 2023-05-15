export default async function ClassList(id?: string) {
  if (id) {
    const result = fetch(`/api/graduating_class/${id}`).then(
      async (response) => await response.json().then((data) => data)
    );
    return result;
  }
  const result = fetch("/api/graduating_class/all").then(
    async (response) => await response.json().then((data) => data)
  );

  return result;
}

export async function ClassDelete(id: string) {
  const result = fetch(`/api/graduating_class/${id}`, {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return result;
}
