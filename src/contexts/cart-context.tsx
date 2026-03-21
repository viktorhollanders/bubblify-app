"use client";
import { createContext, useCallback, useMemo } from "react";
import { Product, BundleWithProducts, CartItem } from "@/types";
import { useLocalStorage } from "./hooks/use-local-storage";

interface CartContextType {
  cartItems: CartItem[];
  addCartItem: (item: Product | BundleWithProducts) => void;
  removeCartItem: (item: Product | BundleWithProducts) => void;
  deleteCartItem: (item: Product | BundleWithProducts) => void;
  cartTotal: number;
  cartQuantity: number;
  hasHydrated: boolean;
}

export const CartContext = createContext<CartContextType | null>(null);

const updateQuantity = (
  items: CartItem[],
  item: Product | BundleWithProducts,
  quantity: number,
) => {
  return items.map((i) => {
    if (i.product.id === item.id) {
      return { product: item, productQuantity: quantity };
    }
    return i;
  });
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const {
    state: cartItems,
    setState: setCartItems,
    hasHydrated,
  } = useLocalStorage<CartItem[]>("cart", []);

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (acc, curr) => acc + curr.product.price * curr.productQuantity,
      0,
    );
  }, [cartItems]);

  const cartQuantity = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.productQuantity, 0);
  }, [cartItems]);

  const addCartItem = useCallback(
    (item: Product | BundleWithProducts) => {
      setCartItems((items) => {
        const exists = items.find((i) => i.product.id === item.id);

        if (exists) {
          return updateQuantity(items, item, exists.productQuantity + 1);
        }
        return [...items, { product: item, productQuantity: 1 }];
      });
    },
    [setCartItems],
  );

  const removeCartItem = useCallback(
    (item: Product | BundleWithProducts) => {
      setCartItems((items) => {
        const exists = items.find((i) => i.product.id === item.id);
        if (exists && exists.productQuantity > 1) {
          return updateQuantity(items, item, exists.productQuantity - 1);
        }

        return items.filter((i) => i.product.id !== item.id);
      });
    },
    [setCartItems],
  );

  const deleteCartItem = useCallback(
    (item: Product | BundleWithProducts) => {
      setCartItems((items) => {
        return items.filter((i) => i.product.id !== item.id);
      });
    },
    [setCartItems],
  );

  return (
    <CartContext
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        deleteCartItem,
        cartQuantity,
        cartTotal,
        hasHydrated,
      }}
    >
      {children}
    </CartContext>
  );
}
