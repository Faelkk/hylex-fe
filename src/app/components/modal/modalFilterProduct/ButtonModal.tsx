"use client";

import { useModal } from "@/hooks/useModal";
import ModalFilterProduct from "./ModalFilterProduct";

export default function ButtonModal({}: {}) {
  const { handleToggleModal, isModalOpen } = useModal();

  return (
    <>
      <button
        className="bg-blue-100 font-poppins font-medium p-2 rounded-[5px] w-full medium:max-w-[180px] max-h-[40px]  medium:w-[180px] uppercase text-gray-0"
        onClick={handleToggleModal}
      >
        Filtros
      </button>

      {isModalOpen && (
        <ModalFilterProduct handleToggleModal={handleToggleModal} />
      )}
    </>
  );
}
