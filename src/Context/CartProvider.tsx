import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  type CartItem = {
    id: number;
    categoryId: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product) {
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
  }

  function removeFromCart(productId) {
    setCart((prev) => {
      return prev.filter((item) => productId !== item.id);
    });
  }

  function increment(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrement(id) {
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
