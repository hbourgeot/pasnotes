import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import type { Docente, Materia } from "../../../../app";

export const load: PageServerLoad = async ({ locals: { client } }) => {
  const { ok, data } = await client.GET("/api/docente");
  if (!ok) {
    return fail(400, {message: "Error desconocido"})
  }

  let docentes: Docente[] = data.docente.map((docente: Docente) => ({ cedula: docente.cedula, nombre: docente.nombre }));
  return {docentes}
};

export const actions: Actions = {
  default: async ({ locals: { client }, request }) => {
    const materia: Materia = Object.fromEntries(await request.formData()) as unknown as Materia;

    const { ok, status, data } = await client.POST("/api/materias/add", materia);
    if (!ok) {
      return fail(400, data);
    }

    return { message: "Materia registrada!" };
  }
};