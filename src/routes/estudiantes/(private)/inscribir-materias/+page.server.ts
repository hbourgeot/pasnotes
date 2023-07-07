import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import type { Materia } from "../../../../app";
import { triggerToast } from "$lib/utils/toast";

export const load: PageServerLoad = async ({locals:{client, estudiante}}) => {
  const { ok, data } = await client.GET(`/api/materias/inscribir/${estudiante.cedula}`);
  if (!ok) return {materias: [], message: data.message}

  const materias = data.materias;
  console.log(materias);
  return {materias, estudiante, message: ''}
};

export const actions: Actions = {
  default: async ({ locals: { estudiante, client }, request, cookies }) => {
    const materias: string[] = (await request.formData()).getAll("materias") as unknown as string[];

    let headers = {
      Accept: "*/*",
      Authorization: cookies.get("access_token"),
    };

    for (const materia of materias) {
        const { ok, status, data } = await client.POST(`/api/students/add-materia/${materia}`, null, headers);
      if (!ok) {
        return fail(400, { message: data.message });
        }
    }
  }
};