import { useRef } from "react";
import Close from "../../icons/Close";
import AdressInputs from "./EditAdressInputs";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FormData } from "@/app/contexts/AdressContext";

export default function ModalEditAddress({
  handleDeleteModal,
  handleToggleModal,
  address,
}: {
  handleDeleteModal?: () => void;
  handleToggleModal: () => void;
  address?: FormData;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleToggleModal);

  return (
    <aside className="fixed h-full md:h-screen w-full top-0 left-0 bg-[#0000]/30 z-10 backdrop-blur-md flex items-center justify-center">
      <section
        className="bg-gray-0 h-full md:h-auto w-full md:w-[37.5rem] flex flex-col"
        ref={modalRef}
      >
        <header className="bg-black-50 p-5 flex items-center justify-between">
          <h2 className="font-roboto text-[18px] text-gray-0">
            Editar endereço de envio
          </h2>
          <button onClick={handleToggleModal}>
            <Close />
          </button>
        </header>
        <section className="flex-1">
          <AdressInputs
            handleDeleteModal={handleDeleteModal}
            onToggle={handleToggleModal}
            address={address}
          />
        </section>
      </section>
    </aside>
  );
}
