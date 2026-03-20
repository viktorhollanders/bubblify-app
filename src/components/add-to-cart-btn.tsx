"use client";

import { useCartContext } from "@/contexts/hooks/use-cart-context";
import { Button } from "./ui/button";
import { BundleWithProducts, Product } from "@/types";

export function AddToCartButton({
  item,
}: {
  item: Product | BundleWithProducts;
}) {
  const { addCartItem } = useCartContext();

  return (
    <Button
      className="font-bold w-full"
      variant="primary"
      size="lg"
      onClick={() => addCartItem(item)}
    >
      Add to cart
    </Button>
  );
}
