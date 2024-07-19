"use client";

import { BestSellersContextContextProvider } from "@/app/contexts/BestSellersContextProvider";
import ProductsBestSeller from "./ProductsBestSeller";
import ProductsEmptyBestseller from "./ProductsEmptyBestseller";
import { FilterContextProvider } from "@/app/contexts/FilterContext";
import { useProducts } from "@/hooks/useProducts";
import Loading from "../../helpers/Loading";
import Link from "next/link";

export default function SellersSection() {
  const { isLoading, products, error } = useProducts();

  if (isLoading)
    return (
      <div className="flex flex-col h-full flex-1 justify-center items-center">
        <Loading />
      </div>
    );

  if (error) {
    return <ProductsEmptyBestseller />;
  }

  return (
    <>
      <BestSellersContextContextProvider bestProducts={products}>
        <FilterContextProvider productsExistsFilter={products}>
          {products.length > 0 ? (
            <ProductsBestSeller />
          ) : (
            <ProductsEmptyBestseller />
          )}
        </FilterContextProvider>
      </BestSellersContextContextProvider>
    </>
  );
}
