import type { RequestHandler } from "@sveltejs/kit";
import { fail, json } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ locals: { client }, request }) => {
  const campo = ["nota1", "nota2", "nota3"];
  let obj: any = Object.fromEntries(await request.formData());

  obj = {
    ...obj,
    nombre_campo: campo[obj.nombre_campo - 1],
    materia: obj.materia,
  };

  let headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: obj.accessToken,
  };

  const { ok, data } = await client.PATCH("/api/docente/upload", obj, headers);

  if (!ok) return json({ message: data.message, status: 400 });
  return json({ message: "Modificado!" });
};
