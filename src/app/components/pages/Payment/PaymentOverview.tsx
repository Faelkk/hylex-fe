"use client";

import { useAddress } from "@/app/contexts/AdressContext";
import { useCart } from "@/app/contexts/CartProductsContext";
import { useOrder } from "@/app/contexts/OrderContext";
import { usePaymentMethod } from "@/app/contexts/PaymentMethod";
import { formatPrice } from "@/functions/formatPrice";

export default function PaymentOverview() {
  const { order } = useCart();
  const { defaultAddress } = useAddress();
  const { paymentMethod } = usePaymentMethod();
  const { setDefaultOrder } = useOrder();

  const handleOrder = () => {
    console.log(order, defaultAddress, paymentMethod);
  };

  return (
    <section className="border border-gray-400 p-3 max-h-[230px] rounded-[5px] md:max-w-[300px] w-full flex flex-col items-center">
      <div className="w-full">
        <h2 className="font-poppins text-[24px] text-black-0">
          Resumo do pedido:
        </h2>
        <div className="flex flex-col gap-1 mt-5">
          <div className="font-roboto text-black-300 flex justify-between">
            <span>Itens:</span>
            <span>{formatPrice(order.total)}</span>
          </div>
          <div className="font-roboto text-black-300 flex justify-between">
            <span>Frete e Manuseio:</span>
            <span>R$ 00,00</span>
          </div>
        </div>
        <div className="bg-gray-200  w-full h-[2px]  my-[10px]"></div>
        <div className="flex flex-col gap-4">
          <div className="font-poppins text-[18px] text-black-300 flex justify-between">
            <span>Total do pedido:</span>{" "}
            <span>{formatPrice(order.total)}</span>
          </div>
          <button
            className="bg-green-400 py-1 px-3 uppercase font-poppins  md:max-w-[230px] w-full rounded-[5px] hover:bg-green-500 transition-colors text-gray-0"
            onClick={handleOrder}
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </section>
  );
}
