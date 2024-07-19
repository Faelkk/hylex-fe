import ProductInfo from "./ProductInfo";
import ProductView from "./ProductView";

export default function ProductSection() {
  return (
    <main className="flex  flex-1 justify-center w-full mt-10">
      <section className="flex flex-col w-[95%]">
        <ProductView />
        <ProductInfo />
      </section>
    </main>
  );
}
