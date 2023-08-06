import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import type { Peticiones } from "../../../../app";

export const load = (async ({ locals: { docente, client } }) => {
  if (!docente) {
    throw redirect(302, "/docentes/login");
  }

  const { ok, data } = await client.GET("/api/peticiones");
  if (!ok) return { peticion: null, nombre: docente.nombre }
  
  let peticion: Peticiones = data.find((peticion: Peticiones) => peticion.id_docente == docente.cedula && peticion.estado === "Aprobado")
  if (peticion) return { peticion, docente }
  
  return {peticion: null, nombre: docente.nombre}
}) satisfies LayoutServerLoad;
