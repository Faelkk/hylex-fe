"use client";

import { cn } from "@/functions/cn";
import { useMediaScreen } from "@/hooks/useMediaScreen";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useFilter } from "@/app/contexts/FilterContext";

export default function ProductNavPage() {
  const { activePage, setActivePage, filteredProducts } = useFilter();
  const searchParams = useSearchParams();
  const router = useRouter();
  const width = useMediaScreen();

  const productsPerPage = 20;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const pagesToShow = 5;

  const isValidPageNumber = (value: any) => {
    const number = Number(value);
    return Number.isInteger(number) && number > 0 && number <= totalPages;
  };

  useEffect(() => {
    const search = searchParams.get("page");
    if (isValidPageNumber(search)) {
      setActivePage(Number(search));
    } else {
      router.push(`?page=1`);
    }
  }, [searchParams, router, totalPages, setActivePage]);

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
    router.push(`?page=${pageNumber}`);
  };

  const handlePreviousPages = () => {
    const newPageGroupStart = Math.max(1, activePage - pagesToShow);
    setActivePage(newPageGroupStart);
    router.push(`?page=${newPageGroupStart}`);
  };

  const handleNextPages = () => {
    const newPageGroupStart = Math.min(
      totalPages - pagesToShow + 1,
      activePage + pagesToShow
    );
    setActivePage(newPageGroupStart);
    router.push(`?page=${newPageGroupStart}`);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, activePage - Math.floor(pagesToShow / 2));

    for (
      let i = startPage;
      i < startPage + pagesToShow && i <= totalPages;
      i++
    ) {
      buttons.push(
        <button
          key={i}
          className={cn(
            "font-roboto text-black-0 h-[50px] flex items-center max-w-[50px] w-full justify-center ",
            activePage === i ? "border border-black-0" : ""
          )}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      <section className="flex justify-center mb-10">
        {totalPages > 1 && width > 768 && (
          <nav className="flex items-center border border-gray-400 h-[50px] rounded-[5px] max-h-[50px] px-5 gap-4 max-w-[530px] w-full">
            <button
              className="font-roboto text-blue-100 flex items-center gap-4"
              onClick={handlePreviousPages}
              disabled={activePage === 1}
            >
              <Image
                src="/icons/arrowRightNav.svg"
                width={10}
                height={10}
                className="w-3 h-3"
                alt="Página anterior"
              />
              Anterior
            </button>
            <div className="flex items-center justify-center h-full flex-1">
              {renderPageButtons()}
            </div>
            <button
              className="font-roboto text-blue-100 flex items-center gap-4"
              onClick={handleNextPages}
              disabled={activePage === totalPages}
            >
              Próximo
              <Image
                src="/icons/arrowLeftNav.svg"
                width={10}
                height={10}
                className="w-3 h-3"
                alt="Próxima página"
              />
            </button>
          </nav>
        )}
      </section>
    </>
  );
}
