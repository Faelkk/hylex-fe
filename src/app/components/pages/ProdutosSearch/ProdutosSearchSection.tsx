import ProdutosSearchHeader from "./ProdutosSearchHeader";
import ProductNavPage from "../ProdutosCategory/ProductNavPage";
import ProductSearch from "./ProductSearch";

export default function ProdutosSearchSection() {
  return (
    <main className="flex justify-center flex-1 mt-10  ">
      <section className="w-[95%] flex flex-col">
        <ProdutosSearchHeader />
        <div className="bg-gray-200  w-full h-[2px] mt-10"></div>
        <ProductSearch />
        <div className="bg-gray-200  w-full h-[2px] my-10"></div>
        <ProductNavPage />
      </section>
    </main>
  );
}
