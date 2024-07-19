import { FormData } from "@/app/contexts/AdressContext";
import Check from "../../icons/Check";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import ModalDeleteAddress from "../../modal/ModalDeleteAddress/ModalDeleteAddress";
import ModalEditAddress from "../../modal/modalEditAddress/ModalEditAdress";

export default function AdressCardSedex({
  address,
  selectedAddress,

  handleSelectedAdress,
}: {
  address: FormData;
  selectedAddress: FormData;
  addressBeingEdited: FormData | null;
  handleSelectedAdress: (address: FormData) => void;
  handleAdressBeingEdited: (adressSelected: FormData) => void;
}) {
  const { handleToggleModal, isModalOpen } = useModal();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <>
      <article className="flex flex-col md:flex-row gap-2 mt-[10px]">
        {selectedAddress && selectedAddress.cep === address.cep ? (
          <div className="h-5 w-5 border-green-400 border-2 rounded-[5px] flex items-center justify-center cursor-pointer">
            <Check />
          </div>
        ) : (
          <div
            className="border-2 border-gray-600 rounded-[5px] p-2 h-4 w-4 cursor-pointer z-10"
            onClick={() => handleSelectedAdress(address)}
          ></div>
        )}

        <div
          className="flex flex-col large:flex-row gap-2 cursor-pointer"
          onClick={handleToggleModal}
        >
          <div className="flex gap-2">
            <span className="font-roboto text-black-300 text-[14px]">
              Rafael Achtenberg,
            </span>
            <span className="font-roboto text-black-300 text-[14px]">
              {address.rua},
            </span>
          </div>

          <div className="flex gap-2">
            <span className="font-roboto text-black-300 text-[14px]">
              {" "}
              {address.bairro},
            </span>

            {address.complemento && (
              <span className="font-roboto text-black-300 text-[14px]">
                {address.complemento},
              </span>
            )}
          </div>
          <span className="font-roboto text-black-300 text-[14px]">
            {address.cidade}, {address.estado}, {address.cep}.
          </span>
        </div>
      </article>

      {isModalOpen && (
        <ModalEditAddress
          handleDeleteModal={handleDeleteModal}
          handleToggleModal={handleToggleModal}
          address={address}
        />
      )}

      {isDeleteModalOpen && (
        <ModalDeleteAddress
          handleToggleModal={handleDeleteModal}
          address={address}
        />
      )}
    </>
  );
}
