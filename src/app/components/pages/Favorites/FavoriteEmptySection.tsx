import MainSectionNotFound from "../NotFound/MainSectionNotFound";
import HeaderSection from "../NotFound/HeaderSection";
import EmptySection from "../NotFound/EmptySection";
import FavoriteRecommend from "./FavoriteRecommend";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function FavoriteEmptySection() {
  return (
    <MainSectionNotFound>
      <HeaderSection
        title="Seu favoritos"
        number="TOTAL (0 Produtos) R$ 00,00"
        isNumber
      />
      <div className="bg-gray-200 mt-5 w-full h-[2px]"></div>
      <EmptySection
        isRenderAdd
        text="No momento, você não adicionou nenhum produto na sua lista de desejo, mas não se preocupe que tal começar adicionar alguns?"
        buttonText="Adicionar itens ao carrinho"
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
