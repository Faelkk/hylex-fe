"use client";

import { ProductNameContextProvider } from "@/app/contexts/ProductNameContext";

import { useParams } from "next/navigation";
import ProductContent from "./ProductContent";
import ProductNoContent from "./ProductNoContent";
import Loading from "../../helpers/Loading";
import { useProductsById } from "@/hooks/useProductById";

export default function ProductSectionPage() {
  const { productId }: { productId: string } = useParams();

  const { products, isLoading, error } = useProductsById(productId);

  if (isLoading)
    return (
      <div className="h-full flex-1 justify-center flex-col items-center flex">
        <Loading />;
      </div>
    );

  if (error) {
    return <ProductNoContent />;
  }

  return (
    <ProductNameContextProvider productsExists={products as any}>
      {products ? <ProductContent /> : <ProductNoContent />}
    </ProductNameContextProvider>
  );
}
