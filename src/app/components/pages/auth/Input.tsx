import { cn } from "@/functions/cn";
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  classname?: string;
  type: string;
};

export default function Input({ classname, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        " w-[12rem] 3pp:w-[16rem] pp:w-[22.75rem] md:w-[28.75rem] text-black-0 bg-gray-0 border border-black-500 rounded-[3px] p-3 font-roboto placeholder:text-black-0 focus:bg-gray-300  focus:border-black-600 transition-colors mt-[16px]",
        classname
      )}
      {...props}
    />
  );
}
