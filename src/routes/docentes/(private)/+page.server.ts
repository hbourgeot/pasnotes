import type { PageServerLoad } from "./$types";

export const load = (async ({ locals: { docente } }) => {
  return { docente };
}) satisfies PageServerLoad;
