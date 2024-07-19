import { useModal } from "@/hooks/useModal";

import { useState } from "react";
import Check from "../../icons/Check";
import Image from "next/image";
import { cn } from "@/functions/cn";
import ModalEditCreditCard from "../../modal/modalEditCreditCard/ModalEditCreditCard";
import ModalDeleteCreditCard from "../../modal/modalDeleteCreditCard/ModalDeleteCreditCard";
import { FormData } from "@/app/contexts/CreditCardsContext";

function getCardBrand(cardNumber: string) {
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
}

export default function MyPaymentCard({
  creditCard,
}: {
  creditCard: FormData;
}) {
  const { handleToggleModal, isModalOpen } = useModal();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  const lastFourDigits = creditCard.cardNumber.slice(-4);
  const cardBrand = getCardBrand(creditCard.cardNumber);

  return (
    <>
      <div className="flex flex-col align-baseline md:items-center border border-gray-400 rounded-md lg:max-w-[350px] max-h-[250px] pt-6 px-6 pb-3">
        <button className="flex flex-row items-center md:flex-col medium:flex-row medium:items-center gap-2 medium:gap-5 large:items-center md:w-[290px] ">
          <div className="flex items-center gap-5 ">
            <Image
              src="/icons/card-credit-card.svg"
              width={32}
              height={32}
              className="w-5 h-5"
              alt="Cartão de crédito icon"
            />
          </div>
          <div className="flex flex-col justify-between w-full flex-1">
            <div className="flex flex-col pp:flex-row pp:gap-1.5 large:flex-row ">
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
        <button
          className="border border-black-0  transition-colors font-poppins font-medium flex justify-center items-center   rounded-[5px] p-2 mt-4 text-black-300  w-full medium:max-w-[250px]"
          onClick={handleToggleModal}
        >
          Editar cartão
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
}
