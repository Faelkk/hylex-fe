"use client";

import Image from "next/image";
import SlideProducts from "../../slide/SlideProducts";
import { useMediaSlide } from "@/hooks/useMediaSlide";
import { useProducts } from "@/hooks/useProducts";

export default function FavoriteRecommend() {
  const slideWidth = useMediaSlide();
  const { isLoading, products } = useProducts();
  return (
    <section className="">
      <div className="flex flex-col">
        <span className="flex   ">
          <div className="flex items-center gap-2 ">
            {" "}
            <h2 className="font-poppins text-[1.5rem] text-black-0">
              Recomendados
            </h2>
            <Image
              src="/icons/arrowRight.svg"
              alt="Ver mais"
              width={32}
              height={32}
              className="w-3 h-3"
            />
          </div>
        </span>
      </div>

      <div className="flex gap-5 relative ">
        <div className="flex justify-center flex-1">
          <section
            className="w-full flex-1 flex"
            style={{ maxWidth: `${slideWidth}px` }}
          >
            <SlideProducts products={products} />
          </section>
        </div>
      </div>

      <div className="bg-gray-200 h-[2px] my-10 w-[100%]"></div>
    </section>
  );
}
