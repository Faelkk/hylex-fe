import { User } from "@/app/contexts/UserContext";
import { httpClient } from "../httpClient";

export async function me() {
  const { data } = await httpClient.get<User>("/me");

  return data;
}
