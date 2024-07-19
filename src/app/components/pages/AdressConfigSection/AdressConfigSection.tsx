"use client";

import Add from "../../icons/Add";
import { useAddress } from "@/app/contexts/AdressContext";
import AddresCard from "./AddresCard";
import { useModal } from "@/hooks/useModal";
import ModalNewAdress from "../../modal/modalAddress/ModalNewAdress";

export default function AdressConfigSection() {
  const { address } = useAddress();
  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <>
      <section className="flex flex-1 justify-center mt-10  w-full">
        <div className="flex flex-col p-2 gap-5 w-full lg:w-auto">
          <h2 className="font-poppins text-[24px] text-blue-50">
            Seus endereços
          </h2>

          <div className="flex  flex-col lg:flex-row flex-wrap max-w-[1000px] gap-3 w-full lg:w-auto">
            <button
              className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-md bg-gray-0 w-full  lg:w-[320px] max-h-[250px] h-[150px] lg:h-auto "
              onClick={handleToggleModal}
            >
              <Add />
              <h2 className="font-poppins text-black-300 text-[20px] font-medium mt-1">
                Adicionar endereço
              </h2>
            </button>
            {address?.map((oneAdress, index) => (
              <AddresCard address={oneAdress} key={index} />
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center w-full">
        <div className="bg-gray-400 w-[90%] h-[1px] my-20"></div>
      </div>

      {isModalOpen && (
        <ModalNewAdress
          titleModal="Adicionar novo endereço de envio"
          subTitleModal="Adicione seu endereço"
          handleToggleModal={handleToggleModal}
        />
      )}
    </>
  );
}
