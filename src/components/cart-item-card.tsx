"use client";
import { Plus, Minus, Trash } from "lucide-react";
import { CartItem } from "@/types";
import { useCartContext } from "@/contexts/hooks/use-cart-context";
import { Button } from "./ui/button";

export function CartItemCard({ item }: { item: CartItem }) {
  const { addCartItem, removeCartItem, deleteCartItem } = useCartContext();
  return (
    <div className="grid grid-col-1 min-[340px]:grid-cols-2 p-3 border-2 border-brand-grey-300 rounded-2xl ">
      <div className="flex flex-col">
        <h1>{item.product.name}</h1>
        <h1 className="font-bold">
          {item.product.price * item.productQuantity} KR.
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center justify-between w-24">
          <Button
            variant="action"
            size="icon"
            onClick={() => removeCartItem(item.product)}
            className="p-2"
          >
            <Minus size={16} />
          </Button>
          <span className="font-bold">{item.productQuantity}</span>
          <Button
            variant="action"
            size="icon"
            onClick={() => addCartItem(item.product)}
            className="p-2"
          >
            <Plus size={16} />
          </Button>
        </div>

        <Button
          variant="warn"
          size="round"
          onClick={() => deleteCartItem(item.product)}
          className="group border-brand-warning-primary bg-red-200 border"
        >
          <Trash
            className="text-brand-warning-secondary group-hover:text-white"
            size={16}
          />
        </Button>
      </div>
    </div>
  );
}
