import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import type { Config } from "../../../../app";

export const load: PageServerLoad = async ({
  locals: { client, estudiante },
}) => {
  const { ok: isConfig, data: configure } = await client.GET("/api/config");
  if (!isConfig) return { materias: [], message: configure.message };

  let config: Config = configure;

  let inicio = new Date(config.horario_inicio);
  let final = new Date(config.horario_fin);
  let hoy = new Date();

  if (hoy < inicio)
    return {
      materias: [],
      estudiante: null,
      message: `Aun no puede inscribir materias. espere al ${inicio.getDate()}-${
        inicio.getMonth() + 1
      }`,
    };
  if (hoy > final)
    return {
      materias: [],
      estudiante: null,
      message: `El periodo para inscribir materias ha acabado.`,
    };
  const { ok, data } = await client.GET(
    `/api/materias/inscribir/${estudiante.cedula}`
  );
  if (!ok) return { materias: [], message: data.message };

  const materias = data.materias;
  return { materias, estudiante, message: "" };
};

export const actions: Actions = {
  default: async ({ locals: { client }, request, cookies }) => {
    const materias: string[] = (await request.formData()).getAll(
      "materias"
    ) as unknown as string[];

    let headers = {
      Accept: "*/*",
      Authorization: cookies.get("access_token"),
    };

    for (const materia of materias) {
      const { ok, data } = await client.POST(
        `/api/students/add-materia/${materia}`,
        null,
        headers
      );
      if (!ok) {
        return fail(400, { message: data.message });
      }
    }

    return { message: "¡Su horario ha sido inscrito exitosamente!" };
  },
};
