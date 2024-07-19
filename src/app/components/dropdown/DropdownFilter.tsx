import { useFilter } from "@/app/contexts/FilterContext";

interface DropdownFilterProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  handleToggleDropdown: () => void;
}

export default function DropdownFilter({
  activeItem,
  onItemClick,
}: DropdownFilterProps) {
  const { sortProducts } = useFilter();
  const items = [
    "Mais relevantes",
    "Mais vendidas",
    "Melhores avaliações",
    "Maior preço",
    "Menor preço",
  ];

  const handleItemClick = (item: string) => {
    if (
      item === "Maior preço" ||
      item === "Menor preço" ||
      item === "Melhores avaliações"
    ) {
      sortProducts(item);
    }
    onItemClick(item);
  };

  return (
    <div className="flex flex-col items-center justify-center absolute top-10 z-10 w-full">
      <ul className="bg-gray-100 drop-shadow-md w-full medium:max-w-[200px] medium:w-[200px] flex flex-col">
        {items
          .filter((item) => item !== activeItem)
          .map((item, index) => (
            <li
              key={index}
              className="hover:bg-gray-300 w-full cursor-pointer py-2"
              onClick={() => handleItemClick(item)}
            >
              <a className="font-roboto text-[16px] text-black-300 p-2">
                {item}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
