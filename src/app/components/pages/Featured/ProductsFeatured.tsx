import ProductNavPage from "../ProdutosCategory/ProductNavPage";
import ProductsHeaderFeatured from "./ProductsHeaderFeatured";
import ProductsRecommendContent from "./ProductsRecommendContent";

export default function ProductsFeatured() {
  return (
    <main className="flex justify-center flex-1 mt-10  ">
      <section className="w-[95%] flex flex-col">
        <ProductsHeaderFeatured />
        <div className="bg-gray-200  w-full h-[2px] mt-10"></div>
        <ProductsRecommendContent />
        <div className="bg-gray-200  w-full h-[2px] my-10"></div>
        <ProductNavPage />
      </section>
    </main>
  );
}
