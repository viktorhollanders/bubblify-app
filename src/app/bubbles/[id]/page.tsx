import { Product } from "@/types";
import Image from "next/image";

import { AddToCartButton } from "@/components/add-to-cart-btn";

export default async function BubblesDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const url = `http://localhost:3500/api/bubbles/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Could not fetch bubble data");
  }

  const product = (await response.json()) as Product;

  return (
    <div className="page-container flex justify-center">
      <div className=" max-w-65 border-brand-grey-300 border-2 rounded-2xl p-6 flex flex-col gap-6">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.name}
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-light">{product.name}</h1>
          <h4>{product.description}</h4>
          <h3 className="font-bold">{product.price} KR.</h3>
        </div>

        <div className="lg:p-4">
          <AddToCartButton item={product} />
        </div>
      </div>
    </div>
  );
}
