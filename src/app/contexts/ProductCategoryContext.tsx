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

interface IProductCategoryProductsContext {
  ProductCategory: Product[];
  setProductCategory: Dispatch<SetStateAction<Product[]>>;
}

export const ProductCategoryContext =
  createContext<IProductCategoryProductsContext | null>(null);

export const useProductCategory = () => {
  const context = useContext(ProductCategoryContext);

  if (context === null) {
    throw new Error("ProductCategory context must be used inside a provider");
  }
  return context;
};

export function ProductCategoryContextProvider({
  productsExists,
  children,
}: {
  productsExists: Product[];
  children: ReactNode;
}) {
  const [ProductCategory, setProductCategory] =
    useState<Product[]>(productsExists);

  return (
    <ProductCategoryContext.Provider
      value={{
        ProductCategory,
        setProductCategory,
      }}
    >
      {children}
    </ProductCategoryContext.Provider>
  );
}
