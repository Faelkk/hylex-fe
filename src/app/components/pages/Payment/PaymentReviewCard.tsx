import { CartTotalItem } from "@/app/contexts/CartProductsContext";
import { formatPrice } from "@/functions/formatPrice";
import Image from "next/image";

export default function PaymentReviewCard({ order }: { order: CartTotalItem }) {
  return (
    <>
      <div className="flex flex-col medium:flex-row p-5 border border-black-700 rounded-[5px] mt-[10px] gap-5">
        <figure className="md:h-[160px] medium:w-[150px] flex items-center justify-center">
          <Image
            src={order.product.images[0].urls[0]}
            width={200}
            height={300}
            className="medium:w-[150px] medium:h-[150px]"
            alt="Foto prévia produto"
          />
        </figure>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <h2 className="font-poppins text-[14px] pp:text-[18px] text-black-300 max-w-[280px] flex-1">
              {order.product.name}
            </h2>
          </div>
          <div className="flex justify-between flex-col flex-1 gap-2 mt-2">
            <div className="flex justify-between gap-2">
              <span className="font-poppins text-blue-300 font-medium  text-[16px] pp:text-[18px]">
                {formatPrice(order.product.price)}
              </span>
              <span className="font-poppins text-blue-300 font-medium  text-[16px] pp:text-[18px]">
                ({order.quantity})
              </span>
            </div>
            <span className="font-poppins text-blue-300 font-medium  text-[16px] pp:text-[18px]">
              Cor: <span>Preto</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
