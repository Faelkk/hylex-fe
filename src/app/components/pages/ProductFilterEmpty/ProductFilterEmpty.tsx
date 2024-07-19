import React from "react";
import Link from "next/link";
import { useFilter } from "@/app/contexts/FilterContext";

export default function ProductFilterEmpty() {
  const { ProductFilterContext, setFilteredProducts } = useFilter();

  const clearFilters = () => {
    setFilteredProducts(ProductFilterContext);
  };

  return (
    <main className="flex justify-center flex-1 mt-10">
      <section className="w-full flex flex-col">
        <div className="flex flex-1 flex-col">
          <p className="font-roboto text-black-100 text-[20px] max-w-[600px]">
            Nenhum resultado foi encontrado para esse filtro, que tal buscar
            algum outro produto?
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <Link
              className="border-2 border-black-50 text-black-50 transition-colors font-poppins font-medium uppercase tracking-wide text-[18px] p-3 max-w-[300px] w-full rounded-[5px] mt-5 flex justify-center"
              href="/"
            >
              Continuar comprando
            </Link>

            <button
              className="bg-blue-100 hover:bg-blue-200 transition-colors font-poppins uppercase tracking-wide text-[18px] p-3 max-w-[300px] w-full rounded-[5px] mt-5 drop-shadow-md text-gray-0 flex justify-center"
              onClick={clearFilters}
            >
              Limpar filtros
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
