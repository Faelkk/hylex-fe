import { useProducts } from "@/hooks/useProducts";

import ProdutosList from "./ProdutosList";
import Loading from "../../helpers/Loading";

export default function ProdutosAnuncioContainer() {
  const { products, isLoading, error } = useProducts();

  if (isLoading)
    return (
      <div className="flex flex-1 flex-col h-full justify-center w-full items-center">
        <Loading />;
      </div>
    );

  if (error) {
    return (
      <div className="flex flex-1 flex-col h-full justify-center w-full items-center mb-10">
        <h2 className="font-poppins text-black-0">
          Um erro ocorreu, não encontramos nenhum produto recomendado, tente
          novamente.
        </h2>
      </div>
    );
  }
  return (
    <>
      <ProdutosList products={products} title="Mais vendidos" />
      <ProdutosList products={products} title="Recomendados" />
      <ProdutosList products={products} title="Ofertas" />
      <ProdutosList products={products} title="Destaques" />
    </>
  );
}
