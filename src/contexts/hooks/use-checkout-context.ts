import { useContext } from "react";
import { CheckoutContext } from "../checout-context";

export function useCheckoutContext() {
  const context = useContext(CheckoutContext);
  if (!context)
    throw new Error("useCartContext must be used within a CartProvider");
  return context;
}
