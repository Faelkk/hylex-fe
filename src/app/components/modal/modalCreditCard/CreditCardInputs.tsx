import Check from "../../icons/Check";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { creditCardSchema } from "@/schemas/schema";
import { useEffect, useState } from "react";
import { cn } from "@/functions/cn";
import { useCreditCards } from "@/app/contexts/CreditCardsContext";
import Expand from "../../icons/Expand";
import { useDropdown } from "@/hooks/useDropdown";

type FormData = z.infer<typeof creditCardSchema>;

export default function CreditCardInputs({
  onToggle,
}: {
  onToggle: () => void;
}) {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(creditCardSchema),
  });
  const { setDefaultCreditCards } = useCreditCards();
  const [checked, setChecked] = useState(true);
  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const onSubmit = (data: FormData) => {
    if (!selectedPaymentMethod) {
      setError("paymentMethod", {
        type: "manual",
        message: "Forma de pagamento é obrigatória",
      });
      return;
    }

    const formData = { ...data, paymentMethod: selectedPaymentMethod };
    setDefaultCreditCards(formData);
    onToggle();
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleClick = () => {
    handleToggleDropdown();
  };

  const handleDropdownItemClick = (method: string) => {
    setSelectedPaymentMethod(method);
    setValue("paymentMethod", method);

    clearErrors("paymentMethod");
    handleToggleDropdown();
  };

  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-poppins text-black-0 text-[24px]">
        Adicione o seu cartão
      </h1>
      <form
        className="mt-5 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">
            Número do cartão
          </label>
          <input
            className={`text-black-0 bg-gray-100 border border-black-500 rounded-[3px] p-1 font-roboto text-[14px] placeholder:text-black-0 focus:bg-gray-300 focus:border-black-600 transition-colors mt-1 ${
              errors.cardNumber ? "input-error" : ""
            }`}
            {...register("cardNumber")}
          />
          {errors.cardNumber && (
            <p className="text-red-500">{errors.cardNumber.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">
            Nome impresso no cartão
          </label>
          <input
            className={`text-black-0 bg-gray-100 border border-black-500 rounded-[3px] p-1 font-roboto text-[14px] placeholder:text-black-0 focus:bg-gray-300 focus:border-black-600 transition-colors mt-1 ${
              errors.cardHolderName ? "input-error" : ""
            }`}
            {...register("cardHolderName")}
          />
          {errors.cardHolderName && (
            <p className="text-red-500">{errors.cardHolderName.message}</p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-8">
          <div className="flex flex-col w-full">
            <label className="font-roboto text-black-0 text-[14px]">
              Validade
            </label>
            <input
              className={`w-full text-black-0 bg-gray-100 border border-black-500 rounded-[3px] p-1 font-roboto text-[14px] placeholder:text-black-0 focus:bg-gray-300 focus:border-black-600 transition-colors mt-1 ${
                errors.expiryDate ? "input-error" : ""
              }`}
              {...register("expiryDate")}
            />
            {errors.expiryDate && (
              <p className="text-red-500">{errors.expiryDate.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label className="font-roboto text-black-0 text-[14px]">
              Código de verificação
            </label>
            <input
              className={`w-full text-black-0 bg-gray-100 border border-black-500 rounded-[3px] p-1 font-roboto text-[14px] placeholder:text-black-0 focus:bg-gray-300 focus:border-black-600 transition-colors mt-1 ${
                errors.securityCode ? "input-error" : ""
              }`}
              {...register("securityCode")}
            />
            {errors.securityCode && (
              <p className="text-red-500">{errors.securityCode.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-8">
          <div className="flex flex-col w-full">
            <label className="font-roboto text-black-0 text-[14px]">
              CPF / CNPJ do titular
            </label>
            <input
              className={`w-full text-black-0 bg-gray-100 border border-black-500 rounded-[3px] p-1 font-roboto text-[14px] placeholder:text-black-0 focus:bg-gray-300 focus:border-black-600 transition-colors mt-1 ${
                errors.cpfCnpj ? "input-error" : ""
              }`}
              {...register("cpfCnpj")}
            />
            {errors.cpfCnpj && (
              <p className="text-red-500">{errors.cpfCnpj.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label className="font-roboto text-black-0 text-[14px]">
              Data de nascimento
            </label>
            <input
              className={`w-full text-black-0 bg-gray-100 border border-black-500 rounded-[3px] p-1 font-roboto text-[14px] placeholder:text-black-0 focus:bg-gray-300 focus:border-black-600 transition-colors mt-1 ${
                errors.birthDate ? "input-error" : ""
              }`}
              {...register("birthDate")}
            />
            {errors.birthDate && (
              <p className="text-red-500">{errors.birthDate.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-roboto text-black-0 text-[14px]">
            Forma de pagamento
          </h2>
          <div
            className="text-black-0 text-left cursor-pointer bg-gray-100 border border-black-500 rounded-[3px] p-1 font-roboto text-[14px] placeholder:text-black-0 focus:bg-gray-300 focus:border-black-600 transition-colors mt-1 flex items-center justify-between relative"
            onClick={handleClick}
          >
            <input
              type="hidden"
              {...register("paymentMethod")}
              value={selectedPaymentMethod}
            />
            <span className="font-roboto text-[16px] text-black-300">
              {selectedPaymentMethod || "Selecionar forma de pagamento"}
            </span>
            <Expand />
            {isDropdownOpen && (
              <div className="absolute left-0 top-10 z-10 bg-gray-0 drop-shadow-md w-full flex flex-col">
                {selectedPaymentMethod !== "Débito" && (
                  <li
                    className="font-roboto text-[16px] text-black-300 p-2 cursor-pointer"
                    onClick={() => handleDropdownItemClick("Débito")}
                  >
                    Débito
                  </li>
                )}
                <div className="border border-gray-200 px-2 w-full"></div>
                {selectedPaymentMethod !== "Crédito" && (
                  <li
                    className="font-roboto text-[16px] text-black-300 p-2 cursor-pointer"
                    onClick={() => handleDropdownItemClick("Crédito")}
                  >
                    Crédito
                  </li>
                )}
              </div>
            )}
          </div>
          {errors.paymentMethod && (
            <p className="text-red-500">{errors.paymentMethod.message}</p>
          )}
        </div>

        <div
          className={cn(
            "flex gap-2 items-center mt-2",
            isDropdownOpen ? "p-1" : ""
          )}
        >
          <div
            onClick={handleCheckboxChange}
            className={cn(
              "h-5 w-5 border-2 rounded-[5px] flex items-center justify-center",
              checked ? "border-green-400" : "border-gray-600"
            )}
          >
            {checked && <Check />}
          </div>

          <label className="font-roboto text-black-0 text-[14px]">
            Definir como padrão.
          </label>
        </div>

        <button
          type="submit"
          className={cn(
            "bg-green-400 font-poppins md:max-w-[300px] w-full uppercase rounded-[5px] hover:bg-green-500 transition-colors drop-shadow-md text-gray-0 p-2  mt-1"
          )}
        >
          Usar como forma de pagamento
        </button>
      </form>
    </div>
  );
}
