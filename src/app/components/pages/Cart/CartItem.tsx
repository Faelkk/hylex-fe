import Image from "next/image";
import InputQuantity from "../../helpers/InputQuantity";
import ProductRating from "../Produtos/ProductRating";
import { Product, useCart } from "@/app/contexts/CartProductsContext";
import { formatPrice } from "@/functions/formatPrice";

export default function CartItem({ cart }: { cart: Product }) {
  const { removeCart, removeCartTotal } = useCart();

  function handleRemove() {
    removeCart(cart.id);
    removeCartTotal(cart.id);
  }

  return (
    <div className="mt-5 bg-gray-500 drop-shadow-md w-full">
      <div className="flex flex-col md:flex-row md:max-h-[300px] md:h-[300px]">
        <figure className="max-h-[300px] h-[300px] md:w-[300px] large:w-[400px] bg-gray-300 flex items-center justify-center ">
          <Image
            src={cart.images[0].urls[0]}
            alt="Imagem do produto"
            width={800}
            height={800}
            className="w-[200px] h-[200px] "
          />
        </figure>
        <div className="p-5 flex flex-col gap-4 md:gap-0 justify-between md:w-full flex-1">
          <div className="flex flex-col large:flex-row md:justify-between w-full gap-4 large:gap-0">
            <h2 className="font-poppins text-black-200 max-w-[350px] md:text-[20px] large:text-[24px]">
              {cart.name}
            </h2>
            <div className="flex large:gap-10  gap-2 items-center md:max-h-[30px] justify-between">
              <span className="text-black-700 font-poppins font-medium text-[18px]">
                {formatPrice(cart.price)}
              </span>
              <button className="hidden large:flex" onClick={handleRemove}>
                <Image
                  src="/icons/close.svg"
                  width={32}
                  height={32}
                  alt="Remover do carrinho"
                  className="h-4 w-4"
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse large:flex-row gap-4 md:justify-between  large:items-center">
            <div className="flex flex-col medium:flex-row small:flex-row gap-2 flex-1">
              <div className="bg-blue-100 transition-colors font-poppins font-medium text-[18px] p-2 md:max-w-[230px] w-full rounded-[5px] flex items-center justify-between relative ">
                <InputQuantity cart={cart} />
              </div>

              <button
                className="border border-black-0 transition-colors font-poppins font-medium text-[16px] p-2   md:max-w-[230px] w-full rounded-[5px] text-black-0 large:hidden"
                onClick={handleRemove}
              >
                Excluir
              </button>
            </div>

            <div className="flex gap-3 large:justify-center ">
              <ProductRating product={cart} />
              <span className="font-poppins text-gray-600 ">
                ({cart.ratingQuantity})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
