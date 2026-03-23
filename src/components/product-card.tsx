import { Product } from "@/types";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="h-full p-4 rounded-2xl bg-brand-grey-100 flex gap-4 items-center border-brand-grey-300 border-2 m-auto">
      <Image
        src={product.image}
        alt={product.name}
        height={80}
        width={80}
        loading="eager"
      />

      <div className="mt-4 flex flex-col gap-y-3">
        <h3 className="font-light text-2xl">{product.name}</h3>
        <h4 className="font-bold">{product.price}.ISK</h4>
      </div>
    </div>
  );
}
