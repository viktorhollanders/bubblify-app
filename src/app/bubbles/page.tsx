import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { Product } from "@/types";

export default async function Bubbles() {
  const url = "http://localhost:3500/api/bubbles";
  const response = await fetch(url);

  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Could not fetch bubble data");
  }

  const data = (await response.json()) as Product[];

  return (
    <div className="page-container">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-6">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((product) => (
          <Link key={product.id} href={`bubbles/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
