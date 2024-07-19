"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { z } from "zod";
import { creditCardSchema } from "@/schemas/schema";

export type FormData = z.infer<typeof creditCardSchema>;

interface CreditCardsContextProps {
  creditCards: FormData[] | null;
  setCreditCards: (creditCards: FormData[]) => void;
  setDefaultCreditCards: (creditCards: FormData) => void;
  editDefaultCreditCards: (creditCards: FormData) => void;
  deleteCreditCard: (cardNumber: string) => void;
}

export const CreditCardsContext = createContext<CreditCardsContextProps | null>(
  null
);

export const useCreditCards = () => {
  const context = useContext(CreditCardsContext);

  if (context === null) {
    throw new Error("CreditCards context must be used inside a provider");
  }
  return context;
};

export function CreditCardsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [creditCards, setCreditCards] = useState<FormData[] | null>([]);

  useEffect(() => {
    const storedDefaultCreditCards = localStorage.getItem("defaultCreditCards");
    if (storedDefaultCreditCards) {
      setCreditCards(JSON.parse(storedDefaultCreditCards));
    }
  }, []);

  const setDefaultCreditCards = (creditCardsValue: FormData) => {
    if (!creditCards) {
      setCreditCards([creditCardsValue]);
      localStorage.setItem(
        "defaultCreditCards",
        JSON.stringify([creditCardsValue])
      );
      return;
    }

    const existingCard = creditCards.find(
      (card) => card.cardNumber === creditCardsValue.cardNumber
    );

    if (!existingCard) {
      const newCreditCards = [...creditCards, creditCardsValue];
      setCreditCards(newCreditCards);
      localStorage.setItem(
        "defaultCreditCards",
        JSON.stringify(newCreditCards)
      );
    }
  };

  const editDefaultCreditCards = (editedCard: FormData) => {
    if (creditCards) {
      const updatedCreditCards = creditCards.map((card) =>
        card.cardNumber === editedCard.cardNumber ? editedCard : card
      );

      setCreditCards(updatedCreditCards);
      localStorage.setItem(
        "defaultCreditCards",
        JSON.stringify(updatedCreditCards)
      );
    }
  };

  const deleteCreditCard = (cardNumber: string) => {
    if (creditCards) {
      const updatedCreditCards = creditCards.filter(
        (card) => card.cardNumber !== cardNumber
      );

      setCreditCards(updatedCreditCards);
      localStorage.setItem(
        "defaultCreditCards",
        JSON.stringify(updatedCreditCards)
      );
    }
  };

  return (
    <CreditCardsContext.Provider
      value={{
        creditCards,
        setCreditCards,
        setDefaultCreditCards,
        editDefaultCreditCards,
        deleteCreditCard,
      }}
    >
      {children}
    </CreditCardsContext.Provider>
  );
}
