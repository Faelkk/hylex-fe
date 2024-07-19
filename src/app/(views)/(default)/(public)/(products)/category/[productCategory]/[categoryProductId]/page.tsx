"use client";

import ProdutosCategoryPage from "@/app/components/pages/ProdutosCategory/ProdutosCategoryPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function Product() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProdutosCategoryPage />
    </QueryClientProvider>
  );
}
