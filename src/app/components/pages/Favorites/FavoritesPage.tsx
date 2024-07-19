"use client";
import { useFavorites } from "@/app/contexts/FavoriteProductsContext";
import FavoriteEmptySection from "./FavoriteEmptySection";
import FavoritesSection from "./FavoritesSection";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <>
      {favorites.length > 0 ? <FavoritesSection /> : <FavoriteEmptySection />}
    </>
  );
}
