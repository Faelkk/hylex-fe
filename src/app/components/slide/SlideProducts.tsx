"use client";

import "./slideButton.css";
import Slider from "./slideProvider";
import { Slide, SliderProps } from "./index";
import ProdutosCard from "../pages/Produtos/ProdutosCard";
import SwiperNavigation from "./SwiperNavigation";
import { useState } from "react";
import { useMediaScreen } from "@/hooks/useMediaScreen";
import { Product } from "@/app/contexts/CartProductsContext";

export const settings: SliderProps = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  speed: 500,
  breakpoints: {
    340: {
      slidesPerView: 1.4,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2.2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1800: {
      slidesPerView: 6,
      slidesPerGroup: 1,
      spaceBetween: 40,
    },
  },
};

export default function SlideProducts({ products }: { products: Product[] }) {
  const width = useMediaScreen();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return (
    <>
      <Slider settings={settings}>
        {width >= 900 && (
          <SwiperNavigation
            isBeginning={sliderState.isBeginning}
            isEnd={sliderState.isEnd}
          />
        )}
        <section
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex items-center max-w-[100%] justify-center bg-[#050505]"
        >
          {products.map((product) => (
            <Slide key={product.id}>
              <ProdutosCard product={product} />
            </Slide>
          ))}
        </section>
      </Slider>
    </>
  );
}
