import Image from "next/image";
import { useSwiper } from "swiper/react";

interface SwiperNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export default function SwiperNavigation({
  isBeginning,
  isEnd,
}: SwiperNavigationProps) {
  const swiper = useSwiper();
  return (
    <>
      <button
        className="bg-gray-0 shadow-md h-12 w-12 rounded-full flex justify-center items-center absolute left-0 lg:left-[-30px] top-[30%] z-10 cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <Image
          src="/icons/arrow-left.svg"
          alt="Ver mais"
          width={32}
          height={32}
          className="w-3 h-5"
        />
      </button>
      <button
        className="bg-gray-0 shadow-md h-12 w-12 rounded-full flex justify-center items-center absolute right-0  lg:right-[-30px] top-[30%] z-10 cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <Image
          src="/icons/arrow-right.svg"
          alt="Ver mais"
          width={32}
          height={32}
          className="w-3 h-5"
        />
      </button>
    </>
  );
}
