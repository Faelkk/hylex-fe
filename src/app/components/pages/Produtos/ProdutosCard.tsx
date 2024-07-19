"use client";

import Image from "next/image";
import Arrow from "../../icons/Arrow";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import Like from "../../icons/Like";
import { useMediaScreen } from "@/hooks/useMediaScreen";
import { useFavorites } from "@/app/contexts/FavoriteProductsContext";
import LikeClicked from "../../icons/LikeClicked";
import ProductRating from "./ProductRating";
import { formatPrice } from "@/functions/formatPrice";
import { Product, useCart } from "@/app/contexts/CartProductsContext";

export default function ProdutosCard({ product }: { product: Product }) {
  const width = useMediaScreen();
  const router = useRouter();
  const pathname = usePathname();

  const { cart, addCart, removeCart, addCartTotal } = useCart();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [productHover, setProductHover] = useState(false);

  const isLiked = favorites.some((p) => p.id === product.id);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleBuy(event);
    if (pathname !== "/cart") {
      router.push(`/addCart/${product.id}`);
    }
  };

  const handleOnMouseEnter = () => {
    setProductHover(true);
  };

  const handleOnMouseLeave = () => {
    setProductHover(false);
  };

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isLiked) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const isBought = cart.some((p) => p.id === product.id);

  const handleBuy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!isBought) {
      addCartTotal(product);
      addCart(product);
    }
  };

  return (
    <div
      className="bg-gray-500 3pp:max-w-[280px] p-4 my-5 drop-shadow-md cursor-pointer"
      onClick={(event) => {
        event.stopPropagation();
        router.push(`/product/${product.name.toLowerCase()}/${product.id}`);
      }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {productHover && width >= 768 ? (
        <div className="flex w-full justify-end h-[21px]">
          <button onClick={handleLike}>
            {isLiked ? <LikeClicked /> : <Like />}
          </button>
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex gap-3 justify-start">
            <ProductRating product={product} />
            <span className="font-poppins text-gray-600 text-[14px]">
              {product.ratingQuantity}
            </span>
          </div>

          <button className="md:hidden" onClick={handleLike}>
            {isLiked ? <LikeClicked /> : <Like />}
          </button>
        </div>
      )}
      <figure className="flex justify-center items-center mt-5">
        <Image
          src={product.images[0].urls[0]}
          alt="Imagem do produto"
          width={800}
          height={800}
          className="w-[150px] h-[150px]"
        />
      </figure>
      <div className="bg-gray-300 h-[2px] mt-4"></div>
      <h2 className="font-roboto text-blue-100 mt-4">{product.name}</h2>
      <span className="font-roboto text-black-200 mt-2 block">
        {formatPrice(product.price)}
      </span>
      <button
        className="bg-green-400 hover:bg-green-500 transition-colors font-poppins font-medium flex justify-between items-center w-full  rounded-[5px] p-2 mt-4 text-gray-0"
        onClick={handleButtonClick}
      >
        Comprar <Arrow />
      </button>
    </div>
  );
}
