import Check from "@/app/components/icons/Check";
import ModalDeleteCreditCard from "@/app/components/modal/modalDeleteCreditCard/ModalDeleteCreditCard";
import ModalEditCreditCard from "@/app/components/modal/modalEditCreditCard/ModalEditCreditCard";
import { FormData } from "@/app/contexts/CreditCardsContext";
import { cn } from "@/functions/cn";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { useState } from "react";

const getCardBrand = (cardNumber: string) => {
  const firstDigit = cardNumber[0];
  const firstTwoDigits = cardNumber.slice(0, 2);
  const firstFourDigits = cardNumber.slice(0, 4);

  if (firstDigit === "4") {
    return "Visa";
  } else if (
    firstTwoDigits === "51" ||
    firstTwoDigits === "52" ||
    firstTwoDigits === "53" ||
    firstTwoDigits === "54" ||
    firstTwoDigits === "55"
  ) {
    return "Mastercard";
  } else if (firstFourDigits === "6011" || firstTwoDigits === "65") {
    return "Discover";
  } else if (firstTwoDigits === "34" || firstTwoDigits === "37") {
    return "American Express";
  }

  return "Desconhecido";
};

const CreditCardMethod = ({
  creditCard,
  index,
  selectedMethod,
  handleClick,
}: {
  creditCard: FormData;
  index: number;
  selectedMethod: { method: string; cardIndex?: number } | null;
  handleClick: (method: "pix" | "boleto" | "card", cardIndex?: number) => void;
}) => {
  const { handleToggleModal, isModalOpen } = useModal();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const lastFourDigits = creditCard.cardNumber.slice(-4);
  const cardBrand = getCardBrand(creditCard.cardNumber);

  return (
    <>
      <div className="flex items-center">
        <button className="flex flex-col medium:flex-row medium:items-center gap-2 medium:gap-5 large:items-center w-full">
          <div
            className="flex items-center gap-5 max-w-[70px] w-full"
            onClick={() => handleClick("card", index)}
          >
            {selectedMethod?.method === "card" &&
            selectedMethod?.cardIndex === index ? (
              <div className="h-5 w-5 border-green-400 border-2 rounded-[5px] flex items-center justify-center cursor-pointer">
                <Check />
              </div>
            ) : (
              <div className="border-2 border-gray-600 rounded-[5px] p-2 h-5 w-5 cursor-pointer"></div>
            )}
            <Image
              src="/icons/card-credit-card.svg"
              width={32}
              height={32}
              className="w-5 h-5"
              alt="Cartão de crédito icon"
            />
          </div>
          <div
            className="flex flex-col large:flex-row justify-between w-full"
            onClick={handleToggleModal}
          >
            <div className="flex flex-col pp:flex-row pp:gap-1.5 large:flex-row md:gap-1.5">
              <div
                className={cn(
                  "flex",
                  cardBrand !== "Desconhecido" ? "gap-2" : "gap-0"
                )}
              >
                <span className="font-roboto text-black-300 text-[14px] text-left font-medium capitalize">
                  {creditCard.paymentMethod}
                </span>
                <span className="font-roboto text-black-300 text-[14px] text-left font-medium">
                  {cardBrand !== "Desconhecido" ? cardBrand : ""}
                </span>
              </div>
              <span className="font-roboto text-black-300 text-[14px] text-left">
                terminado em {lastFourDigits}
              </span>
            </div>
            <span className="font-roboto text-black-100 text-[14px] text-left">
              {creditCard.cardHolderName}
            </span>
          </div>
        </button>
      </div>

      {isModalOpen && (
        <ModalEditCreditCard
          handleDeleteModal={handleDeleteModal}
          handleToggleModal={handleToggleModal}
          creditCard={creditCard}
        />
      )}

      {isDeleteModalOpen && (
        <ModalDeleteCreditCard
          handleToggleModal={handleDeleteModal}
          creditCard={creditCard}
        />
      )}
    </>
  );
};

export default CreditCardMethod;
