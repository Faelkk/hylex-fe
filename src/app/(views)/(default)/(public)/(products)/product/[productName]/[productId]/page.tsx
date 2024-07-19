"use client";

import ProductSectionPage from "@/app/components/pages/ProdutoPage/ProductSectionPage";

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
      <ProductSectionPage />
    </QueryClientProvider>
  );
}
