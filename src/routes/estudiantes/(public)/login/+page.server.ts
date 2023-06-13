import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { logIn } from '$lib/server/auth';

export const load = (async ({locals:{estudiante}}) => {
    if (estudiante) {
        throw redirect(302, "/estudiantes");
    }

    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) =>{
        const { username, password }: { username?: string, password?: string } = Object.fromEntries(await event.request.formData());

        await logIn(event, { username, password });
    }
};