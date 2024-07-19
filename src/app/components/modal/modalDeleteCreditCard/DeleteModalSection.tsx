import { creditCardSchema } from "@/schemas/schema";
import DeleteIcon from "../../icons/Delete";
import { z } from "zod";
import { useCreditCards } from "@/app/contexts/CreditCardsContext";

type FormData = z.infer<typeof creditCardSchema>;

export default function DeleteModalSection({
  handleToggleModal,
  creditCard,
}: {
  creditCard: FormData;
  handleToggleModal: () => void;
}) {
  const { deleteCreditCard } = useCreditCards();

  const handleDeleteCard = () => {
    deleteCreditCard(creditCard.cardNumber);
    handleToggleModal();
  };

  return (
    <>
      <div className="flex flex-col items-center text-center gap-6 mt-10">
        <div className="w-[52px] h-[52px] rounded-full bg-red-50 flex justify-center items-center">
          <DeleteIcon />
        </div>
        <span className="font-roboto w-[180px] text-gray-800 font-bold tracking-[-0.5px]">
          Tem certeza que deseja excluir esse cartão ?
        </span>
        <p className="font-roboto tracking-[-0.5px] text-gray-800">
          Ao excluir esse cartão não sera possivel voltar atras, ele sera
          deletado permanentemente , e sera necessario adiciona-lo novamente.
        </p>
      </div>
      <div className="flex items-center w-full gap-2 mt-9">
        <button
          className="font-roboto text-black-0 border-black-0 border rounded-2xl px-6 h-12 w-[50%]"
          onClick={handleToggleModal}
        >
          Cancelar
        </button>
        <button
          className="font-roboto bg-[#e94c4c] text-gray-50 rounded-2xl px-6 h-12 w-[50%]"
          onClick={handleDeleteCard}
        >
          Sim, tenho certeza
        </button>
      </div>
    </>
  );
}
