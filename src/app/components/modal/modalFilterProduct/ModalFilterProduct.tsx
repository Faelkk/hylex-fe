import { useRef } from "react";
import Close from "../../icons/Close";
import FilterOptions from "./FilterOptions";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function ModalFilterProduct({
  handleToggleModal,
}: {
  handleToggleModal: () => void;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleToggleModal);

  return (
    <aside className="fixed h-full md:h-screen w-full  top-0 left-0  bg-[#0000]/30 z-50 backdrop-blur-md">
      <section
        className="bg-gray-0  absolute w-full md:w-[28.125rem] left-0 h-full  flex flex-col"
        ref={modalRef}
      >
        <header className="bg-black-50 p-6 flex items-center justify-between">
          <h2 className="font-roboto text-[18px] text-gray-0">Filtros</h2>
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleToggleModal();
            }}
          >
            <Close />
          </button>
        </header>

        <section className="flex-1">
          {" "}
          <FilterOptions />
        </section>
      </section>
    </aside>
  );
}
