import { FormData, useAddress } from "@/app/contexts/AdressContext";
import DeleteIcon from "../../icons/Delete";

export default function ModalDeleteSection({
  handleToggleModal,
  address,
}: {
  address: FormData;
  handleToggleModal: () => void;
}) {
  const { deleteAddress } = useAddress();

  const handleDeleteAdress = () => {
    deleteAddress(address.cep);
    handleToggleModal();
  };

  const handleCloseModal = () => {
    handleToggleModal();
  };

  return (
    <>
      <div className="flex flex-col items-center text-center gap-6 mt-10">
        <div className="w-[52px] h-[52px] rounded-full bg-red-50 flex justify-center items-center">
          <DeleteIcon />
        </div>
        <span className="font-roboto w-[180px] text-gray-800 font-bold tracking-[-0.5px]">
          Tem certeza que deseja excluir esse endereço ?
        </span>
        <p className="font-roboto tracking-[-0.5px] text-gray-800">
          Ao excluir esse endereço não sera possivel voltar atras, ele sera
          deletado permanentemente , e sera necessario adiciona-lo novamente.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-2 mt-9">
        <button
          className="font-roboto text-black-0 border-black-0 border rounded-2xl px-6 h-12 md:w-[50%] w-full"
          onClick={handleCloseModal}
        >
          Cancelar
        </button>
        <button
          className="font-roboto bg-[#e94c4c] text-gray-50 rounded-2xl px-6 h-12 md:w-[50%] w-full"
          onClick={handleDeleteAdress}
        >
          Sim, tenho certeza
        </button>
      </div>
    </>
  );
}
