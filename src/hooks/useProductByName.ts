import { productsService } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export function useProductByName(productName: string) {
  const { data, isFetching } = useQuery({
    queryKey: ["products", productName],
    queryFn: () => productsService.listProductsByName(productName),
  });

  return {
    products: data ?? [],
    isLoading: isFetching,
  };
}
