import { prisma } from "./prisma";

// Exemplo: Consulta otimizada por índice e paginação
export async function getRecentOccurrences(limit = 10, offset = 0) {
  return prisma.occurrence.findMany({
    orderBy: { createdAt: "desc" },
    skip: offset,
    take: limit,
    where: {
      status: "recebida",
    },
  });
}

// Exemplo: Consulta filtrada por cidade e status
export async function getOccurrencesByCity(city: string) {
  return prisma.occurrence.findMany({
    where: {
      city,
      status: "recebida",
    },
    orderBy: { createdAt: "desc" },
  });
}
