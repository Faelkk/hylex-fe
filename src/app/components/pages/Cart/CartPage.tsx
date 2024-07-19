"use client";

import { useCart } from "@/app/contexts/CartProductsContext";
import CartSection from "./CartSection";
import CartEmptySection from "./CartEmptySection";

export default function CartPage() {
  const { cart } = useCart();

  return <>{cart.length > 0 ? <CartSection /> : <CartEmptySection />}</>;
}
