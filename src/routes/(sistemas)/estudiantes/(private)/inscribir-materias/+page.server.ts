import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import type { Config, Materia } from "../../../../../app";
import { systemLogger } from "$lib/server/logger";

export const load: PageServerLoad = async ({
  locals: { client, estudiante, config },
}) => {
  let inicio = new Date(config.horario_inicio);
  let final = new Date(config.horario_fin);
  let hoy = new Date();

  if (hoy < inicio) {
    systemLogger.info(
      `El estudiante ${estudiante.nombre} ha intentado entrar al apartado de inscribir materias cuando aún no ha comenzado dicho proceso`
    );
    return {
      materias: [],
      estudiante: null,
      message: `Aun no puede inscribir materias. espere al ${inicio.getDate()}-${
        inicio.getMonth() + 1
      }`,
    };
  }

  if (hoy > final) {
    systemLogger.info(
      `El estudiante ${estudiante.nombre} ha intentado entrar al apartado de inscribir materias cuando ya ha finalizado dicho proceso`
    );
    return {
      materias: [],
      estudiante: null,
      message: `El periodo para inscribir materias ha acabado.`,
    };
  }

  const { ok, data } = await client.GET(
    `/api/materias/inscribir/${estudiante.cedula}`
  );

  if (!ok) return { materias: [], message: data.message };

  systemLogger.warn(
    `El estudiante ${estudiante.nombre} entró a registrar su horario`
  );

  const materias = data.materias;
  return { materias, estudiante, message: "" };
};

export const actions: Actions = {
  default: async ({ locals: { client, estudiante }, request, cookies }) => {
    const materiasIDs: string[] = (await request.formData()).getAll(
      "materias"
    ) as unknown as string[];

    let headers = {
      Accept: "*/*",
      Authorization: cookies.get("access_token"),
    };

    const {
      ok,
      data: { materias: materiasData },
    } = await client.GET(`/api/materias/inscribir/${estudiante.cedula}`);
    if (!ok) return fail(400, { message: "Error desconocido" });

    let materias: Materia[] = [];
    for (const materia of materiasIDs) {
      materias.push(materiasData.find((mat: Materia) => mat.id == materia));
    }

    for (const materia of materiasIDs) {
       const currentMateria: Materia = materias.find(
         (mat: Materia) => mat.id === materia
       ) as unknown as Materia;

       const demasMaterias = materias.filter(
         (mat: Materia) =>
           mat.id !== currentMateria.id && mat.dia === currentMateria.dia
       );

       const [currentHoraInicioH, currentHoraInicioM] =
         currentMateria.hora_inicio.split(":").map(Number);
       const [currentHoraFinalH, currentHoraFinalM] = currentMateria.hora_fin
         .split(":")
         .map(Number);

       const materiaEnConflicto = demasMaterias.find((mat: Materia) => {
         const [matHoraInicioH, matHoraInicioM] = mat.hora_inicio
           .split(":")
           .map(Number);
         const [matHoraFinalH, matHoraFinalM] = mat.hora_fin
           .split(":")
           .map(Number);

         return (
           ((matHoraInicioH > currentHoraInicioH ||
             (matHoraInicioH === currentHoraInicioH &&
               matHoraInicioM >= currentHoraInicioM)) &&
             (matHoraInicioH < currentHoraFinalH ||
               (matHoraInicioH === currentHoraFinalH &&
                 matHoraInicioM < currentHoraFinalM))) ||
           ((matHoraFinalH > currentHoraInicioH ||
             (matHoraFinalH === currentHoraInicioH &&
               matHoraFinalM > currentHoraInicioM)) &&
             (matHoraFinalH < currentHoraFinalH ||
               (matHoraFinalH === currentHoraFinalH &&
                 matHoraFinalM <= currentHoraFinalM)))
         );
       });


      if (materiaEnConflicto) {
        return fail(400, {
          message: `La materia ${currentMateria.nombre} choca con ${materiaEnConflicto.nombre}`,
        });
      }

      const { ok, data } = await client.POST(
        `/api/students/add-materia/${materia}`,
        null,
        headers
      );
      if (!ok) {
        return fail(400, { message: data.message });
      }
    }

    systemLogger.warn(`El estudiante ${estudiante.nombre} ha terminado de registrar su horario satisfactoriamente`)

    return { message: "¡Su horario ha sido inscrito exitosamente!" };
  },
};
