import type { Docente, Materia } from "../../../../../../app";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals: { client }, params }) => {
  const { data } = await client.GET("/api/materias");
  const { data: dataDocentes } = await client.GET("/api/docente");

  const materiasData: Materia[] = data.materias;
  const docentes: Docente[] = dataDocentes.docente;

  const materias = materiasData.filter(
    (materia) =>
      materia.id_carrera == parseInt(params.carrera) &&
      materia.semestre == parseInt(params.semestre)
  );

  return {
    materias,
    carrera: params.carrera,
    carreras: data.carreras,
    docentes,
    semestre: getSemester(params.semestre),
  };
}) satisfies PageServerLoad;

function getSemester(semester: string): string {
  let sem = "";
  switch (semester) {
    case "1":
      sem = "1er semestre";
      break;
    case "2":
      sem = "2do semestre";
      break;
    case "3":
      sem = "3er semestre";
      break;
    case "4":
      sem = "4to semestre";
      break;
    case "5":
      sem = "5to semestre";
      break;
    case "6":
      sem = "6to semestre";
      break;
  }
  return sem;
}
