import { useProductCategory } from "@/app/contexts/ProductCategoryContext";
import ProductCategory from "./ProductCategory";
import ProductNavPage from "./ProductNavPage";

import ProdutosCategoryHeader from "./ProdutosCategoryHeader";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function ProdutosCategorySection() {
  const { ProductCategory: category } = useProductCategory();
  return (
    <main className="flex justify-center flex-1 mt-10  ">
      <section className="w-[95%] flex flex-col">
        <QueryClientProvider client={queryClient}>
          <ProdutosCategoryHeader />
        </QueryClientProvider>
        <div className="bg-gray-200  w-full h-[2px] mt-10"></div>
        <ProductCategory />
        <div className="bg-gray-200  w-full h-[2px] my-10"></div>
        <ProductNavPage products={category} />
      </section>
    </main>
  );
}
