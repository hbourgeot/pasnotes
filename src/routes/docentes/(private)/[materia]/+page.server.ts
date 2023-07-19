import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ params, locals: { client } }) => {
  const { ok, data } = await client.GET(`/api/materias/${params.materia}`);
  if (!ok) return { materia: null };

  const carrera = data.materia.carrera;
  const estudiantes = data.materia.estudiantes;
  const ciclo = data.ciclo;
  const materia = {
    id: data.materia.id,
    nombre: data.materia.nombre,
  };

  const { ok: okFile, data: file } = await client.GET(
    `/api/archivos/file/planificacion.pdf?folder=${materia.nombre
      .toLowerCase()
      .replaceAll(" ", "_")}&ciclo=${ciclo}`
  );
  let fileExists = true;
  console.log(ok, file);

  if (!okFile) fileExists = false;

  console.log(file, fileExists);
  return { carrera, estudiantes, materia };
}) satisfies PageServerLoad;

export const actions: Actions = {
  notas: async ({ params, cookies, request, locals: { client } }) => {
    const campo = ["nota1", "nota2", "nota3"];
    let obj: any = Object.fromEntries(await request.formData());

    obj = {
      ...obj,
      nombre_campo: campo[obj.nombre_campo - 1],
      materia: params.materia,
    };

    console.log(obj);

    let headers = {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: cookies.get("access_token"),
    };

    const { ok, data } = await client.PATCH(
      "/api/docente/upload",
      obj,
      headers
    );

    if (!ok) return fail(400, { message: data.message });
    return { message: "Modificado!" };
  },

  carga: async ({ request, locals: { client } }) => {
    console.log(Object.fromEntries(await request.formData()));
  },
};
