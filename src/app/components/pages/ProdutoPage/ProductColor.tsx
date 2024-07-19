import { cn } from "@/functions/cn";
import Image from "next/image";

export default function ProductColor({
  image,
  isActive,
  onColorChange,
}: {
  image: any;
  isActive: boolean;
  onColorChange: (color: string) => void;
}) {
  const handleProductColor = () => {
    onColorChange(image.color);
  };

  return (
    <button
      className={cn(
        "border-2 rounded-[5px] p-1 max-w-[52px] max-h-[52px]",
        isActive ? "border-green-300" : "border-black-800"
      )}
      onClick={handleProductColor}
    >
      <Image
        src={image.url}
        alt="Clique para mudar a cor do produto"
        width={100}
        height={100}
        className="w-10 h-10"
      />
    </button>
  );
}
