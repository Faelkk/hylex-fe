"use client";

import { useInput } from "@/app/contexts/InputContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function InputHeader() {
  const router = useRouter();
  const { inputValue, setInputValue } = useInput();
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      setInputValue(value);
      setValue("");
      router.push(`/search/${value}`);
    }
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form
      className="flex bg-gray-50 rounded-[5px] p-3 max-h-[44px] w-full small:w-[30rem] lg:w-[35rem]  xl:w-[40rem] justify-between "
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Pesquise algum produto..."
        className="placeholder:text-black-0 text-black-0 w-full"
        type="text"
        value={value}
        onChange={(event) => handleChangeValue(event)}
      />
      <button className=" hidden 3pp:block">
        <Image
          src="/icons/search.svg"
          width={32}
          height={32}
          className="w-5 h-5 "
          alt="Pesquisar produto"
        />
      </button>
    </form>
  );
}
