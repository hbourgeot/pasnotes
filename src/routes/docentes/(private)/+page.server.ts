import type { Materia } from "../../../app";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals: { docente, client } }) => {
  const { ok, data } = await client.GET(`/api/docente/${docente.cedula}`);
  if (!ok) {
    return {docente: {}, materias: [] as Materia[]}
  }
  return { docente, materias: data.materias as Materia[] };
}) satisfies PageServerLoad;
