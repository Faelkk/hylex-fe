import { useRef } from "react";
import Close from "../../icons/Close";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import EditAccountOption from "./EditAccountOption";

export default function ModalEditAccountConfig({
  label,
  inputRegister,
  titleModal,
  subTitleModal,
  handleToggleModal,
}: {
  label: string;
  inputRegister: keyof FormData;
  subTitleModal: string;
  titleModal: string;
  handleToggleModal: () => void;
}) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleToggleModal);

  return (
    <aside className="fixed h-full md:h-screen w-full top-0 left-0 bg-[#0000]/30 z-10 backdrop-blur-md flex items-center justify-center">
      <section
        className="bg-gray-0  md:h-auto w-full md:w-[30.75rem] flex flex-col mx-5"
        ref={modalRef}
      >
        <header className="bg-black-50 p-5 flex items-center justify-between">
          <h2 className="font-roboto text-[18px] text-gray-0">{titleModal}</h2>
          <button onClick={handleToggleModal}>
            <Close />
          </button>
        </header>
        <section className="flex-1">
          <EditAccountOption
            label={label}
            inputRegister={inputRegister as any}
            subTitleModal={subTitleModal}
          />
        </section>
      </section>
    </aside>
  );
}
