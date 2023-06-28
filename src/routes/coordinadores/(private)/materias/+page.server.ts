import type { Docente, Materia } from '../../../../app';
import type { PageServerLoad } from './$types';

export const load = (async ({locals:{client}}) => {
    const { data } = await client.GET("/api/materias");
    const { data: dataDocentes } = await client.GET("/api/docente");

    const materias: Materia[] = data.materias;
    const carreras: {id: number, nombre: string}[] = data.carreras;
    const docentes: Docente[] = dataDocentes.docente;
    
    return {materias, carreras, docentes};
}) satisfies PageServerLoad;