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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {data.map((p) => (
          <Link key={p.id} href={`bubbles/${p.id}`}>
            <ProductCard key={p.id} product={p} />
          </Link>
        ))}
      </div>
    </div>
  );
}
