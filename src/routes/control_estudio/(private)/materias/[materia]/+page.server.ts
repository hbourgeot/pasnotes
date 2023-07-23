import type { PageServerLoad } from "./$types";

export const load = (async ({ params, locals: { client } }) => {
  const { ok, data } = await client.GET(`/api/materias/${params.materia}`);
  if (!ok) return { materia: null };

  const carrera = data.materia.carrera;
  const estudiantes = data.materia.estudiantes;
  const materia = {
    id: data.materia.id,
    nombre: data.materia.nombre,
  };
  return { carrera, estudiantes, materia };
}) satisfies PageServerLoad;
