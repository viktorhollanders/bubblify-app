"use client";
import { ShoppingBasket } from "lucide-react";
import { useCartContext } from "@/contexts/hooks/use-cart-context";

export function QuantityIndicator() {
  const { cartQuantity } = useCartContext();

  return (
    <div className="flex flex-col relative justify-end md:justify-center items-center">
      <ShoppingBasket strokeWidth={1} className="" size={24} />
      <div className="bg-brand-grey-300 rounded-full p-0.5 h-4.5 w-4.5 absolute -top-2 -right-4 flex justify-center items-center">
        <span className="text-[12px]">{cartQuantity}</span>
      </div>
    </div>
  );
}
