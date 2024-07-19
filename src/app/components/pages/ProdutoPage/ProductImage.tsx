import { useMediaScreen } from "@/hooks/useMediaScreen";
import Image from "next/image";
import Expand from "../../icons/Expand";
import ProductImageSlide from "./ProductImageSlide";
import Like from "../../icons/Like";
import { cn } from "@/functions/cn";
import { useRef, useState } from "react";
import { useFavorites } from "@/app/contexts/FavoriteProductsContext";
import LikeClicked from "../../icons/LikeClicked";
import { useProductName } from "@/app/contexts/ProductNameContext";

export default function ProductImage({ colorActive }: { colorActive: string }) {
  const { ProductName } = useProductName();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const width = useMediaScreen();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const imageContainerRef = useRef<HTMLDivElement>(null);

  const imagesByColor =
    ProductName.images.find((imageSet: any) => imageSet.color === colorActive)
      ?.urls || [];

  const handleExpand = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTop += 100;
    }
  };

  const isLiked = favorites.some((p) => p.id === ProductName.id);

  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isLiked) {
      removeFavorite(ProductName.id);
    } else {
      addFavorite(ProductName);
    }
  };

  return (
    <>
      {width >= 768 ? (
        <figure className="flex justify-center large:max-w-[700px] w-full bg-gray-500 min-h-[300px] relative p-2">
          <button onClick={handleLike} className="absolute top-2 right-2">
            {isLiked ? <Like /> : <LikeClicked />}
          </button>
          <div className="hidden md:flex flex-col items-center left-0 top-0 gap-4">
            <div
              ref={imageContainerRef}
              className={cn(
                "flex flex-col gap-2 max-h-[232px] overflow-y-auto scrollbar-hide"
              )}
            >
              {imagesByColor.map((urlImg: string, index: number) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    className={cn(
                      "border-2 rounded-[5px] p-1",
                      isActive ? "border-green-300" : "border-black-800"
                    )}
                    onClick={() => setActiveIndex(index)}
                    key={index}
                  >
                    <Image
                      src={urlImg}
                      alt={`Imagem prévia produto ${colorActive}`}
                      width={100}
                      height={100}
                      className="w-10 h-10"
                    />
                  </button>
                );
              })}
            </div>

            <button onClick={handleExpand}>
              <Expand />
            </button>
          </div>
          <figure className="flex-1 flex justify-center items-center">
            <Image
              src={imagesByColor[activeIndex || 0]}
              alt={`Imagem do produto ${colorActive}`}
              width={800}
              height={800}
              className="w-[200px] h-[200px] object-cover"
            />
          </figure>
        </figure>
      ) : (
        <ProductImageSlide colorActive={colorActive} />
      )}
    </>
  );
}
