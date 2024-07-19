import { z } from "zod";
import Close from "../../icons/Close";

import EditCreditCardInputs from "./EditCreditCardInputs";
import { creditCardSchema } from "@/schemas/schema";
import { useRef } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type FormData = z.infer<typeof creditCardSchema> & {
  paymentMethod: string;
};

export default function ModalEditCreditCard({
  handleToggleModal,
  creditCard,
  handleDeleteModal,
}: {
  handleToggleModal: () => void;
  creditCard: FormData;
  handleDeleteModal: () => void;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleToggleModal);

  return (
    <aside className="fixed h-full md:h-screen w-full top-0 left-0 bg-[#0000]/30 z-10 backdrop-blur-md flex items-center justify-center">
      <section
        className="bg-gray-0 h-full md:h-auto w-full md:w-[37.5rem] flex flex-col "
        ref={modalRef}
      >
        <header className="bg-black-50 p-5 flex items-center justify-between">
          <h2 className="font-roboto text-[18px] text-gray-0">
            Edite o seu cartão de crédito
          </h2>
          <button onClick={handleToggleModal}>
            <Close />
          </button>
        </header>
        <section className="flex-1">
          <EditCreditCardInputs
            handleDeleteModal={handleDeleteModal}
            onToggle={handleToggleModal}
            creditCard={creditCard}
          />
        </section>
      </section>
    </aside>
  );
}
