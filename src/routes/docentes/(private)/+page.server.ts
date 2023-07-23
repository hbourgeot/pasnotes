import type { PageServerLoad } from "./$types";

export const load = (async ({ locals: { client, docente } }) => {
  const { ok, status, data } = await client.GET(
    `/api/docente/${docente.cedula}`
  );
  console.log(data);
  if (!ok) return { docente: null, materias: [] };
  return { docente: data.docente, materias: data.materias };
}) satisfies PageServerLoad;
