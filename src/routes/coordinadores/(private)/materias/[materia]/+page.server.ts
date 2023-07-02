import type { Materia } from '../../../../../app';
import type { PageServerLoad } from './$types';

export const load = (async ({params, locals:{client}}) => {
    const { ok, status, data } = await client.GET(`/api/materias/${params.materia}`);
    if (!ok) return { materia: null }
    
    const materia: Materia = data.materias;
    return {materia};
}) satisfies PageServerLoad;