import { useModal } from "@/hooks/useModal";
import Arrow from "../../icons/Arrow";
import ModalCreditCard from "../../modal/modalCreditCard/ModalCreditCard";

export default function PaymentAddCard() {
  const { handleToggleModal, isModalOpen } = useModal();
  return (
    <>
      <div className="bg-gray-100 md:w-[600px] md:max-h-[450px] hidden md:flex justify-center items-center  h-[140px] md:h-full rounded-md ">
        <div className="flex flex-col items-center">
          <h1 className="font-poppins text-[18px] text-black-100">
            Clique para adicionar seu cartão.
          </h1>
          <button
            className="bg-green-400 hover:bg-green-500 max-w-[230px] transition-colors font-poppins font-medium flex justify-between items-center w-full  rounded-[5px] p-2 mt-4 text-gray-0"
            onClick={handleToggleModal}
          >
            Adicionar cartão
            <Arrow />
          </button>
        </div>
      </div>

      {isModalOpen && <ModalCreditCard handleToggleModal={handleToggleModal} />}
    </>
  );
}
