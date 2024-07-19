import { productsService } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export function useProductsById(productId: string) {
  const { data, isFetching, error } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => productsService.listProductById(productId),
  });

  return {
    products: data ?? [],
    isLoading: isFetching,
    error,
  };
}
