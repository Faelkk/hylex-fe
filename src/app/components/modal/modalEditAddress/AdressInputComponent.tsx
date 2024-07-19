import { cn } from "@/functions/cn";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

const InputAddressComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ name, id, placeholder, className, disabled, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          name={name}
          id={id}
          {...props}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full text-black-0 bg-gray-100 border border-black-500 rounded-[3px] p-1 font-roboto text-[14px] placeholder:text-black-0 focus:bg-gray-300 focus:border-black-600 transition-colors mt-1 ",
            error && "border-red-500 focus:border-red-500",
            className
          )}
        />

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-500">
            <span className=" text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

InputAddressComponent.displayName = "InputAddressComponent";

export default InputAddressComponent;
