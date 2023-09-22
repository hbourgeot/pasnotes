import { logOut } from "$lib/server/auth";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { systemLogger } from "$lib/server/logger";

export const actions: Actions = {
  default: async (event) => {
    await logOut(event, { path: "/docentes" });
    const nombre = event.url.searchParams.get("nombre") ?? "";
    systemLogger.info(`El docente ${nombre} ha cerrado sesión`);

    throw redirect(302, `/docentes/login`);
  },
};
