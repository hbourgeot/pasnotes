import type { Docente, Materia } from '../../../../app';
import type { PageServerLoad } from './$types';

export const load = (async ({locals:{client}}) => {
    const { data } = await client.GET("/api/materias");
    const { data: dataDocentes } = await client.GET("/api/docente");

    const materiasData: Materia[] = data.materias;
    const carreras: {id: number, nombre: string}[] = data.carreras;
    const docentes: Docente[] = dataDocentes.docente;

    const materias = {
        informatica: materiasData.filter(materia => materia.id_carrera == 1),
        tecnologiaAlimentos: materiasData.filter(materia => materia.id_carrera == 2),
        comunicacionElectronica: materiasData.filter(materia => materia.id_carrera == 3),
        disenoGrafico: materiasData.filter(materia => materia.id_carrera == 4),
        contabilidadCostos: materiasData.filter(materia => materia.id_carrera == 5),
        administracionBancariaFinanciera: materiasData.filter(materia => materia.id_carrera == 6),
        administracionEmpresarial: materiasData.filter(materia => materia.id_carrera == 7)
    }
    
    return {materias, carreras, docentes};
}) satisfies PageServerLoad;