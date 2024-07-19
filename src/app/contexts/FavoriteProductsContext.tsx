"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { Product } from "./CartProductsContext";

interface IFavoriteProductsContext {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
}

export const FavoriteProductsContext =
  createContext<IFavoriteProductsContext | null>(null);

export const useFavorites = () => {
  const context = useContext(FavoriteProductsContext);

  if (context === null) {
    throw new Error("Favorites context must be used inside a provider");
  }
  return context;
};

export function FavoriteContextProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("likedProducts") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const addFavorite = (product: Product) => {
    const updatedFavorites = [...favorites, product];
    setFavorites(updatedFavorites);
    localStorage.setItem("likedProducts", JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (productId: number) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("likedProducts", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoriteProductsContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
}
