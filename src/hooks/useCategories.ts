import { categoriesService } from "@/services/categories";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["categories"],
    queryFn: categoriesService.listCategories,
  });

  return {
    categories: data ?? [],
    isLoading: isFetching,
    error,
  };
}
