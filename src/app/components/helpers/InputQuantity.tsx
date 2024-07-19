"use client";

import { Product, useCart } from "@/app/contexts/CartProductsContext";
import Image from "next/image";
import { useState, useRef, FC, ChangeEvent, KeyboardEvent } from "react";

interface InputQuantityProps {
  initialValue?: number;
  stockLimit?: number;
  className?: string;
  cart: Product;
}

const InputQuantity: FC<InputQuantityProps> = ({
  cart,
  initialValue = 1,
  stockLimit = 100,
}) => {
  const { addCartTotal, removeOneCartTotal, setCartTotalInput, cartTotal } =
    useCart();
  const quantityCart = cartTotal.filter(
    (total) => total.product.id === cart.id
  );
  const [quantityProduct, setQuantityProduct] = useState<number>(
    quantityCart[0].quantity
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRemoveProduct = () => {
    if (quantityProduct > 1) {
      setQuantityProduct((prevState) => prevState - 1);
      removeOneCartTotal(cart.id);
    }
  };

  const handleAddProduct = () => {
    if (quantityProduct < stockLimit) {
      setQuantityProduct((prevState) => prevState + 1);
      addCartTotal(cart);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setQuantityProduct(NaN);
    } else {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue) && parsedValue > 0 && parsedValue <= stockLimit) {
        setQuantityProduct(parsedValue);
        setCartTotalInput(cart.id, parsedValue);
      }
    }
  };

  const handleBlur = () => {
    if (isNaN(quantityProduct) || quantityProduct <= 0) {
      setQuantityProduct(1);
    } else if (quantityProduct > stockLimit) {
      setQuantityProduct(stockLimit);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      inputRef.current?.blur();
    }
  };

  return (
    <>
      <button onClick={handleRemoveProduct}>
        <Image
          src="/icons/remove.svg"
          width={16}
          height={16}
          alt="Remover"
          className="h-6 w-6"
        />
      </button>
      <input
        type="text"
        ref={inputRef}
        value={isNaN(quantityProduct) ? "" : quantityProduct}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="text-center w-12 mx-2 bg-transparent text-gray-0"
      />
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
};

export default InputQuantity;
