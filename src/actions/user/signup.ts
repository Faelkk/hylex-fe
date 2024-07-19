"use server";

import { SIGNUP_USER } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";
import { FormData } from "@/app/components/pages/auth/signup/useSignupFormController";
import { revalidateTag } from "next/cache";

export default async function signup(dataSignup: FormData) {
  try {
    const { url } = SIGNUP_USER();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSignup),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar conta");
    }

    const { token } = await response.json();

    cookies().set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    revalidateTag("user");

    return { data: null, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
