import { systemLogger } from "$lib/server/logger";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ params, locals: { coordinador, client } }) => {
  systemLogger.info(
    `${coordinador.nombre} ha entrado a ver la materia ${params.materia}`
  );
  const { ok, data } = await client.GET(`/api/materias/${params.materia}`);
  if (!ok) return { materia: null };

  const carrera = data.materia.carrera;
  const estudiantes = data.materia.estudiantes;
  console.log(estudiantes);
  const materia = {
    id: data.materia.id,
    nombre: data.materia.nombre,
  };
  return { carrera, estudiantes, materia };
}) satisfies PageServerLoad;
