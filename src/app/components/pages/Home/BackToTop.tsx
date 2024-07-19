"use client";

import Image from "next/image";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#1f1f1f] flex justify-center p-3">
      <button
        onClick={scrollToTop}
        className="flex items-center gap-3 cursor-pointer"
      >
        <h2 className="uppercase font-poppins font-medium text-gray-0">
          Voltar ao inicio
        </h2>
        <Image
          src="/icons/arrow-up.svg"
          className="w-3 h-3"
          alt="Voltar para o topo"
          width={16}
          height={16}
        />
      </button>
    </section>
  );
}
