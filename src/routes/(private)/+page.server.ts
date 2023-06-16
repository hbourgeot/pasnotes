import type { PageServerLoad } from './$types';

export const load = (async ({locals:{estudiante}}) => {
    return {estudiante};
}) satisfies PageServerLoad;