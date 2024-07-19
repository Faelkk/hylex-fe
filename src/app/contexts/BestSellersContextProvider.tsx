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

interface IProductSellersContext {
  bestSellersProduct: Product[];
  setBestSellersProduct: Dispatch<SetStateAction<Product[]>>;
}

export const BestSellersContextContext =
  createContext<IProductSellersContext | null>(null);

export const useBestSellersProduct = () => {
  const context = useContext(BestSellersContextContext);

  if (context === null) {
    throw new Error(
      "ProductsBestSellers context must be used inside a provider"
    );
  }
  return context;
};

export function BestSellersContextContextProvider({
  bestProducts,
  children,
}: {
  bestProducts: Product[];
  children: ReactNode;
}) {
  const [bestSellersProduct, setBestSellersProduct] =
    useState<Product[]>(bestProducts);

  return (
    <BestSellersContextContext.Provider
      value={{
        bestSellersProduct,
        setBestSellersProduct,
      }}
    >
      {children}
    </BestSellersContextContext.Provider>
  );
}
