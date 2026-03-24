import Image from "next/image";

import { BundleWithProducts, BundleProduct } from "@/types";
import { AddToCartButton } from "./add-to-cart-btn";

export function BundleCard({ bundle }: { bundle: BundleWithProducts }) {
  return (
    <div className="bg-brand-grey-100 rounded-2xl p-4 border-brand-grey-300 border-2 flex flex-col justify-between w-62.6 m-auto h-full">
      <h1 className="font-light text-2xl mb-6">{bundle.name}</h1>

      <div
        className="relative flex items-center pb-4"
        style={{
          width: `${50 + (bundle.products.length - 1) * 30}px`,
          height: "50px",
        }}
      >
        {bundle.products.map((product: BundleProduct, index: number) => (
          <div
            key={product.id}
            className="absolute rounded-full overflow-hidden shadow-2xl"
            style={{ left: `${index * 30}px`, zIndex: index }}
          >
            <Image
              src={product.image}
              width={50}
              height={50}
              alt={product.name}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between flex-wrap gap-2">
        {bundle.products.map((product: BundleProduct) => (
          <h1
            key={product.id}
            className="bg-brand-grey-300 py-0.75 px-2 rounded-full text-[12px] font-medium"
          >
            {product.name}
          </h1>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <AddToCartButton item={bundle} />
      </div>
    </div>
  );
}
