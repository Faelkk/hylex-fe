"use client";

import { ProductCategoryContextProvider } from "@/app/contexts/ProductCategoryContext";
import ProductCategoryEmpty from "./ProductCategoryEmpty";
import { useParams } from "next/navigation";
import ProdutosCategorySection from "./ProdutosCategorySection";
import { FilterContextProvider } from "@/app/contexts/FilterContext";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";
import Loading from "../../helpers/Loading";

export default function ProdutosCategoryPage() {
  const { categoryProductId } = useParams();

  const { products, isLoading, error } =
    useProductsByCategory(categoryProductId);

  if (isLoading)
    return (
      <div className="h-full flex-1 justify-center flex-col items-center flex">
        <Loading />;
      </div>
    );

  if (error) {
    return <ProductCategoryEmpty />;
  }

  if (products)
    return (
      <ProductCategoryContextProvider productsExists={products as any}>
        <FilterContextProvider productsExistsFilter={products as any}>
          {products.length > 0 ? (
            <ProdutosCategorySection />
          ) : (
            <ProductCategoryEmpty />
          )}
        </FilterContextProvider>
      </ProductCategoryContextProvider>
    );
}
