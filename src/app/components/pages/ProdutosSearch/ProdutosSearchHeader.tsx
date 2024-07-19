import { useProductSearch } from "@/app/contexts/ProductSearchContext";
import DropdownButton from "../../dropdown/DropdownButton";
import ButtonModal from "../../modal/modalFilterProduct/ButtonModal";

import { useFilter } from "@/app/contexts/FilterContext";

export default function ProdutosSearchHeader() {
  const { ProductSearch } = useProductSearch();
  const { filteredProducts } = useFilter();

  if (ProductSearch)
    return (
      <header className="flex gap-2  md:gap-0 flex-col md:flex-row w-full justify-between">
        <div className="flex flex-col pp:flex-row  justify-between">
          <h1 className="font-poppins text-black-0 text-[36px]">Resultados</h1>
          <span className="font-roboto text-black-400 flex items-center md:hidden">
            {filteredProducts.length} Produtos
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:items-center ">
          <div className="flex flex-col-reverse medium:flex-row gap-4 medium:gap-[30px]">
            <ButtonModal />
            <DropdownButton />
          </div>
          <span className="hidden md:flex font-roboto text-black-400  items-center">
            {filteredProducts.length} Produtos
          </span>
        </div>
      </header>
    );
}
