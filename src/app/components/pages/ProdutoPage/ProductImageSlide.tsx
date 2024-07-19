"use client";

import Image from "next/image";
import { Slide, Slider } from "../../slide";
import { useMediaSlide } from "@/hooks/useMediaSlide";

import Like from "../../icons/Like";
import LikeClicked from "../../icons/LikeClicked";
import { useFavorites } from "@/app/contexts/FavoriteProductsContext";
import { useProductName } from "@/app/contexts/ProductNameContext";

export const settings = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  speed: 500,
};

export default function ProductImageSlide({
  colorActive,
}: {
  colorActive: any;
}) {
  const { ProductName } = useProductName();
  const slideWidth = useMediaSlide();

  const imagesByColor =
    ProductName.images.find((imageSet: any) => imageSet.color === colorActive)
      ?.urls || [];
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isLiked = favorites.some((p) => p.productId === ProductName.productId);

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isLiked) {
      removeFavorite(ProductName.productId);
    } else {
      addFavorite(ProductName);
    }
  };

  return (
    <div className="flex justify-center w-full large:max-w-[700px] relative">
      <button onClick={handleLike} className="absolute top-2 right-2 z-10">
        {isLiked ? <Like /> : <LikeClicked />}
      </button>
      <section
        className="w-full flex-1 flex justify-center "
        style={{ maxWidth: `${slideWidth}px` }}
      >
        <Slider settings={settings}>
          {imagesByColor.map((urlImg: string, index: number) => (
            <Slide key={index}>
              <figure className="flex justify-center items-center h-[300px] bg-gray-500 ">
                <Image
                  src={urlImg}
                  alt="Imagem do produto"
                  width={800}
                  height={800}
                  className="w-[200px] h-[200px]"
                />
              </figure>
            </Slide>
          ))}
        </Slider>
      </section>
    </div>
  );
}
