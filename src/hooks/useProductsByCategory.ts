import { productsService } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export function useProductsByCategory(categoryId: string) {
  const { data, isFetching, error } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => productsService.listProductByCategory(categoryId),
  });

  return {
    products: data ?? [],
    isLoading: isFetching,
    error,
  };
}
