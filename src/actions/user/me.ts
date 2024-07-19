"use server";

import { USER_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

interface UserFetch {
  user: User;
}

export type User = {
  id: string;
  email: string;
  username: string;
  name: string;
  password: string;
};

export default async function me() {
  try {
    const token = cookies().get("token")?.value;

    if (!token) {
      throw new Error("Internal server error");
    }
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const { url } = USER_GET();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        tags: ["user"],
      },
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Erro ao pegar o usuario.");

    const { user } = (await response.json()) as UserFetch;

    return { data: user, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
