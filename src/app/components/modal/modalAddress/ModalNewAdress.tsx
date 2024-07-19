import { useRef } from "react";
import Close from "../../icons/Close";
import AdressInputs from "./AdressInputs";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FormData } from "@/app/contexts/AdressContext";

export default function ModalNewAdress({
  handleDeleteModal,
  isEditModal,
  titleModal,
  subTitleModal,
  handleToggleModal,
  address,
}: {
  handleDeleteModal?: () => void;
  isEditModal?: boolean | undefined;
  subTitleModal: string;
  titleModal: string;
  handleToggleModal: () => void;
  address?: FormData;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleToggleModal);

  return (
    <aside className="fixed h-full md:h-screen w-full top-0 left-0 bg-[#0000]/30 z-10 backdrop-blur-md flex items-center justify-center">
      <section
        className="bg-gray-0 h-full md:h-auto w-full md:w-[43.75rem] flex flex-col"
        ref={modalRef}
      >
        <header className="bg-black-50 p-5 flex items-center justify-between">
          <h2 className="font-roboto text-[18px] text-gray-0">{titleModal}</h2>
          <button onClick={handleToggleModal}>
            <Close />
          </button>
        </header>
        <section className="flex-1">
          <AdressInputs
            handleDeleteModal={handleDeleteModal}
            isEditModal={isEditModal}
            onToggle={handleToggleModal}
            address={address}
            subTitleModal={subTitleModal}
          />
        </section>
      </section>
    </aside>
  );
}
