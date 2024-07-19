import { useCategories } from "@/hooks/useCategories";
import Link from "next/link";
import Loading from "../helpers/Loading";

export default function FooterCategories() {
  const { categories, isLoading, error } = useCategories();

  if (isLoading) return <Loading />;
  if (error)
    return (
      <span className="font-roboto text-black-700 text-[14px] capitalize">
        Nenhuma categoria encontrada
      </span>
    );

  return (
    <>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.name.toLowerCase()}`}
          className="font-roboto text-black-700 text-[14px] capitalize"
        >
          {category.name}
        </Link>
      ))}
    </>
  );
}
