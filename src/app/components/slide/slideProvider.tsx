"use client";
import { ReactNode } from "react";

import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "./slide.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
      {children}
    </Swiper>
  );
}
