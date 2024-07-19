import { useState } from "react";
import Expand from "../../icons/Expand";
import { useDropdown } from "@/hooks/useDropdown";
import DropdownFilterPayment from "./DropdownFilterPayment";

export default function PaymentRegisterEmpty() {
  const [lastDays, setLastDays] = useState(30);
  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const [activeDropdown, setActiveDropdown] = useState("Filtrar pagamentos");

  const handleItemClick = (item: string) => {
    setActiveDropdown(item);
    handleToggleDropdown();
  };

  return (
    <section className="flex flex-col items-center justify-center p-6  bg-gray-0 w-full  mb-10">
      <div className="max-w-[980px]  w-full border border-gray-400  rounded-md p-6">
        <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
          <h2 className="  font-roboto text-black-0 text-[16px] font-medium">
            Nenhum registro de pagamento{" "}
            {activeDropdown !== "Filtrar pagamentos"
              ? activeDropdown === "Todos"
                ? `para ${activeDropdown}`
                : `nos ultimos ${activeDropdown}`
              : ` nos ultimos ${lastDays} Dias`}
          </h2>
          <section className="flex flex-col relative">
            <button
              className="border border-black-700 flex items-center justify-between rounded-md uppercase text-[16px]  font-medium  p-2 max-h-[40px] w-full medium:max-w-[250px] medium:w-[250px] medium:gap-8 font-roboto  text-blue-100  "
              onClick={handleToggleDropdown}
            >
              {activeDropdown}
              <Expand />
            </button>

            {isDropdownOpen && (
              <DropdownFilterPayment
                activeItem={activeDropdown}
                onItemClick={handleItemClick}
                handleToggleDropdown={handleToggleDropdown}
              />
            )}
          </section>
        </div>
      </div>
    </section>
  );
}
