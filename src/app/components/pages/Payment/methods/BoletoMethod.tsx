import Check from "@/app/components/icons/Check";
import Image from "next/image";

const BoletoMethod = ({
  selectedMethod,
  handleClick,
}: {
  selectedMethod: { method: string; cardIndex?: number } | null;
  handleClick: (method: "pix" | "boleto" | "card") => void;
}) => {
  return (
    <div className="flex items-center border-t border-gray-400 pt-[10px] py-5">
      <button
        className="flex flex-col medium:flex-row medium:items-center gap-2 medium:gap-5 w-full"
        onClick={() => handleClick("boleto")}
      >
        <div className="flex items-center gap-5 max-w-[70px] w-full">
          {selectedMethod?.method === "boleto" ? (
            <div className="h-5 w-5 border-green-400 border-2 rounded-[5px] flex items-center justify-center cursor-pointer">
              <Check />
            </div>
          ) : (
            <div className="border-2 border-gray-600 rounded-[5px] p-2 h-4 w-4 cursor-pointer"></div>
          )}
          <Image
            src="/icons/boleto.svg"
            width={32}
            height={32}
            className="w-[30px] h-[30px]"
            alt="Boleto icon"
          />
        </div>
        <span className="font-roboto text-black-300 text-[14px] max-w-[450px] text-left">
          Vencimento em 1 dia útil. A data de entrega será alterada devido ao
          tempo de processamento do Boleto. Veja mais na próxima página.
        </span>
      </button>
    </div>
  );
};

export default BoletoMethod;
