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

interface IProductSearchProductsContext {
  ProductSearch: Product[];
  setProductSearch: Dispatch<SetStateAction<Product[]>>;
}

export const ProductSearchContext =
  createContext<IProductSearchProductsContext | null>(null);

export const useProductSearch = () => {
  const context = useContext(ProductSearchContext);

  if (context === null) {
    throw new Error("ProductSearch context must be used inside a provider");
  }
  return context;
};

export function ProductSearchContextProvider({
  productsExists,
  children,
}: {
  productsExists: Product[];
  children: ReactNode;
}) {
  const [ProductSearch, setProductSearch] = useState<Product[]>(productsExists);

  return (
    <ProductSearchContext.Provider value={{ ProductSearch, setProductSearch }}>
      {children}
    </ProductSearchContext.Provider>
  );
}
