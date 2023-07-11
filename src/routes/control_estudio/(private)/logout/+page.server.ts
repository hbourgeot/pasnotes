import { logOut } from "$lib/server/auth";
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async (event) => {
        await logOut(event, {path: "/control_estudio"});
        const redirectUrl = event.url.searchParams.get("red") ?? "/";

        throw redirect(302, `/${redirectUrl}/login`);
    }
};