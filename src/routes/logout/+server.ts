import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies, url, locals:{coordinador, docente, estudiante} }) => {
    cookies.delete("access_token");
    throw redirect(302, `/${url.searchParams.get("red")}/login`);
};