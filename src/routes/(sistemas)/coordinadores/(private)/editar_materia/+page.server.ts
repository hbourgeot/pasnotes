import { systemLogger } from '$lib/server/logger';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { Docente, Materia } from '../../../../../app';

export const load = (async ({ locals: { client, coordinador, config } }) => {
    const { ok, data } = await client.GET("/api/docente");
    if (!ok) {
      return { docentes: [], materias: [], autocom: [] };
    }

    systemLogger.info(
      `${coordinador.nombre} ha entrado a registrar una nueva materia`
    );

    let docentes: Docente[] = data.docente
      .map((docente: Docente) => ({
        cedula: docente.cedula,
        nombre: docente.nombre,
      }))
      .filter(
        (docente: Docente, index: any, self: any) =>
          index === self.findIndex((t: Docente) => t.cedula === docente.cedula)
      );

    const { ok: okey, data: dataMat } = await client.GET("/api/materias");
    if (!okey) {
      return { docentes: docentes, materias: [], autocom: [] };
    }

    const materias: string[] = dataMat.materias
      .filter((materia: Materia) => materia.id !== null)
      .map((materia: Materia) => materia.id);

    const materiasAutocomplete = dataMat.materias
      .filter((materia: Materia) => materia.id !== null)
      .map((materia: Materia) => ({
        nombre: materia.nombre,
        id: materia.id,
      }));

    const {
      ok: isOk,
      data: { carreras },
    } = await client.GET("/api/carreras");

    let carrerasNoRepetidas: { id: string; nombre: string }[] = carreras
      .map((carrera: { id: string; nombre: string }) => ({ ...carrera }))
      .filter(
        (carrera: { id: string; nombre: string }, index: any, self: any) =>
          index ===
          self.findIndex(
            (t: { id: string; nombre: string }) => t.id === carrera.id
          )
      );

    return {
      docentes,
      materias,
      list: materiasAutocomplete,
      carreras: carrerasNoRepetidas,
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ locals: { client, superUsuario }, request }) => {
        const carrera: any = Object.fromEntries(await request.formData());
        console.log(carrera);

      const { ok, data } = await client.PUT("/api/carreras/update/"+carrera.id, carrera);

      console.log(ok, data);

      if (!ok) return fail(400, { message: data.message });

      systemLogger.info(`${superUsuario.nombre} ha editado la carrera ${carrera.id}`)

      return { message: "Modificado exitosamente!" };
  },
};