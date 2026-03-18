import { Product } from "@/types";
import Image from "next/image";

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
    <div className="page-container">
      <div>
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.name}
        />

        <h1>{product.name}</h1>
        <h4>{product.description}</h4>
        <h3>{product.price}.ISK</h3>
      </div>
    </div>
  );
}
