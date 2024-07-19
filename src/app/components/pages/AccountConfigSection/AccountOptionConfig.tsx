"use client";

import { useModal } from "@/hooks/useModal";
import ModalEditAccountConfig from "../../modal/modalEditAccountConfig/ModalEditAccountConfig";

export default function AccountOptionConfig({
  optionTitle,
  optionTitleModal,
  optionSubTitleModal,
  optionValue,
  optionRegister,
  optionLabel,
}: {
  optionLabel: string;
  optionTitleModal: string;
  optionTitle: string;
  optionSubTitleModal: string;
  optionValue: string;
  optionRegister: keyof FormData | string;
}) {
  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <>
      <div className="flex  flex-col pp:flex-row justify-between px-6 pt-6 pb-4  bg-gray-0  w-full ">
        <div className="flex flex-col">
          <h2 className="font-poppins text-black-100 text-[18px]">
            {optionTitle}
          </h2>
          <p className="font-roboto text-black-300 text-[14px] mt-2">
            {optionValue}
          </p>
        </div>
        <button
          className="border border-gray-200 rounded-md text-black-0 pp:max-w-[150px] max-h-[30px] w-full  mt-3 pp:mt-0"
          onClick={handleToggleModal}
        >
          Editar
        </button>
      </div>

      {isModalOpen && (
        <ModalEditAccountConfig
          label={optionLabel}
          inputRegister={optionRegister as keyof FormData}
          titleModal={optionTitleModal}
          subTitleModal={optionSubTitleModal}
          handleToggleModal={handleToggleModal}
        />
      )}
    </>
  );
}
