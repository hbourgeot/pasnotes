import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals: { docente } }) => {
  if (!docente) {
    throw redirect(302, "/docentes/login");
  }
}) satisfies LayoutServerLoad;
