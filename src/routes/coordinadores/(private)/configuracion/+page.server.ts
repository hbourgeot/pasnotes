import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { client } }) => {
    const { ok, data } = await client.GET("/api/config/1");
    console.log(ok, data);
    
    if (!ok) return {};

    return {config: data};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({request, locals: { client } }) => {
        const obj: any = Object.fromEntries(await request.formData());

        const { ok, data } = await client.PUT("/api/config/update/1", obj);
        if (!ok) return fail(400, { message: data.message });

        return {message: "Modificación cambiada!", ok: true}
    }
};