"use client";

import NavCategorias from "./NavCategorias";
import ProdutosAnuncioContainer from "./ProdutosAnuncioContainer";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ProdutosSection() {
  return (
    <main className="flex justify-center mt-10">
      <section className="flex flex-col w-[95%]">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="font-poppins text-[2.25rem] text-blue-50">Produtos</h2>

          <NavCategorias />
        </div>
        <div className="flex flex-col mt-10">
          <QueryClientProvider client={queryClient}>
            <ProdutosAnuncioContainer />
          </QueryClientProvider>
        </div>
      </section>
    </main>
  );
}
