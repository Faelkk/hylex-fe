import { useFavorites } from "@/app/contexts/FavoriteProductsContext";
import FavoriteItem from "./FavoriteItem";
import { formatPrice } from "@/functions/formatPrice";

export default function FavoritesSection() {
  const { favorites } = useFavorites();

  const total = favorites.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="flex w-full  flex-1  justify-center mt-20">
      <section className="flex flex-col w-[90%] md:w-[80%] max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
          <h1 className="font-poppins text-[36px] text-black-0">
            Seus itens favoritos
          </h1>
          <span className="font-poppins font-medium text-[18px] text-black-200">
            TOTAL ( {favorites.length}{" "}
            {favorites.length === 1 ? "Produto" : "Produtos"}){" "}
            <span> {formatPrice(total)}</span>
          </span>
        </div>

        <div className="bg-gray-200 mt-5 w-full h-[2px]"></div>

        <section className="flex flex-col justify-center w-full">
          {favorites.map((itemFavorite) => (
            <FavoriteItem
              key={itemFavorite.productId}
              favoriteItem={itemFavorite}
            />
          ))}
        </section>
        <div className="bg-gray-200  w-full h-[2px] my-20"></div>
      </section>
    </main>
  );
}
