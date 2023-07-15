import type { PageServerLoad } from './$types';

export const load = (async ({locals:{estudiante, client}, cookies}) => {
    let headers = {
        Accept: "*/*",
        Authorization: cookies.get("access_token"),
    };

    const { ok, data } = await client.GET("/api/students/materias", null, headers);

    if(!ok) return {estudiante, materias: []}

    return {estudiante, materias: data.materias};
}) satisfies PageServerLoad;