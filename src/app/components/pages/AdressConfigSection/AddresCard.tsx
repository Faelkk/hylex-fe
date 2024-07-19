import { FormData } from "@/app/contexts/AdressContext";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import ModalDeleteAddress from "../../modal/ModalDeleteAddress/ModalDeleteAddress";
import ModalEditAddress from "../../modal/modalEditAddress/ModalEditAdress";

export default function AddresCard({ address }: { address: FormData }) {
  const { handleToggleModal, isModalOpen } = useModal();
  const [isDeleteModalOpen, setIsDeleteModal] = useState(false);

  const handleToggleDeleteModal = () => {
    setIsDeleteModal(!isDeleteModalOpen);
  };

  return (
    <>
      <div className="flex flex-col  p-6 border border-gray-200 rounded-md bg-gray-0 w-full lg:w-[320px] h-[250px] max-h-[250px]">
        <div className="flex flex-col flex-1">
          <h2 className="font-poppins text-black-300 text-[18px] font-medium mt-1">
            Rafael Achtenberg
          </h2>
          <span className="font-roboto text-black-0 text-[14px]">
            {address.rua}, {address.bairro}, {address.numero}
          </span>
          <span className="font-roboto text-black-0 text-[14px]">
            {address.complemento}
          </span>
          <span className="font-roboto text-black-0 text-[14px]">
            {address.cidade}, {address.estado}, {address.cep}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="font-poppins  font-medium text-black-100 text-[14px]"
            onClick={handleToggleModal}
          >
            Editar
          </button>
          <span className="font-poppins font-medium text-black-100 text-[14px]">
            {" "}
            |
          </span>
          <button
            className="font-poppins font-medium text-black-100 text-[14px]"
            onClick={handleToggleDeleteModal}
          >
            Excluir
          </button>
        </div>
      </div>

      {isModalOpen && (
        <ModalEditAddress
          handleDeleteModal={handleToggleDeleteModal}
          handleToggleModal={handleToggleModal}
          address={address}
        />
      )}
      {isDeleteModalOpen && (
        <ModalDeleteAddress
          handleToggleModal={handleToggleDeleteModal}
          address={address}
        />
      )}
    </>
  );
}
