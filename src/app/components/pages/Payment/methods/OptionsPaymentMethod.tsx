import AddCreditCardMethod from "./AddCreditCardMethod";
import PixMethod from "./PixMethod";
import BoletoMethod from "./BoletoMethod";
import CreditCardMethod from "./CreditCardMethod";
import { useCreditCards } from "@/app/contexts/CreditCardsContext";
import { usePaymentMethod } from "@/app/contexts/PaymentMethod";

export default function OptionsPaymentMethod({
  handleToggleModal,
}: {
  handleToggleModal: () => void;
}) {
  const { creditCards } = useCreditCards();
  const {
    selectedMethod,
    setSelectedMethod,
    setSelectedCard,
    setDefaultPaymentMethod,
  } = usePaymentMethod();

  const handleClick = (
    method: "pix" | "boleto" | "card",
    cardIndex?: number
  ) => {
    setSelectedMethod((prevMethod) => {
      const newMethod =
        prevMethod?.method === method && prevMethod?.cardIndex === cardIndex
          ? null
          : { method, cardIndex };

      if (newMethod && newMethod.method === "card" && cardIndex !== undefined) {
        const selectedCard = creditCards[cardIndex];
        setSelectedCard({ paymentMethod: "card", cardSelected: selectedCard });
        setDefaultPaymentMethod({
          paymentMethod: "card",
          cardSelected: selectedCard,
        });
      } else {
        setSelectedCard(null);
        setDefaultPaymentMethod(
          newMethod ? { paymentMethod: newMethod.method } : null
        );
      }

      return newMethod;
    });
  };

  return (
    <div className="px-5 pt-5">
      <div className="flex flex-col">
        <h3 className="text-black-950 font-poppins mb-[10px]">
          Seus cartões de crédito:
        </h3>
        <div className="border-t border-gray-400 py-5 flex flex-col gap-5">
          {creditCards?.map((creditCard, index) => (
            <CreditCardMethod
              key={index}
              index={index}
              creditCard={creditCard}
              selectedMethod={selectedMethod}
              handleClick={handleClick}
            />
          ))}
          <AddCreditCardMethod handleToggleModal={handleToggleModal} />
        </div>

        <div className="flex flex-col">
          <h3 className="text-black-950 font-poppins mb-[10px]">Pix:</h3>
          <PixMethod
            selectedMethod={selectedMethod}
            handleClick={handleClick}
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-black-950 font-poppins mb-[10px]">Boleto:</h3>
          <BoletoMethod
            selectedMethod={selectedMethod}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
