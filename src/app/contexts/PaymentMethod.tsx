"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { z } from "zod";
import { paymentMethodSchema } from "@/schemas/schema";

export type FormData = z.infer<typeof paymentMethodSchema>;

export const PaymentMethodContext =
  createContext<PaymentMethodContextProps | null>(null);

export const usePaymentMethod = () => {
  const context = useContext(PaymentMethodContext);

  if (context === null) {
    throw new Error("PaymentMethod context must be used inside a provider");
  }
  return context;
};

interface PaymentMethodContextProps {
  paymentMethod: FormData[] | null;
  selectedMethod: { method: string; cardId?: string } | null;
  selectedCard: FormData | null;
  setPaymentMethod: (paymentMethod: FormData[]) => void;
  setSelectedMethod: (method: { method: string; cardId?: string }) => void;
  setSelectedCard: (card: FormData | null) => void;
  setDefaultPaymentMethod: (paymentMethod: FormData | null) => void;
}

export function PaymentMethodContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [paymentMethod, setPaymentMethod] = useState<FormData[] | null>([]);
  const [selectedMethod, setSelectedMethod] = useState<{
    method: string;
    cardId?: string;
  } | null>(null);
  const [selectedCard, setSelectedCard] = useState<FormData | null>(null);

  useEffect(() => {
    const storedDefaultPaymentMethod = localStorage.getItem(
      "defaultPaymentMethod"
    );
    if (storedDefaultPaymentMethod) {
      const defaultPaymentMethod = JSON.parse(storedDefaultPaymentMethod);
      setPaymentMethod(defaultPaymentMethod);
      if (defaultPaymentMethod.length > 0) {
        setSelectedMethod({ method: defaultPaymentMethod[0].paymentMethod });
      }
    }
  }, []);

  const setDefaultPaymentMethod = (paymentMethodValue: FormData | null) => {
    if (paymentMethodValue) {
      setPaymentMethod([paymentMethodValue]);
      localStorage.setItem(
        "defaultPaymentMethod",
        JSON.stringify([paymentMethodValue])
      );
    } else {
      setPaymentMethod(null);
      localStorage.removeItem("defaultPaymentMethod");
    }
  };

  return (
    <PaymentMethodContext.Provider
      value={{
        paymentMethod,
        selectedMethod,
        selectedCard,
        setPaymentMethod,
        setSelectedMethod,
        setSelectedCard,
        setDefaultPaymentMethod,
      }}
    >
      {children}
    </PaymentMethodContext.Provider>
  );
}
