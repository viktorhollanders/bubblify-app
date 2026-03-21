import { createContext } from "react";
import { CartItem, StorePickup, Delivery } from "@/types";
// import { useLocalStorage } from "./hooks/use-local-storage";

interface CheckoutContextType {
  cartItems: CartItem[];
  fulfillment: StorePickup | Delivery;
  cartTotal: number;
  cartQuantity: number;
  hasHydrated: boolean;
}

export const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider() {}
