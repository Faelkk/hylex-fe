import { useRef } from "react";
import Close from "../../icons/Close";
import CreditCardInputs from "./CreditCardInputs";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function ModalCreditCard({
  handleToggleModal,
}: {
  handleToggleModal: () => void;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleToggleModal);

  return (
    <aside className="fixed h-full md:h-screen w-full top-0 left-0 bg-[#0000]/30 z-10 backdrop-blur-md flex items-center justify-center">
      <section
        className="bg-gray-0 h-full md:h-auto w-full md:w-[43.75rem] flex flex-col min-h-[600px]"
        ref={modalRef}
      >
        <header className="bg-black-50 p-5 flex items-center justify-between">
          <h2 className="font-roboto text-[18px] text-gray-0">
            Adicione o seu cartão de crédito
          </h2>
          <button onClick={handleToggleModal}>
            <Close />
          </button>
        </header>
        <section className="flex-1">
          <CreditCardInputs onToggle={handleToggleModal} />
        </section>
      </section>
    </aside>
  );
}
