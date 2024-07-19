"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  ratingRate: number;
  ratingQuantity: number;
  imagesByColor: ProductImageByColor[];
  images: ProductImage[];
  description: string;
  technicalDetails: TechnicalDetail[];
  specifications: Specification[];
  content: string[];
  warranty: string;
  weight: string;
  categoryId: number;
  categoryFiltersOption: CategoryFiltersOption[];
}

interface ProductImageByColor {
  id: number;
  color: string;
  url: string;
  productId: number;
}

interface ProductImage {
  id: number;
  color: string;
  urls: string[];
  productId: number;
}

export interface TechnicalDetail {
  id: number;
  key: string;
  value: string;
  productId: number;
}

export interface Specification {
  id: number;
  key: string;
  value: string;
  productId: number;
}

export interface CategoryFiltersOption {
  id: number;
  key: string;
  value: string;
  productId: number;
}

export interface CartTotalItem {
  product: Product;
  quantity: number;
}

interface Order {
  updatedOrder: CartTotalItem[];
  total: number;
}

interface ICartProductsContext {
  cart: Product[];
  addCart: (product: Product) => void;
  removeCart: (productId: number) => void;
  addCartTotal: (product: Product) => void;
  setCartTotalInput: (productId: number, quantity: number) => void;
  removeCartTotal: (productId: number) => void;
  removeOneCartTotal: (productId: number) => void;
  cartTotal: CartTotalItem[];
  order: Order;
  addOrder: () => void;
  removeOrder: () => void;
}

export const CartProductsContext = createContext<ICartProductsContext | null>(
  null
);

export const useCart = () => {
  const context = useContext(CartProductsContext);

  if (context === null) {
    throw new Error("Cart context must be used inside a provider");
  }
  return context;
};

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState<CartTotalItem[]>([]);
  const [order, setOrder] = useState<Order>({ updatedOrder: [], total: 0 });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    setCart(savedCart);

    const savedCartTotal = JSON.parse(
      localStorage.getItem("cartTotal") || "[]"
    );
    setCartTotal(savedCartTotal);

    const savedOrder = JSON.parse(localStorage.getItem("order") || "[]");
    setOrder(savedOrder);
  }, []);

  const addCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  };

  const removeCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));

    const updatedCartTotal = cartTotal.filter(
      (product) => product.product.id !== productId
    );
    setCartTotal(updatedCartTotal);
    localStorage.setItem("cartTotal", JSON.stringify(updatedCartTotal));

    const updatedOrder = order.updatedOrder.filter(
      (item) => item.product.id !== productId
    );
    const total = updatedOrder.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    setOrder({ updatedOrder, total });
    localStorage.setItem("order", JSON.stringify({ updatedOrder, total }));

    checkAndRemoveOrder();
  };

  const addCartTotal = (product: Product) => {
    let updatedCartTotal;

    const index = cartTotal.findIndex((p) => p.product.id === product.id);

    if (index === -1) {
      updatedCartTotal = [...cartTotal, { product, quantity: 1 }];
    } else {
      updatedCartTotal = [...cartTotal];
      updatedCartTotal[index] = {
        ...updatedCartTotal[index],
        quantity: updatedCartTotal[index].quantity + 1,
      };
    }

    setCartTotal(updatedCartTotal);
    localStorage.setItem("cartTotal", JSON.stringify(updatedCartTotal));
  };

  const setCartTotalInput = (productId: number, quantity: number) => {
    const index = cartTotal.findIndex((p) => p.product.id === productId);
    let updatedCartTotal = [...cartTotal];

    if (index !== -1) {
      if (quantity <= 0) {
        updatedCartTotal.splice(index, 1);
      } else {
        updatedCartTotal[index].quantity = quantity;
      }
    } else if (quantity > 0) {
      const product = cart.find((p) => p.id === productId);
      if (product) {
        updatedCartTotal.push({ product, quantity });
      }
    }

    setCartTotal(updatedCartTotal);
    localStorage.setItem("cartTotal", JSON.stringify(updatedCartTotal));
  };

  const removeCartTotal = (productId: number) => {
    const updatedCartTotal = cartTotal.filter(
      (product) => product.product.id !== productId
    );

    setCartTotal(updatedCartTotal);
    localStorage.setItem("cartTotal", JSON.stringify(updatedCartTotal));

    const updatedOrder = order.updatedOrder.filter(
      (item) => item.product.id !== productId
    );
    const total = updatedOrder.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    setOrder({ updatedOrder, total });
    localStorage.setItem("order", JSON.stringify({ updatedOrder, total }));

    checkAndRemoveOrder();
  };

  const removeOneCartTotal = (productId: number) => {
    const index = cartTotal.findIndex((p) => p.product.id === productId);
    if (index !== -1) {
      const updatedCartTotal = [...cartTotal];
      const product = updatedCartTotal[index];

      if (product.quantity > 1) {
        product.quantity -= 1;
        updatedCartTotal[index] = product;
      } else {
        updatedCartTotal.splice(index, 1);
      }

      setCartTotal(updatedCartTotal);
      localStorage.setItem("cartTotal", JSON.stringify(updatedCartTotal));

      const updatedOrder = updatedCartTotal;
      const total = updatedOrder.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
      }, 0);

      setOrder({ updatedOrder, total });
      localStorage.setItem("order", JSON.stringify({ updatedOrder, total }));

      checkAndRemoveOrder();
    }
  };

  const addOrder = () => {
    const updatedOrder = [...cartTotal];
    const total = cartTotal.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    const isOrderSame =
      JSON.stringify(order.updatedOrder) === JSON.stringify(updatedOrder) &&
      order.total === total;

    if (!isOrderSame) {
      setOrder({ updatedOrder, total });
      localStorage.setItem("order", JSON.stringify({ updatedOrder, total }));
    }
  };

  const removeOrder = () => {
    setOrder({ updatedOrder: [], total: 0 });
    localStorage.removeItem("order");
  };

  const checkAndRemoveOrder = () => {
    if (cartTotal.length === 0) {
      removeOrder();
    }
  };

  return (
    <CartProductsContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        cartTotal,
        addCartTotal,
        removeCartTotal,
        removeOneCartTotal,
        setCartTotalInput,
        order,
        addOrder,
        removeOrder,
      }}
    >
      {children}
    </CartProductsContext.Provider>
  );
};
