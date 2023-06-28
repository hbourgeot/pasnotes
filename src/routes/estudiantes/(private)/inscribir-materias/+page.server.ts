import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Materia } from "../../../../app";

export const load: PageServerLoad = async ({locals:{client, estudiante}}) => {
  const { ok, data } = await client.GET("/api/materias");
  if (!ok) return fail(400, { message: "Error desconocido" })
  
  console.log(data);

  const materias = data.materias.filter((materia: Materia) => materia.id_carrera === estudiante.carrera);
  return {materias}
};