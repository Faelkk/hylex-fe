import { useForm } from "react-hook-form";
import Check from "../../icons/Check";
import { addressSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputAddressComponent from "./AdressInputComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useAddress,
  FormData as FormDataAdress,
} from "@/app/contexts/AdressContext";
import { cn } from "@/functions/cn";
import DeleteIcon from "../../icons/Delete";

type FormData = z.infer<typeof addressSchema>;

export default function AdressInputs({
  isEditModal,
  subTitleModal,
  onToggle,
  address,
  handleDeleteModal,
}: {
  handleDeleteModal?: () => void;
  isEditModal: boolean | undefined;
  subTitleModal: string;
  onToggle: () => void;
  address?: FormDataAdress;
}) {
  const { addNewAddress, addNewDefaultAddress } = useAddress();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addressSchema),
  });

  const [isDefault, setIsDefault] = useState(true);

  useEffect(() => {
    if (address) {
      setValue("cep", address.cep);
      setValue("rua", address.rua);
      setValue("numero", address.numero);
      setValue("complemento", address.complemento);
      setValue("bairro", address.bairro);
      setValue("cidade", address.cidade);
      setValue("estado", address.estado);
    }
  }, [address, setValue]);

  const onSubmit = (data: FormData) => {
    addNewAddress(data);

    if (isDefault) {
      addNewDefaultAddress(data);
    }

    onToggle();
  };

  const cepValue = watch("cep");

  useEffect(() => {
    const fetchAddressData = async (cep: string) => {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        const { localidade, uf, logradouro, bairro } = response.data;
        if (response) {
          setValue("rua", logradouro);
          setValue("bairro", bairro);
          setValue("cidade", localidade);
          setValue("estado", uf);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do CEP:", error);
      }
    };

    if (cepValue && cepValue.length === 8) {
      fetchAddressData(cepValue);
    }
  }, [cepValue]);

  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-poppins text-black-0 text-[24px]">{subTitleModal}</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col gap-3"
      >
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">Cep</label>
          <InputAddressComponent
            type="text"
            error={errors?.cep?.message}
            {...register("cep")}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">Rua</label>
          <InputAddressComponent
            type="text"
            error={errors?.rua?.message}
            {...register("rua")}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">
            Número da residência
          </label>
          <InputAddressComponent
            type="text"
            error={errors?.numero?.message}
            {...register("numero")}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">
            Complemento
          </label>
          <InputAddressComponent
            type="text"
            error={errors?.complemento?.message}
            {...register("complemento")}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">Bairro</label>
          <InputAddressComponent
            type="text"
            error={errors?.bairro?.message}
            {...register("bairro")}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">Cidade</label>
          <InputAddressComponent
            type="text"
            disabled={true}
            className="bg-gray-400 text-black-300 border-black-700"
            placeholder="Insira o CEP acima para preencher a cidade"
            error={errors?.cidade?.message}
            {...register("cidade")}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-roboto text-black-0 text-[14px]">Estado</label>
          <InputAddressComponent
            type="text"
            className="bg-gray-400 text-black-300 border-black-700"
            placeholder="Insira o CEP acima para preencher o estado"
            disabled={true}
            error={errors?.estado?.message}
            {...register("estado")}
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-400 font-poppins p-1 max-w-[200px] w-full uppercase rounded-[5px] hover:bg-green-500 transition-colors drop-shadow-md text-gray-0"
          >
            Usar este endereço
          </button>
          {isEditModal ? (
            <button
              onClick={handleDeleteModal}
              className={cn(
                "border border-black-0 flex items-center justify-between  p-2 w-full md:max-w-[280px] w-ful rounded-[5px] max-h-10 "
              )}
            >
              <a className="font-roboto uppercase font-medium text-blue-100 ">
                {" "}
                Deletar endereço de envio
              </a>
              <DeleteIcon />
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <div
            onClick={() => setIsDefault(!isDefault)}
            className={cn(
              "h-5 w-5 border-2 rounded-[5px] flex items-center justify-center",
              isDefault ? "border-green-400" : "border-gray-600"
            )}
          >
            {isDefault && <Check />}
          </div>
          <label className="font-roboto text-black-0 text-[14px]">
            Definir como endereço padrão
          </label>
        </div>
      </div>
    </div>
  );
}
