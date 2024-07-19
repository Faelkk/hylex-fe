"use client";

import { useModal } from "@/hooks/useModal";
import { FormData, useAddress } from "@/app/contexts/AdressContext";
import { useEffect, useState } from "react";
import AdressCardSedex from "./AdressCardSedex";
import Add from "../../icons/Add";
import { cn } from "@/functions/cn";
import ModalNewAdress from "../../modal/modalAddress/ModalNewAdress";

export default function PaymentSedex() {
  const { handleToggleModal, isModalOpen } = useModal();
  const { address, defaultAddress } = useAddress();
  const [selectedAddress, setSelectedAddress] = useState<FormData | null>(null);
  const [addressBeingEdited, setAdressBeingEdited] = useState<FormData | null>(
    null
  );

  useEffect(() => {
    if (defaultAddress && defaultAddress.length > 0) {
      setSelectedAddress(defaultAddress[0]);
    }
  }, [defaultAddress]);

  const handleSelectedAdress = (adress: FormData) => {
    setSelectedAddress(adress);
  };

  const handleAdressBeingEdited = (adress: FormData) => {
    setAdressBeingEdited(adress);
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-baseline md:flex-row md:items-center md:gap-10">
        <h2 className="font-poppins text-blue-100 text-[24px]">
          1- Endereço de Entrega
        </h2>
      </div>
      <div className="flex-col gap-1 mt-5 bg-gray-0 border border-black-700 max-w-[800px] rounded-[5px] w-full">
        <div className="flex flex-col px-5 pt-5">
          <h2 className="font-poppins text-black-950 text-[20px]">
            Seus endereços
          </h2>

          <div className="bg-gray-400 h-[1px] flex flex-col gap-5 w-full my-3"></div>

          <div
            className={cn(
              "flex flex-col gap-3 ",
              address.length > 0 ? "mb-5" : "mb-0"
            )}
          >
            {address.map((oneAdress, index) => (
              <AdressCardSedex
                addressBeingEdited={addressBeingEdited}
                handleAdressBeingEdited={handleAdressBeingEdited}
                selectedAddress={selectedAddress as FormData}
                address={oneAdress}
                handleSelectedAdress={handleSelectedAdress}
                key={index}
              />
            ))}
          </div>

          <button
            onClick={handleToggleModal}
            className={cn("flex items-center gap-3 cursor-pointer mt-2")}
          >
            <Add height="20" width="20" />{" "}
            <span className="font-roboto text-black-600 text-[14px] font-medium">
              Adicionar um novo endereço
            </span>
          </button>
        </div>

        <div className="bg-black-100 p-3 mt-5 rounded-t-md">
          <button className="font-roboto text-black-950 bg-gray-0 p-1 rounded-[5px] text-[16px] max-w-[250px] w-full hover:bg-gray-100 transition-colors">
            Usar este endereço para envio
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ModalNewAdress
          titleModal="Adicionar novo endereço de envio"
          subTitleModal="Adicione seu endereço"
          handleToggleModal={handleToggleModal}
        />
      )}
    </section>
  );
}
