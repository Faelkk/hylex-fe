"use client";

import { useMediaSlide } from "@/hooks/useMediaSlide";
import NavCategoriasList from "./NavCategoriasList";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function NavCategorias() {
  const width = useMediaSlide();

  return (
    <section className="w-full ">
      <section
        className="mt-5 flex gap-[30px] overflow-x-auto py-3 lg:justify-center"
        style={{ maxWidth: `${width}px` }}
      >
        <QueryClientProvider client={queryClient}>
          <NavCategoriasList />
        </QueryClientProvider>
      </section>
    </section>
  );
}
