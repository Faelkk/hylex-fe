"use client";

import { useDropdown } from "@/hooks/useDropdown";
import Expand from "../icons/Expand";
import { cn } from "@/functions/cn";
import { useState } from "react";
import DropdownFilter from "./DropdownFilter";

export default function DropdownButton() {
  const { handleToggleDropdown, isDropdownOpen } = useDropdown();

  const [activeDropdown, setActiveDropdown] = useState("Mais relevantes");

  const handleItemClick = (item: string) => {
    setActiveDropdown(item);
    handleToggleDropdown();
  };

  return (
    <section className="flex flex-col relative">
      <button
        className="border border-black-700 flex items-center justify-between  p-2 max-h-[40px] w-full medium:max-w-[230px] medium:w-[230px] medium:gap-8 "
        onClick={handleToggleDropdown}
      >
        <a className="font-roboto text-[18px] text-blue-100">
          {activeDropdown}
        </a>
        <Expand classname={cn("", isDropdownOpen ? "rotate-180" : "")} />
      </button>

      {isDropdownOpen && (
        <DropdownFilter
          activeItem={activeDropdown}
          onItemClick={handleItemClick}
          handleToggleDropdown={handleToggleDropdown}
        />
      )}
    </section>
  );
}
