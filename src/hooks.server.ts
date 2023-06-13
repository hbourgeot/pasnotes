import { client } from "$lib/server/fetch"
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import type { Estudiante } from "./app";
import { getAccessToken, getUser } from "$lib/server/auth";

const authHandler: Handle = async ({ event, resolve }) => {
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

  const access_token = await getAccessToken(event);

  if (access_token) {
    event.locals.estudiante = (await getUser(access_token)) as unknown as Estudiante;
  }

  return await resolve(event);
};

const clientHandler: Handle=async ({event, resolve}) => {


  event.locals.client={
    "GET":async(endpoint:string,body?:object, headers?:any)=>await client(endpoint,"GET",body,headers),
    "POST":async(endpoint:string,body?:object, headers?:any)=>await client(endpoint,"POST",body,headers),
    "PUT":async (endpoint:string,body?:object, headers?:any)=>await client(endpoint,"PUT",body,headers),
    "PATCH":async (endpoint:string,body?:object, headers?:any)=> await client(endpoint,"PATCH",body,headers),
    "DELETE":async (endpoint:string,body?:object, headers?:any)=> await client(endpoint,"DELETE",body,headers)
  }

  return await resolve (event)
  
}

export const handle = sequence(authHandler, clientHandler);
