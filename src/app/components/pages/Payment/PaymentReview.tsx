"use client";

import { useCart } from "@/app/contexts/CartProductsContext";
import PaymentReviewCard from "./PaymentReviewCard";
import { formatPrice } from "@/functions/formatPrice";
import { FormData, useAddress } from "@/app/contexts/AdressContext";
import {
  usePaymentMethod,
  FormData as FormPayment,
} from "@/app/contexts/PaymentMethod";
import { useOrder } from "@/app/contexts/OrderContext";

export default function PaymentReview() {
  const { order } = useCart();
  const { defaultAddress } = useAddress();
  const { paymentMethod } = usePaymentMethod();
  const { setDefaultOrder } = useOrder();

  const handleOrder = () => {
    console.log(order, defaultAddress, paymentMethod);
  };

  return (
    <section className="mt-10 max-w-[800px] w-full">
      <div className="">
        <h2 className="font-po text-[24px] text-blue-100">
          3- Revise o pedido
        </h2>
        {order.updatedOrder.map((updatedOrder) => (
          <PaymentReviewCard
            key={updatedOrder.product.id}
            order={updatedOrder}
          />
        ))}
      </div>
      <div className="flex flex-col-reverse gap-2 small:gap-0 small:flex-row small:items-center mt-[10px] border border-black-700 rounded-[5px] p-2 justify-between">
        <button
          className="bg-green-400 font-poppins p-1 small:max-w-[200px] w-full uppercase rounded-[5px] hover:bg-green-500 transition-colors text-gray-0"
          onClick={handleOrder}
        >
          Finalizar pedido
        </button>
        <span className="font-roboto text-[18px] font-medium text-blue-100 ">
          Total do pedido: <span>{formatPrice(order.total)}</span>
        </span>
      </div>
    </section>
  );
}
