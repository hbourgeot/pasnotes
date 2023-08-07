import { systemLogger } from "$lib/server/logger";
import type { Docente, Materia } from "../../../../../app";
import type { PageServerLoad } from "./$types";

interface Datos {
  carreras: { id: string; nombre: string }[];
  materias: Materia[];
}

interface MateriasPorSemestre {
  [semestre: string]: number;
}

interface MateriasPorCarrera {
  [carreraId: string]: MateriasPorSemestre;
}

export const load = (async ({ locals: { client, coordinador, config } }) => {
  systemLogger.info(`${coordinador.nombre} ha entrado a ver las materias`);

  const { ok, data } = await client.GET("/api/carreras");

  let carreras: { id: string; nombre: string }[] = data.carreras
    .map((carrera: { id: string; nombre: string }) => ({ ...carrera }))
    .filter(
      (carrera: { id: string; nombre: string }, index: any, self: any) =>
        index ===
        self.findIndex(
          (t: { id: string; nombre: string }) => t.id === carrera.id
        )
    );

  const materiasPorSemestrePorCarrera = obtenerMateriasPorSemestrePorCarrera(
    data,
    config.ciclo
  );

  carreras = carreras.filter((carrera) => {
    let cantidadTotal = materiasPorSemestrePorCarrera[carrera.id]?.primero ?? 0;
    cantidadTotal += materiasPorSemestrePorCarrera[carrera.id]?.segundo ?? 0;
    cantidadTotal += materiasPorSemestrePorCarrera[carrera.id]?.tercero ?? 0;
    cantidadTotal += materiasPorSemestrePorCarrera[carrera.id]?.cuarto ?? 0;
    cantidadTotal += materiasPorSemestrePorCarrera[carrera.id]?.quinto ?? 0;
    cantidadTotal += materiasPorSemestrePorCarrera[carrera.id]?.sexto ?? 0;
    if (cantidadTotal != 0) {
      return { ...carrera };
    }
  });

  return { carreras, cantidadMaterias: materiasPorSemestrePorCarrera };
}) satisfies PageServerLoad;

const obtenerNombreSemestre = (semestre: any) => {
  const numerosEnPalabras = [
    "primero",
    "segundo",
    "tercero",
    "cuarto",
    "quinto",
    "sexto",
  ];
  const numSemestre = parseInt(semestre, 10);
  if (numSemestre >= 1 && numSemestre <= numerosEnPalabras.length) {
    return numerosEnPalabras[numSemestre - 1];
  }
  return semestre;
};

const obtenerMateriasPorSemestrePorCarrera = (datos: Datos, ciclo: string) => {
  const materiasPorSemestrePorCarrera: MateriasPorCarrera = {};

  datos.materias.forEach((materia) => {
    const carreraId = materia.id_carrera;
    const semestre = obtenerNombreSemestre(materia.semestre);
    if (materia.ciclo == ciclo) {
      if (!materiasPorSemestrePorCarrera[carreraId]) {
        materiasPorSemestrePorCarrera[carreraId] = {};
      }

      if (materiasPorSemestrePorCarrera[carreraId][semestre]) {
        materiasPorSemestrePorCarrera[carreraId][semestre]++;
      } else {
        materiasPorSemestrePorCarrera[carreraId][semestre] = 1;
      }
    }
  }); 

  return materiasPorSemestrePorCarrera;
};
