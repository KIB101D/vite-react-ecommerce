import { createContext, useState } from "react";
import type { Product } from "../Types/types";
import type { CartItem } from "../Types/types";
import { showAddToCartToast } from "../utils/notifications";
import { showRemoveFromCartToast } from "../utils/notifications";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeAllFromCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: React.ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setCart((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
    showAddToCartToast(product);
  }

  function removeFromCart(productId: number) {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;

    setCart((prev) => prev.filter((i) => i.id !== productId));

    showRemoveFromCartToast(item, () => {
      setCart((current) => [...current, item]);
    });
  }

  function increment(id: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrement(id: number) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeAllFromCart() {
    return setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
