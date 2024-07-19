import FavoriteRecommend from "../Favorites/FavoriteRecommend";
import EmptySection from "../NotFound/EmptySection";
import HeaderSection from "../NotFound/HeaderSection";
import MainSectionNotFound from "../NotFound/MainSectionNotFound";

export default function ProductNoContent() {
  return (
    <MainSectionNotFound>
      <HeaderSection title="Resultados" number="0 PRODUTOS" isNumber />
      <div className="bg-gray-200 mt-5 w-full h-[2px]"></div>
      <EmptySection
        text="Houve um erro ao achar esse produto, mas não se preocupe
            que tal tentar continuar procurando alguns produtos enquanto isso?"
        linkHref="/"
        linkText="Continuar comprando"
      />
      <div className="bg-gray-200 w-full h-[2px] my-20"></div>
      <FavoriteRecommend />
    </MainSectionNotFound>
  );
}
