import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { systemLogger } from '$lib/server/logger';

export const load = (async ({ locals: { client, coordinador } }) => {
    systemLogger.info(`${coordinador.nombre} está viendo las configuraciones del sistema`)
    const { ok, data } = await client.GET("/api/config/1");
    
    if (!ok) return {};

    return {config: data};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({request, locals: { client, coordinador } }) => {
        const obj: any = Object.fromEntries(await request.formData());

        const { ok, data } = await client.PUT("/api/config/update/1", obj);
        if (!ok) return fail(400, { message: data.message });

        systemLogger.info(`${coordinador.nombre} cambió la configuración del sistema`);

        return {message: "Configuración cambiada!", ok: true}
    }
};