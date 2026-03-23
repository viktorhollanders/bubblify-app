"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCartContext } from "@/contexts/cart/use-cart-context";
import { useEffect } from "react";

export default function Success() {
  const { clearCart } = useCartContext();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="page-container flex flex-col gap-12 items-center">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-6">
        Your order was create successfully
      </h1>

      <Link href="/orders">
        <Button variant="primary" size="md">
          Look up order
        </Button>
      </Link>
    </div>
  );
}
