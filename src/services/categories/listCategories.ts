import { Categories } from "@/entities/Categories";
import { httpClient } from "../httpClient";

export async function listCategories() {
  const { data } = await httpClient.get<Categories[]>("/categories");

  return data;
}
