import Check from "@/app/components/icons/Check";
import Image from "next/image";

const PixMethod = ({
  selectedMethod,
  handleClick,
}: {
  selectedMethod: { method: string; cardIndex?: number } | null;
  handleClick: (method: "pix" | "boleto" | "card") => void;
}) => {
  return (
    <div className="flex items-center border-t border-gray-400 py-5">
      <button
        className="flex flex-col medium:flex-row medium:items-center gap-2 medium:gap-5 w-full"
        onClick={() => handleClick("pix")}
      >
        <div className="flex items-center gap-5 max-w-[70px] w-full">
          {selectedMethod?.method === "pix" ? (
            <div className="h-5 w-5 border-green-400 border-2 rounded-[5px] flex items-center justify-center cursor-pointer">
              <Check />
            </div>
          ) : (
            <div className="border-2 border-gray-600 rounded-[5px] p-2 h-4 w-4 cursor-pointer"></div>
          )}
          <Image
            src="/icons/pix.svg"
            width={32}
            height={32}
            className="w-5 h-5"
            alt="Pix icon"
          />
        </div>
        <span className="font-roboto text-black-300 text-[14px] max-w-[450px] text-left">
          O código Pix gerado para o pagamento é válido por 30 minutos após a
          finalização do pedido.
        </span>
      </button>
    </div>
  );
};

export default PixMethod;
