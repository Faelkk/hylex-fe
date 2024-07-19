import { FormData } from "@/app/contexts/AdressContext";
import ModalDeleteSection from "./ModalDeleteSection";
import Close from "../../icons/Close";

export default function ModalDeleteAddress({
  handleToggleModal,
  address,
}: {
  address: FormData;
  handleToggleModal: () => void;
}) {
  return (
    <aside className="fixed h-full md:h-screen w-full top-0 left-0 bg-[#0000]/30 z-10 backdrop-blur-md flex items-center justify-center">
      <section className="bg-gray-0 h-full md:h-auto w-full md:w-[43.75rem] flex flex-col ">
        <header className="bg-black-50 p-5 flex items-center justify-between">
          <h2 className="font-poppins text-[18px] text-gray-0">
            Delete o seu endereço de envio
          </h2>
          <button onClick={handleToggleModal}>
            <Close />
          </button>
        </header>
        <section className="flex-1 p-3">
          <ModalDeleteSection
            handleToggleModal={handleToggleModal}
            address={address}
          />
        </section>
      </section>
    </aside>
  );
}
