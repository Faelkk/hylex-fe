import FavoriteRecommend from "../Favorites/FavoriteRecommend";
import EmptySection from "../NotFound/EmptySection";
import HeaderSection from "../NotFound/HeaderSection";
import MainSectionNotFound from "../NotFound/MainSectionNotFound";

export default function MyOrdersEmpty() {
  return (
    <MainSectionNotFound>
      <HeaderSection title="Seus pedidos" number="0 PRODUTOS" isNumber />
      <div className="bg-gray-200 mt-5 w-full h-[2px]"></div>
      <EmptySection
        text="Nenhum pedido encontrado para o seu usuario, mas não se preocupe, que tal começar fazer alguns pedidos?"
        linkHref="/"
        linkText="Continuar comprando"
      />
      <div className="bg-gray-200 w-full h-[2px] my-20"></div>
      <FavoriteRecommend />
    </MainSectionNotFound>
  );
}
