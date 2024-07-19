import { productsService } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => productsService.listProducts(),
  });

  return {
    products: data ?? [],
    isLoading: isFetching,
    error,
  };
}
