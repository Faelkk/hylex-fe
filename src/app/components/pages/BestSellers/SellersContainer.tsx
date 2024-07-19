"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SellersSection from "./SellersSection";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function SellersContainer() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SellersSection />
      </QueryClientProvider>
    </>
  );
}
