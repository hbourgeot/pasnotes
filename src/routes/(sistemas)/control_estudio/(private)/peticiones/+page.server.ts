import type { Peticiones } from '../../../../app';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { client } }) => {
    const { ok, data } = await client.GET("/api/peticiones")
    console.log(ok, data)
    if (!ok) return { peticiones: [] }

    const peticiones: Peticiones[] = data;
    
    return {peticiones};
}) satisfies PageServerLoad;

export const actions: Actions = {
  aprobar: async ({ locals: { client }, request }) => {
    const { peticion }: { peticion?: string } = Object.fromEntries(
      await request.formData()
    );

    const payload = {
      estado: "Aprobado",
    };

    const { ok, data } = await client.PATCH(
      `/api/peticiones/update/${peticion}`,
      payload
    );
    console.log(ok, data);
  },

  denegar: async ({ locals: { client }, request }) => {
    const { peticion }: { peticion?: string } = Object.fromEntries(
      await request.formData()
    );

    const payload = {
      estado: "Denegado",
    };

    const { ok, data } = await client.PATCH(
      `/api/peticiones/update/${peticion}`,
      payload
    );
    console.log(ok, data);
  },
};