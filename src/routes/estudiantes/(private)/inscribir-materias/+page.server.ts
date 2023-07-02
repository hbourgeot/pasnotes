import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Materia } from "../../../../app";

export const load: PageServerLoad = async ({locals:{client, estudiante}}) => {
  const { ok, data } = await client.GET("/api/materias");
  if (!ok) return {materias: []}

  console.log(estudiante.carrera, "career");
  const materias = data.materias.filter((materia: Materia) => {
    if (estudiante.semestre == 1 && estudiante.estado == "nuevo ingreso") {
      return materia.id_carrera === estudiante.carrera && materia.semestre.toString() == "1";
    }
  });
  console.log("mat", materias);
  return {materias, estudiante}
};