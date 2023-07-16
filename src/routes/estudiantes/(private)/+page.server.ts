import type { PageServerLoad } from "./$types";
import type { Materia, Notas } from "../../../app";

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

  console.log(data.materias);
  return {
    estudiante,
    materias: data.materias.map((materia: Notas) => materia.materia),
  };
}) satisfies PageServerLoad;
