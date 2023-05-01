import { UseGet } from "@/hooks/useApi";
import { Prisma } from "@prisma/client";

export async function GetTeachers(
  endpoint: string
): Promise<Prisma.teachersGetPayload<{ select: { id: true; name: true } }>> {
  const { data } = UseGet(endpoint);
  const response = data;
  return response;
}
