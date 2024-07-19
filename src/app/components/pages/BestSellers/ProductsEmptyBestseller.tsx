import FavoriteRecommend from "../Favorites/FavoriteRecommend";
import EmptySection from "../NotFound/EmptySection";
import HeaderSection from "../NotFound/HeaderSection";
import MainSectionNotFound from "../NotFound/MainSectionNotFound";

export default function ProductsEmptyBestseller() {
  return (
    <MainSectionNotFound>
      <HeaderSection title="Mais vendidos" number="0 PRODUTOS" isNumber />
      <div className="bg-gray-200 mt-5 w-full h-[2px]"></div>
      <EmptySection
        text="Nenhum produto achado para mais vendidos, mas não se preocupe, que tal procurar alguma outra ?"
        linkHref="/"
        linkText="Continuar comprando"
      />
      <div className="bg-gray-200 w-full h-[2px] my-20"></div>
      <FavoriteRecommend />
    </MainSectionNotFound>
  );
}
