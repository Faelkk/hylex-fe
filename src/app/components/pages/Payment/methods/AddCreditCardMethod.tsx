import Image from "next/image";

const AddCreditCardMethod = ({
  handleToggleModal,
}: {
  handleToggleModal: () => void;
}) => {
  return (
    <div className="flex items-center">
      <button
        className="flex flex-col medium:flex-row medium:items-center gap-2 medium:gap-5 w-full"
        onClick={handleToggleModal}
      >
        <div className="flex items-center gap-5 max-w-[70px] w-full">
          <Image
            src="/icons/add.svg"
            width={32}
            height={32}
            alt="Adicionar cartão"
            className="h-6 w-5"
          />
          <Image
            src="/icons/card-credit-card.svg"
            width={32}
            height={32}
            className="w-5 h-5"
            alt="Cartão de crédito icon"
          />
        </div>
        <span className="font-roboto text-black-300 text-[14px] text-left">
          Adicionar cartão de crédito
        </span>
      </button>
    </div>
  );
};

export default AddCreditCardMethod;
