"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IMyOrders {}

interface IProductMyOrdersContext {
  MyOrders: IMyOrders[];
  setMyOrders: Dispatch<SetStateAction<IMyOrders[]>>;
}

export const MyOrdersContext = createContext<IProductMyOrdersContext | null>(
  null
);

export const useMyOrders = () => {
  const context = useContext(MyOrdersContext);

  if (context === null) {
    throw new Error("MyOrders context must be used inside a provider");
  }
  return context;
};

export function MyOrdersContextProvider({
  myOrders,
  children,
}: {
  myOrders: IMyOrders[];
  children: ReactNode;
}) {
  const [MyOrders, setMyOrders] = useState<IMyOrders[]>(myOrders);

  return (
    <MyOrdersContext.Provider
      value={{
        MyOrders,
        setMyOrders,
      }}
    >
      {children}
    </MyOrdersContext.Provider>
  );
}
