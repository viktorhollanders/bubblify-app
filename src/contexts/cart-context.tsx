"use client";
import {
  createContext,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Product, BundleWithProducts, CartItem } from "@/types";

interface CartContextType {
  cartItems: CartItem[];
  addCartItem: (item: Product | BundleWithProducts) => void;
  removeCartItem: (item: Product | BundleWithProducts) => void;
  deleteCartItem: (item: Product | BundleWithProducts) => void;
  cartTotal: number;
  cartQuantity: number;
}

export const CartContext = createContext<CartContextType | null>(null);

const CART_STORAGE = "cart";

const saveCart = (cartItems: CartItem[]) => {
  try {
    localStorage.setItem(CART_STORAGE, JSON.stringify(cartItems));
  } catch (error) {
    console.error(error);
    return [];
  }
};

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
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const result = localStorage.getItem(CART_STORAGE);

      if (result === null) return [];

      return JSON.parse(result) as CartItem[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (acc, curr) => acc + curr.product.price * curr.productQuantity,
      0,
    );
  }, [cartItems]);

  const cartQuantity = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.productQuantity, 0);
  }, [cartItems]);

  const addCartItem = useCallback((item: Product | BundleWithProducts) => {
    setCartItems((items) => {
      const exists = items.find((i) => i.product.id === item.id);

      if (exists) {
        return updateQuantity(items, item, exists.productQuantity + 1);
      }
      return [...items, { product: item, productQuantity: 1 }];
    });
  }, []);

  const removeCartItem = useCallback((item: Product | BundleWithProducts) => {
    setCartItems((items) => {
      const exists = items.find((i) => i.product.id === item.id);
      if (exists && exists.productQuantity > 1) {
        return updateQuantity(items, item, exists.productQuantity - 1);
      }

      return items.filter((i) => i.product.id !== item.id);
    });
  }, []);

  const deleteCartItem = useCallback((item: Product | BundleWithProducts) => {
    setCartItems((items) => {
      return items.filter((i) => i.product.id !== item.id);
    });
  }, []);

  return (
    <CartContext
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        deleteCartItem,
        cartQuantity,
        cartTotal,
      }}
    >
      {children}
    </CartContext>
  );
}
