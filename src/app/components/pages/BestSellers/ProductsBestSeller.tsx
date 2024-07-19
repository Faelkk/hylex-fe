import ProductNavPage from "../ProdutosCategory/ProductNavPage";
import ProductBestSellerContent from "./ProductBestSellerContent";
import ProductBestSellerHeader from "./ProductBestSellerHeader";

export default function ProductsBestSeller() {
  return (
    <main className="flex justify-center flex-1 mt-10  ">
      <section className="w-[95%] flex flex-col">
        <ProductBestSellerHeader />
        <div className="bg-gray-200  w-full h-[2px] mt-10"></div>
        <ProductBestSellerContent />
        <div className="bg-gray-200  w-full h-[2px] my-10"></div>
        <ProductNavPage />
      </section>
    </main>
  );
}
