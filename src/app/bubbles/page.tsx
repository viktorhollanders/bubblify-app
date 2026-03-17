import { ProductCard } from "@/components/product-card";
import { Product } from "@/types";

export default async function Bubbles() {
  const url = "http://localhost:3500/api/bubbles";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not connect to server");
  }

  const data = (await response.json()) as Product[];
  console.log(data);

  return (
    <div className="page-container">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
