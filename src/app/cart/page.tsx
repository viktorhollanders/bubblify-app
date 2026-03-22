"use client";
import { useCartContext } from "@/contexts/cart/use-cart-context";
import { CartItemCard } from "@/components/cart-item-card";
import { Button } from "@/components/ui/button";
import { CartIndicator } from "@/components/cart-indicator";
import Link from "next/link";

export default function Cart() {
  const { cartItems, cartQuantity, cartTotal } = useCartContext();
  return (
    <div className="page-container">
      <div className="flex justify-center max-w-150 m-auto mt-6">
        {cartQuantity === 0 ? (
          <h1 className="text-center font-bold text-2xl">Your cart is empty</h1>
        ) : (
          <div className="flex flex-row items-baseline gap-3">
            <h1 className="text-center font-bold text-2xl">Your cart</h1>
            <CartIndicator />
          </div>
        )}
      </div>

      <div className="pt-4 flex flex-col gap-y-4">
        {cartItems.map((item) => (
          <CartItemCard key={item.product.id} item={item} />
        ))}
      </div>

      <div className="fixed bottom-0 z-10 left-0 right-0 max-w-150 m-auto py-4 px-6 bg-white rounded-full border border-brand-grey-300">
        {cartTotal === 0 ? (
          <div className="flex justify-start items-center">
            <Button variant="inactive" size="md">
              Proceed to checkout
            </Button>
          </div>
        ) : (
          <div className="flex justify-between  items-center">
            <Link href="/checkout">
              <Button variant="primary" size="md">
                Proceed to checkout
              </Button>
            </Link>
            <span className="font-bold">{cartTotal} KR.</span>
          </div>
        )}
      </div>
    </div>
  );
}
