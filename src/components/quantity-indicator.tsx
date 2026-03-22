"use client";
import { ShoppingBasket } from "lucide-react";
import { useCartContext } from "@/contexts/cart/use-cart-context";

export function QuantityIndicator() {
  const { cartQuantity } = useCartContext();

  return (
    <div className="flex flex-col relative justify-end md:justify-center items-center">
      <ShoppingBasket className="mr-2 md:m-0" strokeWidth={1} size={24} />
      <div className="bg-brand-grey-300 rounded-full p-0.5 h-4 w-4 absolute -top-0.5 -right-2 md:-top-2 md:-right-4 flex justify-center items-center">
        <span className="text-[12px]">{cartQuantity}</span>
      </div>
    </div>
  );
}
