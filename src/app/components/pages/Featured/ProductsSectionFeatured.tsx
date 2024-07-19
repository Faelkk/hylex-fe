import { FilterContextProvider } from "@/app/contexts/FilterContext";

import ProductsFeatured from "./ProductsFeatured";
import ProductsEmptyFeatured from "./ProductsEmptyFeatured";
import { ProductsFeatureContextProvider } from "@/app/contexts/ProductsFeatureContextProviderContextProvider";
import { useProducts } from "@/hooks/useProducts";
import Loading from "../../helpers/Loading";

export default function ProductsSectionFeatured() {
  const { isLoading, products, error } = useProducts();

  if (isLoading)
    return (
      <div className="flex flex-col h-full flex-1 justify-center items-center">
        <Loading />
      </div>
    );

  if (error) {
    return <ProductsEmptyFeatured />;
  }

  return (
    <>
      <ProductsFeatureContextProvider productsRecommend={products}>
        <FilterContextProvider productsExistsFilter={products}>
          {products.length > 0 ? (
            <ProductsFeatured />
          ) : (
            <ProductsEmptyFeatured />
          )}
        </FilterContextProvider>
      </ProductsFeatureContextProvider>
    </>
  );
}
