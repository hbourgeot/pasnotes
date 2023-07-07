import { client } from "$lib/server/fetch";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import type { ControlEstudio, Coordinacion, Docente, Estudiante } from "./app";
import { getAccessToken, getUser } from "$lib/server/auth";
import jwt from "jsonwebtoken";
const { decode } = jwt;
const authHandler: Handle = async ({ event, resolve }) => {

  function isLoginRoute(url: string): boolean {
    return ["/coordinadores/login", "/estudiantes/login", "/docentes/login"].includes(url);
  }

  console.log("http://localhost:5173/");
  console.log(
    "\x1b[35m",
    "HOOK RUN (This function runs every time the SvelteKit server receives a request — whether that happens while the app is running, or during prerendering)",
    "https://kit.svelte.dev/docs/hooks"
  );
  console.log(
    "\x1b[0;36m",
    "Requests for static assets — which includes pages that were already prerendered — are not handled by SvelteKit."
  );
  if (!event.url.pathname.includes("/logout")) {
    const accessToken = getAccessToken(event);
    const verifyToken = accessToken?.split(" ")[1] ?? "";

    if (accessToken) {
      try {
        const decodedToken = decode(verifyToken) as { exp: number; rol: string };
        const currentTime = Math.floor(Date.now() / 1000);
        const rol = decodedToken.rol;
        console.log(rol);
        if (currentTime <= decodedToken.exp || isLoginRoute(event.url.pathname)) {
          switch (rol) {
            case "CE":
              event.locals.controlEstudio = (await getUser(
                accessToken,
                "control"
              )) as unknown as ControlEstudio;
              break;
            case "CO":
              event.locals.coordinador = (await getUser(
                accessToken,
                "coordinacion"
              )) as unknown as Coordinacion;
              break;
            case "D":
              event.locals.docente = (await getUser(
                accessToken,
                "docente"
              )) as unknown as Docente;
              break;
            case "E":
              event.locals.estudiante = (await getUser(
                accessToken,
                "students"
              )) as unknown as Estudiante;
              break;
          }
        } else {
          console.log(rol);
          let redirectUrl = "";

          switch (rol) {
            case "CO":
              redirectUrl = "/coordinadores/login?exp=true";
              break;
            case "D":
              redirectUrl = "/docentes/login?exp=true";
              break;
            case "E":
              redirectUrl = "/estudiantes/login?exp=true";
              break;
          }

          if (redirectUrl) {
            return new Response(null, {
              status: 302,
              headers: {
                Location: redirectUrl,
              },
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return await resolve(event);
};

const clientHandler: Handle = async ({ event, resolve }) => {
  event.locals.client = {
    GET: async (endpoint: string, body?: object, headers?: any) =>
      await client(endpoint, "GET", body, headers),
    POST: async (endpoint: string, body?: object, headers?: any) =>
      await client(endpoint, "POST", body, headers),
    PUT: async (endpoint: string, body?: object, headers?: any) =>
      await client(endpoint, "PUT", body, headers),
    PATCH: async (endpoint: string, body?: object, headers?: any) =>
      await client(endpoint, "PATCH", body, headers),
    DELETE: async (endpoint: string, body?: object, headers?: any) =>
      await client(endpoint, "DELETE", body, headers),
  };

  return await resolve(event);
};

export const handle = sequence(authHandler, clientHandler);
