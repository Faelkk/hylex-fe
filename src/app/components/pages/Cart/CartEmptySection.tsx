import FavoriteRecommend from "../Favorites/FavoriteRecommend";
import MainSectionNotFound from "../NotFound/MainSectionNotFound";
import HeaderSection from "../NotFound/HeaderSection";
import EmptySection from "../NotFound/EmptySection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function CartEmptySection() {
  return (
    <MainSectionNotFound>
      <HeaderSection
        title="Seu carrinho"
        number="TOTAL (0 Produtos) R$ 00,00"
        isNumber
      />
      <div className="bg-gray-200 mt-5 w-full h-[2px]"></div>
      <EmptySection
        isRenderAdd
        text="Seu carrinho de compras está vazio no momento, que tal começar a fazer algumas compras?"
        buttonText="Fechar pedido"
        linkHref="/"
        linkText="Continuar comprando"
      />
      <div className="bg-gray-200 w-full h-[2px] my-20"></div>
      <QueryClientProvider client={queryClient}>
        <FavoriteRecommend />
      </QueryClientProvider>
    </MainSectionNotFound>
  );
}
