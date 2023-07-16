import { fail } from "@sveltejs/kit";
import type { Docente } from "../../../../app";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ locals: { client }, request }) => {
    const docente: Docente = Object.fromEntries(
      await request.formData()
    ) as unknown as Docente;

    const payload = {
      cedula: docente.cedula,
      fullname: docente.nombre,
      correo: docente.correo,
      password: docente.cedula.replace(/^(V-|E-)/g, ""),
      telefono: docente.telefono,
    };

    const { ok, status, data } = await client.POST("/api/docente/add", payload);
    if (!ok) {
      return fail(400, data);
    }

    return { message: "Docente creado!" };
  },
};
