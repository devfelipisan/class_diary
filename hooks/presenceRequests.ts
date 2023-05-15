export default async function PresenseList(id?: string) {
  if (id) {
    const result = fetch(`/api/presences/${id}`).then(
      async (response) => await response.json().then((data) => data)
    );
    return result;
  }
  const result = fetch("/api/presences/all").then(
    async (response) => await response.json().then((data) => data)
  );

  return result;
}

export async function PostPresences(body: string) {
  const result = fetch("/api/presences/create", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body,
  });
  return result;
}
