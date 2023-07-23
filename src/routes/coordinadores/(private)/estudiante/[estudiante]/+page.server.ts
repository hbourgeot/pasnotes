import type { PageServerLoad } from "./$types";
import type { Estudiante, Notas } from "../../../../../app";
export const load: PageServerLoad = async ({ locals: { client }, params }) => {
  const { ok, data } = await client.GET(`/api/students/${params.estudiante}`);
  if (!ok) return { estudiante: null, notas: [] };

  const estudiante: Estudiante = data.estudiante;

  const { ok: okMa, data: dataMa } = await client.GET(
    `/api/coordinacion/materias/${params.estudiante}`
  );
  if (!okMa) return { estudiante: estudiante, notas: [] };

  const notas: Notas[] = dataMa.materias;

  return { estudiante, notas };
};
