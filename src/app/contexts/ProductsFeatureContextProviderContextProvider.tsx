"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Product } from "./CartProductsContext";

interface IProductFeatureContext {
  ProductsFeature: Product[];
  setProductsFeature: Dispatch<SetStateAction<Product[]>>;
}

export const ProductsFeatureContext =
  createContext<IProductFeatureContext | null>(null);

export const useBestSellersProduct = () => {
  const context = useContext(ProductsFeatureContext);

  if (context === null) {
    throw new Error("ProductFeatured context must be used inside a provider");
  }
  return context;
};

export function ProductsFeatureContextProvider({
  productsFeature,
  children,
}: {
  productsFeature: Product[];
  children: ReactNode;
}) {
  const [ProductsFeature, setProductsFeature] =
    useState<Product[]>(productsFeature);

  return (
    <ProductsFeatureContext.Provider
      value={{
        ProductsFeature,
        setProductsFeature,
      }}
    >
      {children}
    </ProductsFeatureContext.Provider>
  );
}
