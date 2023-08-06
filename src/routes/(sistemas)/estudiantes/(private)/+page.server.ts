import type { PageServerLoad } from "./$types";
import type { Materia, Notas } from "../../../../app";

export const load = (async ({ locals: { estudiante, client }, cookies }) => {
  let headers = {
    Accept: "*/*",
    Authorization: cookies.get("access_token"),
  };

  const { ok, data } = await client.GET(
    "/api/students/materias",
    null,
    headers
  );

  if (!ok) return { estudiante, materias: [] };

  return {
    estudiante,
    materias: data.notas.map((materia: Notas) => ({
      materia: materia.materia,
      id: materia.id,
      download: "",
    })),
    ciclo: data.ciclo,
  };
}) satisfies PageServerLoad;
