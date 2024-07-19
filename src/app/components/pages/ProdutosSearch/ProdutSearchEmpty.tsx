import FavoriteRecommend from "../Favorites/FavoriteRecommend";
import MainSectionNotFound from "../NotFound/MainSectionNotFound";
import EmptySection from "../NotFound/EmptySection";
import HeaderSection from "../NotFound/HeaderSection";

export default function ProductSearchEmpty() {
  return (
    <MainSectionNotFound>
      <HeaderSection title="Resultados" number="0 PRODUTOS" isNumber />
      <div className="bg-gray-200 mt-5 w-full h-[2px]"></div>
      <EmptySection
        text="Nenhum resultado foi encontrado para essa busca, mas não se preocupe
            que tal tentar continuar procurando alguns produtos ?"
        linkHref="/"
        linkText="Continuar comprando"
      />
      <div className="bg-gray-200 w-full h-[2px] my-20"></div>
      <FavoriteRecommend />
    </MainSectionNotFound>
  );
}
