"use client";

import { useCreditCards } from "@/app/contexts/CreditCardsContext";
import { useModal } from "@/hooks/useModal";
import Add from "../../icons/Add";
import ModalCreditCard from "../../modal/modalCreditCard/ModalCreditCard";
import MyPaymentCard from "./MyPaymentCard";
import PaymentRegisterEmpty from "./PaymentRegisterEmpty";
import PaymentAddCard from "./PaymentAddCard";

export default function MyPaymentsSection() {
  const { creditCards } = useCreditCards();
  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <main className="flex flex-col flex-1">
      <section className="flex flex-1 justify-center mt-10  w-full">
        <div className="flex flex-col  p-6 md:p-2 gap-5 w-full lg:w-auto">
          <h2 className="font-poppins text-[24px] text-blue-50">
            Suas formas de pagamento
          </h2>

          <section className="flex flex-col md:flex-row gap-10">
            <div className="flex md:max-h-[450px] md:overflow-y-scroll  flex-col  gap-5 w-full lg:w-auto">
              <button
                className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-md bg-gray-0 w-full  lg:w-[340px] max-h-[250px] h-[150px] lg:h-auto "
                onClick={handleToggleModal}
              >
                <Add />
                <h2 className="font-poppins text-black-300 text-[18px] font-medium mt-1 w-full">
                  Adicione seu cartão de crédito
                </h2>
              </button>
              {creditCards?.map((card, index) => (
                <MyPaymentCard creditCard={card} key={index} />
              ))}
            </div>
            <PaymentAddCard />
          </section>
        </div>
      </section>

      <div className="flex justify-center w-full">
        <div className="bg-gray-400 w-[90%] h-[1px] my-10 md:my-20"></div>
      </div>

      <PaymentRegisterEmpty />

      {isModalOpen && <ModalCreditCard handleToggleModal={handleToggleModal} />}
    </main>
  );
}
