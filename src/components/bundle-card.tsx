import Image from "next/image";

import { BundleWithProducts, BundleProduct } from "@/types";
import { AddToCartButton } from "./add-to-cart-btn";

export function BundleCard({ bundle }: { bundle: BundleWithProducts }) {
  return (
    <div className="bg-brand-grey-100 rounded-2xl flex flex-col justify-between pb-6 border-brand-grey-300 border-2">
      <div className="w-full bg-brand-primary p-3 rounded-t-2xl h-24 flex items-center">
        <h1 className="text-2xl text-brand-grey-100 font-bold text-center w-full">
          {bundle.name}
        </h1>
      </div>

      <div className="flex flex-col gap-4 p-6">
        {bundle.products.map((product: BundleProduct) => {
          return (
            <div key={product.id} className="flex flex-row items-center gap-4">
              <Image
                src={product.image}
                width={50}
                height={50}
                alt={product.name}
              />
              <h4 className="font-semibold">{product.name}</h4>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center p-6">
        <AddToCartButton item={bundle} />
      </div>
    </div>
  );
}
