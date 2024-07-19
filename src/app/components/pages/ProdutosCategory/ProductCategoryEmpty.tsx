import FavoriteRecommend from "../Favorites/FavoriteRecommend";
import MainSectionNotFound from "../NotFound/MainSectionNotFound";
import EmptySection from "../NotFound/EmptySection";
import HeaderSection from "../NotFound/HeaderSection";

export default function ProductCategoryEmpty() {
  return (
    <MainSectionNotFound>
      <HeaderSection title="Resultados" number="0 PRODUTOS" isNumber />
      <div className="bg-gray-200 mt-5 w-full h-[2px]"></div>
      <EmptySection
        text="Nenhum produto foi encontrado pra essa categoria, mas não se preocupe, que tal procurar alguma outra ?"
        linkHref="/"
        linkText="Continuar comprando"
      />
      <div className="bg-gray-200 w-full h-[2px] my-20"></div>
      <FavoriteRecommend />
    </MainSectionNotFound>
  );
}
