"use client";

import { useMediaSlide } from "@/hooks/useMediaSlide";
import SlideProducts from "./SlideProducts";

export default function SlideSection() {
  const slideWidth = useMediaSlide();

  return (
    <div className="flex justify-center flex-1">
      <section
        className="w-full flex-1 flex justify-center"
        style={{ maxWidth: `${slideWidth}px` }}
      >
        <SlideProducts />
      </section>
    </div>
  );
}
