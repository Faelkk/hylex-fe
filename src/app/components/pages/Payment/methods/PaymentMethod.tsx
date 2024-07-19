"use client";

import { useModal } from "@/hooks/useModal";

import ModalCreditCard from "@/app/components/modal/modalCreditCard/ModalCreditCard";
import OptionsPaymentMethod from "./OptionsPaymentMethod";

export default function PaymentOptions() {
  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <>
      <section>
        <h2 className="font-poppins text-blue-100 text-[24px]">
          2- Selecione o seu método de pagamento
        </h2>

        <div className="bg-gray-0 border border-black-700 max-w-[800px] rounded-[5px] w-full mt-[10px]">
          <OptionsPaymentMethod handleToggleModal={handleToggleModal} />
          <div className="bg-black-100 p-3 mt-5 rounded-t-md">
            <button className="font-roboto text-black-950 bg-gray-0 p-1 rounded-[5px] text-[16px] max-w-[250px] w-full hover:bg-gray-100 transition-colors">
              Usar esta forma de pagamento
            </button>
          </div>
        </div>
      </section>
      {isModalOpen && <ModalCreditCard handleToggleModal={handleToggleModal} />}
    </>
  );
}
