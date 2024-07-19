import { cn } from "@/functions/cn";
import { ReactNode } from "react";

interface ButtonProps {
  classname?: string;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({ children, classname, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "w-[12rem] 3pp:w-[16rem] pp:w-[22.75rem] md:w-[28.75rem] font-poppins font-medium text-[18px]  p-3 rounded-[8px] mt-8  transition-colors text-gray-0",
        classname,
        disabled ? "bg-black-400" : "bg-green-400 hover:bg-green-500"
      )}
    >
      {children}
    </button>
  );
}
