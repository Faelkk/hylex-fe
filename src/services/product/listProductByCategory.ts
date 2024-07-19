import { httpClient } from "../httpClient";
import { Product } from "@/entities/Product";

export async function listProductByCategory(
  categoryId: string
): Promise<Product> {
  const { data } = await httpClient.get<Product>(
    `/products/categories/${categoryId}`
  );

  return data;
}
