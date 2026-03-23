"use client";

import { useCartContext } from "@/contexts/cart/use-cart-context";
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
      className="font-bold"
      variant="primary"
      size="md"
      onClick={() => addCartItem(item)}
    >
      Add to cart
    </Button>
  );
}
