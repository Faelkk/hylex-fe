"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface InputContext {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

export const InputContext = createContext<InputContext | null>(null);

export const useInput = () => {
  const context = useContext(InputContext);

  if (context === null) {
    throw new Error("Inputs context must be used inside a provider");
  }
  return context;
};

export function InputContextProvider({ children }: { children: ReactNode }) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
}
