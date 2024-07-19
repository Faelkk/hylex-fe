import { useForm } from "react-hook-form";
import { addressSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputAdressConfig from "./InputAdressConfig";

type FormData = z.infer<typeof addressSchema>;

export default function EditAccountOption({
  subTitleModal,
  inputRegister,
  label,
}: {
  label: string;
  subTitleModal: string;
  inputRegister: keyof FormData;
}) {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addressSchema),
  });

  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-poppins text-black-0 text-[24px]">{subTitleModal}</h1>
      <form className="mt-5 flex flex-col gap-3">
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">
            {label}
          </label>
          <InputAdressConfig
            type="text"
            error={errors?.[inputRegister]?.message}
            {...register(inputRegister)}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-400 font-poppins p-1 w-full uppercase rounded-[5px] hover:bg-green-500 transition-colors drop-shadow-md text-gray-0"
          >
            Salvar alterações
          </button>
        </div>
      </form>
    </div>
  );
}
