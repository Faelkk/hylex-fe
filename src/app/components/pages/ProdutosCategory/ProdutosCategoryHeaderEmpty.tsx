import DropdownButton from "../../dropdown/DropdownButton";
import ButtonModal from "../../modal/modalFilterProduct/ButtonModal";

export default function ProdutosCategoryHeaderEmpty() {
  return (
    <header className="flex flex-col  gap-2  md:gap-0  md:flex-row w-full justify-between">
      <div className="flex justify-between">
        <h1 className="font-poppins text-black-0 text-[36px]">Monitores</h1>
        <span className="font-roboto text-black-400 flex items-center md:hidden">
          0 produtos
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:items-center ">
        <div className="flex pp:flex-row gap-[30px]">
          <ButtonModal />
          <DropdownButton />
        </div>
        <span className="hidden md:flex font-roboto text-black-400  items-center">
          0 Produtos
        </span>
      </div>
    </header>
  );
}
