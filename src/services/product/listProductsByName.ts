import { httpClient } from "../httpClient";
import { Product } from "@/entities/Product";

export async function listProductsByName(productName: string) {
  const { data } = await httpClient.get<Product[]>(
    `/products/productName/${productName}`
  );

  return data;
}
