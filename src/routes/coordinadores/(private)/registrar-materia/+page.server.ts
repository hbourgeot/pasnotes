import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import type { Docente, Materia } from "../../../../app";
import type { AutocompleteOption } from "@skeletonlabs/skeleton";

export const load: PageServerLoad = async ({ locals: { client } }) => {
  const { ok, data } = await client.GET("/api/docente");
  if (!ok) {
    return { docentes: [], materias: [], autocom: [] };
  }

  let docentes: Docente[] = data.docente.map((docente: Docente) => ({
    cedula: docente.cedula,
    nombre: docente.nombre,
  }));

  const { ok: okey, data: dataMat } = await client.GET("/api/materias");
  if (!okey) {
    return { docentes: docentes, materias: [], autocom: [] };
  }

  const materias: string[] = dataMat.materias.map(
    (materia: Materia) => materia.id
  );
  const materiasAutocomplete = dataMat.materias.map(
    (materia: Materia) => ({
      nombre: materia.nombre,
      id: materia.id,
    })
  );

  return { docentes, materias, list: materiasAutocomplete };
};

export const actions: Actions = {
  default: async ({ locals: { client }, request }) => {
    const materia: Materia = Object.fromEntries(
      await request.formData()
    ) as unknown as Materia;

    const { ok, status, data } = await client.POST(
      "/api/materias/add",
      materia
    );
    if (!ok) {
      return fail(400, data);
    }

    return { message: "Materia registrada!" };
  },
};
