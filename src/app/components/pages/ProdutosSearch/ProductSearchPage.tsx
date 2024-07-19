"use client";

import ProductSearchEmpty from "@/app/components/pages/ProdutosSearch/ProdutSearchEmpty";
import ProdutosSearchSection from "@/app/components/pages/ProdutosSearch/ProdutosSearchSection";
import { FilterContextProvider } from "@/app/contexts/FilterContext";
import { ProductSearchContextProvider } from "@/app/contexts/ProductSearchContext";
import { useProducts } from "@/hooks/useProducts";

import { useParams } from "next/navigation";
import Loading from "../../helpers/Loading";

export default function ProductSearchPage() {
  const { productSearch }: { productSearch: string } = useParams();

  const { products, isLoading, error } = useProducts();

  const productsExists = products.filter((product) => {
    return product.name.toLowerCase().includes(productSearch.toLowerCase());
  });

  if (isLoading)
    return (
      <div className="flex flex-col flex-1 h-full w-full justify-center items-center">
        <Loading />;
      </div>
    );

  if (error) {
    return <ProductSearchEmpty />;
  }

  return (
    <ProductSearchContextProvider productsExists={productsExists}>
      <FilterContextProvider productsExistsFilter={productsExists}>
        {productsExists.length > 0 ? (
          <ProdutosSearchSection />
        ) : (
          <ProductSearchEmpty />
        )}
      </FilterContextProvider>
    </ProductSearchContextProvider>
  );
}
