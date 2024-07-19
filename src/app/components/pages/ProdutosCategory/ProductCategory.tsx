"use client";

import ProdutosCard from "../Produtos/ProdutosCard";
import ProductFilterEmpty from "../ProductFilterEmpty/ProductFilterEmpty";
import { useFilter } from "@/app/contexts/FilterContext";

export default function ProductCategory() {
  const { filteredProducts, activePage } = useFilter();
  const productsPerPage = 20;
  const startIndex = (activePage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToRender = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      {productsToRender.length > 0 ? (
        <section className="grid grid-cols-1 medium:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-5">
          {productsToRender.map((product) => (
            <ProdutosCard key={product.id} product={product} />
          ))}
        </section>
      ) : (
        <ProductFilterEmpty />
      )}
    </>
  );
}
