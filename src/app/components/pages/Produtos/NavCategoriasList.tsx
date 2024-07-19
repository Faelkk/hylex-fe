import { useCategories } from "@/hooks/useCategories";
import Link from "next/link";
import Loading from "../../helpers/Loading";

export default function NavCategoriasList() {
  const { categories, isLoading } = useCategories();

  if (isLoading) return <Loading />;

  if (categories)
    return (
      <>
        {categories.map(({ id, name }) => (
          <button
            key={id}
            className="bg-blue-50 hover:bg-blue-100 font-poppins uppercase font-normal rounded-[5px] p-[.5rem] w-[9.375rem] whitespace-nowrap text-gray-0"
          >
            <Link href={`/category/${name.toLowerCase()}/${id}`}>{name}</Link>
          </button>
        ))}
      </>
    );
}
