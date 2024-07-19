"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { z } from "zod";
import { addressSchema } from "@/schemas/schema";

export type FormData = z.infer<typeof addressSchema>;

export const AddressContext = createContext<AddressContextProps | null>(null);

export const useAddress = () => {
  const context = useContext(AddressContext);

  if (context === null) {
    throw new Error("Address context must be used inside a provider");
  }
  return context;
};

interface AddressContextProps {
  address: FormData[];
  defaultAddress: FormData[];
  addNewAddress: (address: FormData) => void;
  addNewDefaultAddress: (address: FormData) => void;
  deleteAddress: (cepAddress: string) => void;
  editAddress: (updatedAddress: FormData) => void;
}

export function AddressContextProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<FormData[]>([]);
  const [defaultAddress, setDefaultAddress] = useState<FormData[]>([]);

  useEffect(() => {
    const storageAddress = localStorage.getItem("address");
    const storageDefaultAddress = localStorage.getItem("defaultAddress");
    if (storageAddress) {
      setAddress(JSON.parse(storageAddress));
    }
    if (storageDefaultAddress) {
      setDefaultAddress(JSON.parse(storageDefaultAddress));
    }
  }, []);

  const addNewAddress = (newAddress: FormData) => {
    setAddress((prevAddress) => {
      const alreadyExists =
        prevAddress.some((address) => address.cep === newAddress.cep) ||
        defaultAddress.some((address) => address.cep === newAddress.cep);

      if (alreadyExists) {
        return prevAddress;
      }

      const updatedAddress = [...prevAddress, newAddress];
      localStorage.setItem("address", JSON.stringify(updatedAddress));
      return updatedAddress;
    });
  };

  const addNewDefaultAddress = (newDefaultAddress: FormData) => {
    const alreadyExists =
      address.some((address) => address.cep === newDefaultAddress.cep) ||
      defaultAddress.some((address) => address.cep === newDefaultAddress.cep);

    if (alreadyExists) {
      return;
    }

    setDefaultAddress([newDefaultAddress]);
    localStorage.setItem("defaultAddress", JSON.stringify([newDefaultAddress]));
  };

  const deleteAddress = (cepAddress: string) => {
    if (cepAddress) {
      const updatedAddress = address.filter(
        (address) => address.cep !== cepAddress
      );

      setAddress(updatedAddress);
      localStorage.setItem("address", JSON.stringify(updatedAddress));
      if (defaultAddress[0]?.cep === cepAddress) {
        localStorage.removeItem("defaultAddress");
        setDefaultAddress([]);
      }
    }
  };

  const editAddress = (updatedAddress: FormData) => {
    setAddress((prevAddress) => {
      const updatedAddresses = prevAddress.map((address) =>
        address.cep === updatedAddress.cep ? updatedAddress : address
      );

      localStorage.setItem("address", JSON.stringify(updatedAddresses));
      return updatedAddresses;
    });

    if (defaultAddress[0]?.cep === updatedAddress.cep) {
      setDefaultAddress([updatedAddress]);
      localStorage.setItem("defaultAddress", JSON.stringify([updatedAddress]));
    }
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        defaultAddress,
        addNewAddress,
        addNewDefaultAddress,
        deleteAddress,
        editAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
