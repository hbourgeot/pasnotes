import { baseURL } from "$env/static/private";
import type { RequestEvent } from "@sveltejs/kit";
import type { Estudiante } from "../../app";

export const logIn = async (
  { locals: { client } }: RequestEvent,
  { username, password }: { username?: string; password?: string }
) => {
  const { ok, status, data } = await client.POST("/auth/login", {
    username,
    password,
  });

  return { ok, status, data };
};

export const getAccessToken = async (event: RequestEvent) => {
  const { cookies } = event;

  const access_token = cookies.get("access_token");

  return access_token;
};

export const getUser = async (token: string) => {
  try {
    let headers = {
      Accept: "*/*",
      Authorization: token,
    };

    const res: Response = await fetch(`${baseURL}/api/students/refresh`, {
      method: "POST",
      headers,
    });
    // console.log(res)
    const { data: user }: { data: Estudiante } = await res.json();
    // console.log("user ", user)

    // if (!user) {
    //   throw new Error("User not found");
    // }
    // console.log(user)
    return user;
  } catch (error) {
    console.error(error);
  }
};