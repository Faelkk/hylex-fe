"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "./CartProductsContext";

interface IProductNameProductsContext {
  ProductName: Product;
  setProductName: Dispatch<SetStateAction<Product>>;
}

export const ProductNameContext =
  createContext<IProductNameProductsContext | null>(null);

export const useProductName = () => {
  const context = useContext(ProductNameContext);

  if (context === null) {
    throw new Error("ProductName context must be used inside a provider");
  }
  return context;
};

export function ProductNameContextProvider({
  productsExists,
  children,
}: {
  productsExists: Product;
  children: ReactNode;
}) {
  const [ProductName, setProductName] = useState<Product>(productsExists);

  return (
    <ProductNameContext.Provider value={{ ProductName, setProductName }}>
      {children}
    </ProductNameContext.Provider>
  );
}
