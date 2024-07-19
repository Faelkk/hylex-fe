"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Category {}

interface IProductCategoriesProductsContext {
  ProductCategories: Category[];
  setProductCategories: Dispatch<SetStateAction<Category[]>>;
}

export const ProductCategoriesContext =
  createContext<IProductCategoriesProductsContext | null>(null);

export const useProductCategories = () => {
  const context = useContext(ProductCategoriesContext);

  if (context === null) {
    throw new Error("ProductCategories context must be used inside a provider");
  }
  return context;
};

export function ProductCategoriesContextProvider({
  productCategories,
  children,
}: {
  productCategories: Category[];
  children: ReactNode;
}) {
  const [ProductCategories, setProductCategories] =
    useState<Category[]>(productCategories);

  return (
    <ProductCategoriesContext.Provider
      value={{
        ProductCategories,
        setProductCategories,
      }}
    >
      {children}
    </ProductCategoriesContext.Provider>
  );
}
