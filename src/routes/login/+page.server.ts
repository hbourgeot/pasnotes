import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({locals:{user}}) => {
    if (user) {
        throw redirect(302, "/estudiantes");
    }

    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ locals:{client}, request}) =>{
        const { username, password }: { username?: string, password?: string } = Object.fromEntries(await request.formData());


    }
};