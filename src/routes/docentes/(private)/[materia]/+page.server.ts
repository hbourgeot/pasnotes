import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

let ciclo = "";
export const load = (async ({ params, locals: { client } }) => {
  const { ok, data } = await client.GET(`/api/materias/${params.materia}`);
  if (!ok)
    return { materia: null, estudiantes: null, carrera: null, file: null };

  const carrera = data.materia.carrera;
  const estudiantes = data.materia.estudiantes;
  ciclo = data.ciclo;
  const materia = {
    id: data.materia.id,
    nombre: data.materia.nombre,
  };

  return { carrera, estudiantes, materia, ciclo };
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

  carga: async ({ request, locals: { client }, params }) => {
    // @ts-ignore
    const { files } = Object.fromEntries(
      await request.formData()
    ) as unknown as File;
    console.log(files);

    const formData = new FormData();
    formData.append("file", files, "planificacion.pdf");
    formData.append("folder", params.materia);
    formData.append("ciclo", ciclo);

    const { ok, data } = await client.POST(`/api/archivos/upload`, formData);

    console.log(ok, data);
  },
};
