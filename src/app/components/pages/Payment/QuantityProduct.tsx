"use client";

import Image from "next/image";
import { useState } from "react";

export default function QuantityProduct() {
  const [quantityProduct, setQuantityProduct] = useState(1);

  const handleRemoveProduct = () => {
    if (quantityProduct > 1) {
      setQuantityProduct((prevState) => prevState - 1);
    }
  };

  const handleAddProduct = () => {
    setQuantityProduct((prevState) => prevState + 1);
  };

  return (
    <>
      <button onClick={handleRemoveProduct}>
        <Image
          src="/icons/remove.svg"
          width={16}
          height={16}
          alt="Adicionar mais"
          className="h-6 w-6"
        />
      </button>
      <span className="text-gray-0">{quantityProduct}</span>
      <button onClick={handleAddProduct}>
        <Image
          src="/icons/add.svg"
          width={16}
          height={16}
          alt="Adicionar mais"
          className="h-6 w-6"
        />
      </button>
    </>
  );
}
