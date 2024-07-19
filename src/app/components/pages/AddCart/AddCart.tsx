"use client";

import { useParams } from "next/navigation";

import { useCart } from "@/app/contexts/CartProductsContext";
import { formatPrice } from "@/functions/formatPrice";
import Image from "next/image";
import Link from "next/link";

export default function AddCart() {
  const params = useParams();
  const { cart } = useCart();
  const id = params.productId;

  const cartItem = cart.find((product) => product.id === Number(id));

  if (cartItem)
    return (
      <section className="mb-20">
        <div className="flex justify-center">
          <span className="font-roboto text-[24px] text-green-500 font-medium  uppercase">
            Produto adicionado ao carrinho
          </span>
        </div>
        <div className="flex">
          <section className=" drop-shadow-md  p-2 rounded-[5px] mt-5 flex items-center flex-1">
            <div className="flex flex-col default:flex-row w-full h-full min-h-[300px] gap-10">
              <figure className="bg-gray-500 default:max-w-[50%] 2xl:max-w-[700px] w-full flex items-center justify-center min-h-[300px]">
                <Image
                  src={cartItem.images[0].urls[0]}
                  alt={cartItem.name}
                  width={300}
                  height={300}
                  className="h-[200px] w-[200px]"
                />
              </figure>
              <div className="flex flex-col default:w-[50%]">
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <h1 className="font-roboto text-[24px] text-blue-100">
                    {cartItem.name}
                  </h1>
                  <span className="font-poppins font-medium text-blue-300 text-[24px]">
                    {formatPrice(cartItem.price)}
                  </span>
                </div>
                <div className="flex-1 flex items-center my-5">
                  <p className="font-roboto text-[18px] text-black-300 md:max-w-[500px]">
                    {cartItem.description}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row md:gap-10 justify-between 2xl:justify-normal">
                  <Link
                    className="bg-green-400 text-center hover:bg-green-500 transition-colors font-poppins uppercase font-medium tracking-wide text-[15px]  md:max-w-[300px] w-full pp:text-[18px] p-3  rounded-[5px] mt-5 
 text-gray-0 max-h-[52px]"
                    href="/cart"
                  >
                    Ir para o carrinho
                  </Link>
                  <Link
                    className="border-2 border-black-100 transition-colors font-poppins uppercase font-medium tracking-wide text-[15px]  pp:text-[18px] p-3  rounded-[5px] mt-5 
 text-blue-100 3pp:max-h-[52px] text-center  md:max-w-[300px] w-full "
                    href="/"
                  >
                    Continuar comprando
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
}
