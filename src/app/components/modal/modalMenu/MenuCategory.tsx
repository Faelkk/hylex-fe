import { useCategories } from "@/hooks/useCategories";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "../../helpers/Loading";

export default function MenuCategory({
  handleToggleCategory,
  handleToggleModal,
}: {
  handleToggleCategory: () => void;
  handleToggleModal: () => void;
}) {
  const { categories, isLoading, error } = useCategories();
  const router = useRouter();

  const handleLinkClick = (categoryName: string, categoryId: number) => {
    handleToggleModal();
    router.push(`/category/${categoryName.toLowerCase()}/${categoryId}`);
  };

  if (isLoading) return <Loading />;

  return (
    <section className="flex p-6 w-full">
      <div className="flex-col flex w-full">
        <button
          className="flex items-center gap-2"
          onClick={handleToggleCategory}
        >
          <Image
            src="/icons/arrow-left.svg"
            alt="Ver mais"
            width={32}
            height={32}
            className="w-3 h-3"
          />
          <h2 className="font-poppins text-[24px] text-black-0">
            Departamentos
          </h2>
        </button>
        <div className="flex-1 flex flex-col mt-5 w-full">
          {categories.length > 0 ? (
            categories.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => handleLinkClick(categoria.name, categoria.id)}
                className="flex justify-between items-center py-4 p-2 bg-gray-0 rounded-sm w-full border border-b-gray-200"
              >
                <span className="font-poppins text-black-300">
                  {categoria.name}
                </span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt="Ver mais"
                  width={32}
                  height={32}
                  className="w-3 h-3"
                />
              </button>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full">
              <span className="font-roboto text-black-700 text-[14px] capitalize">
                Nenhuma categoria encontrada
              </span>
            </div>
          )}
        </div>
        <button
          onClick={handleToggleCategory}
          className="bg-green-400 hover:bg-green-500 transition-colors font-poppins font-medium flex justify-center items-center w-full rounded-[5px] p-2 mt-4 text-gray-0"
        >
          Voltar
        </button>
      </div>
    </section>
  );
}
