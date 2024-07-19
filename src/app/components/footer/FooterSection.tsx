"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FooterCategories from "./FooterCategories";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function FooterSection() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FooterCategories />
      </QueryClientProvider>
    </>
  );
}
