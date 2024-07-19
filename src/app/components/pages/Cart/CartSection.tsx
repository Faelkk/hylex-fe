import { useCart } from "@/app/contexts/CartProductsContext";
import CartItem from "./CartItem";
import { formatPrice } from "@/functions/formatPrice";
import { useRouter } from "next/navigation";

export default function CartSection() {
  const { cart, cartTotal, addOrder } = useCart();
  const router = useRouter();

  const total = cartTotal.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  const totalItems = cartTotal.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const handleOrder = () => {
    addOrder();
    router.push(`/payment`);
  };

  return (
    <main className="flex w-full  flex-1  justify-center mt-20">
      <section className="flex md:justify-between w-[80%]">
        <div className="flex flex-col w-full">
          <header className="flex flex-col medium:flex-row medium:justify-between gap-4">
            <h2 className="font-poppins text-[36px] text-black-0">
              Seu carrinho
            </h2>
            <div className="flex flex-col  gap-2 ">
              <span className="font-poppins font-medium text-[18px] text-black-200">
                TOTAL ({totalItems}{" "}
                {cartTotal.length === 1 ? "Produto" : "Produtos"}){" "}
                <span>{formatPrice(total)}</span>
              </span>
              <button
                className="bg-blue-100 font-poppins text-[18px] p-3 rounded-[5px] max-w-full text-gray-0"
                onClick={handleOrder}
              >
                Fechar pedido
              </button>
            </div>
          </header>

          <div className="bg-gray-100 mt-5 w-full h-[2px]"></div>

          {cart.map((itemCart) => (
            <CartItem key={itemCart.id} cart={itemCart} />
          ))}

          <div className="bg-gray-100 my-20 w-full h-[2px]"></div>
        </div>
      </section>
    </main>
  );
}
