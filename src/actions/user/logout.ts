"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function onLogout() {
  cookies().delete("token");
  redirect("/");
}
