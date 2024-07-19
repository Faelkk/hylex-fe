import { httpClient } from "../httpClient";
import { Product } from "@/entities/Product";

export async function listProductById(productId: string) {
  const { data } = await httpClient.get<Product>(`/products/${productId}`);

  return data;
}
