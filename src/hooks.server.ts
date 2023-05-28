import { client } from "$lib/server/fetch"
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
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

export const handle = sequence(clientHandler);
