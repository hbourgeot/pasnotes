import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import type { Materia } from "../../../../app";
import { triggerToast } from "$lib/utils/toast";

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

export const actions: Actions = {
  default: async ({ locals: { estudiante, client }, request, cookies }) => {
    const materias: string[] = (await request.formData()).getAll("materias") as unknown as string[];

    let headers = {
      Accept: "*/*",
      Authorization: cookies.get("access_token"),
    };

    for (const materia of materias) {
        const { ok, status, data } = await client.POST(`/api/students/add-materia/${materia}`, null, headers);
        console.log(ok, status, data);
      if (!ok) {
        return fail(400, { message: data.message });
        }
    }
  }
};