"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { z } from "zod";
import { mainOrderSchema } from "@/schemas/schema";

type FormData = z.infer<typeof mainOrderSchema>;

interface OrderContextProps {
  order: FormData | null;
  setOrder: (order: FormData) => void;

  setDefaultOrder: (order: FormData) => void;
}

export const OrderContext = createContext<OrderContextProps | null>(null);

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (context === null) {
    throw new Error("Order context must be used inside a provider");
  }
  return context;
};

export function OrderContextProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<FormData | null>(null);

  useEffect(() => {
    const storedDefaultOrder = localStorage.getItem("orderProduct");
    if (storedDefaultOrder) {
      setOrder(JSON.parse(storedDefaultOrder));
    }
  }, []);

  const setDefaultOrder = (order: FormData) => {
    setOrder(order);
    localStorage.setItem("orderProduct", JSON.stringify(order));
  };

  return (
    <OrderContext.Provider value={{ order, setOrder, setDefaultOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
