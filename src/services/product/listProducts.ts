import { Products } from "@/entities/Products";
import { httpClient } from "../httpClient";

export async function listProducts() {
  const { data } = await httpClient.get<Products[]>("/products");

  return data;
}
