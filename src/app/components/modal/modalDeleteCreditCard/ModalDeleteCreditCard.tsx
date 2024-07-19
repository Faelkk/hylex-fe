import { creditCardSchema } from "@/schemas/schema";
import Close from "../../icons/Close";
import DeleteModalSection from "./DeleteModalSection";
import { z } from "zod";

type FormData = z.infer<typeof creditCardSchema>;

export default function ModalDeleteCreditCard({
  handleToggleModal,
  creditCard,
}: {
  creditCard: FormData;
  handleToggleModal: () => void;
}) {
  return (
    <aside className="fixed h-full md:h-screen w-full top-0 left-0 bg-[#0000]/30 z-10 backdrop-blur-md flex items-center justify-center">
      <section className="bg-gray-0 h-full md:h-auto w-full md:w-[43.75rem] flex flex-col ">
        <header className="bg-black-50 p-5 flex items-center justify-between">
          <h2 className="font-poppins text-[18px] text-gray-0">
            Delete o seu cartão de crédito
          </h2>
          <button onClick={handleToggleModal}>
            <Close />
          </button>
        </header>
        <section className="flex-1 p-3">
          <DeleteModalSection
            handleToggleModal={handleToggleModal}
            creditCard={creditCard}
          />
        </section>
      </section>
    </aside>
  );
}
