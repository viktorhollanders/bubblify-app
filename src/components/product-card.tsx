import { Product } from "@/types";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="max-w-3xs p-6 rounded-2xl bg-brand-grey-100 flex flex-col items-center">
      <Image
        src={product.image}
        alt={product.name}
        height={200}
        width={200}
        loading="eager"
        className="drop-shadow-2xl"
      />

      <div className="mt-4 flex flex-col gap-y-3">
        <h3 className="text-brand-primary font-bold capitalize">
          {product.name}
        </h3>
        <h4 className="font-bold">{product.price}.ISK</h4>
      </div>
    </div>
  );
}
