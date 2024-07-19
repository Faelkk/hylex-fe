"use client";

import ProductSearchPage from "@/app/components/pages/ProdutosSearch/ProductSearchPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ProductPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductSearchPage />
    </QueryClientProvider>
  );
}
