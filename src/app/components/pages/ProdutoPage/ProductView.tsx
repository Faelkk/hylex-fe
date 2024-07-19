"use client";

import Arrow from "../../icons/Arrow";
import ProductImage from "./ProductImage";
import ProductColor from "./ProductColor";
import ProductRating from "../Produtos/ProductRating";
import { formatPrice } from "@/functions/formatPrice";
import { useProductName } from "@/app/contexts/ProductNameContext";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/app/contexts/CartProductsContext";
import { MouseEvent, useState } from "react";

export default function ProductView() {
  const { ProductName } = useProductName();
  const [activeColor, setActiveColor] = useState(ProductName.images[0].color);
  const router = useRouter();
  const pathname = usePathname();
  const { cart, addCart, removeCart, addCartTotal } = useCart();

  const handleColorChange = (color: string) => {
    setActiveColor(color);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleBuy(event);
    if (pathname !== "/cart") {
      router.push(`/addCart/${ProductName.id}`);
    }
  };

  const isBought = cart.some((p) => p.id === ProductName.id);

  const handleBuy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!isBought) {
      addCartTotal(ProductName);
      addCart(ProductName);
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col">
        <h1 className="font-poppins text-[24px] text-black-50">
          {ProductName.name}
        </h1>

        <div className="flex flex-col large:flex-row w-full gap-10 mt-5">
          <ProductImage colorActive={activeColor} />
          <div className="flex flex-col large:w-[50%]">
            <div className="flex flex-col pp:flex-row justify-between">
              <h2 className="font-poppins font-medium text-blue-300 text-[24px]">
                {formatPrice(ProductName.price)}
              </h2>
              <div className="flex items-center gap-2">
                <ProductRating product={ProductName} />
                <span className="font-poppins text-gray-600 text-[18px]">
                  {ProductName.ratingQuantity}
                </span>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 flex-1">
              <p className="font-roboto text-[18px] text-black-300 md:max-w-[500px]">
                {ProductName.description}
              </p>

              <span className="font-poppins text-[18px] text-black-0 mb-4">
                Cor:{" "}
                <span className="font-medium text-black-200 capitalize">
                  {activeColor}
                </span>
              </span>
            </div>
            <div className="flex gap-4 flex-col medium:flex-row justify-between medium:items-end">
              <figure className="flex flex-wrap gap-2">
                {ProductName.imagesByColor.map((image: any, index: number) => {
                  return (
                    <ProductColor
                      image={image}
                      key={index}
                      isActive={image.color === activeColor}
                      onColorChange={handleColorChange}
                    />
                  );
                })}
              </figure>
              <button
                className="bg-green-400 hover:bg-green-500 transition-colors font-poppins font-medium p-2 max-h-[40px] pp:max-w-[200px] w-full flex items-center justify-between rounded-[5px] text-gray-0"
                onClick={handleButtonClick}
              >
                Comprar
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
