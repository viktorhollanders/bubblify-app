import Link from "next/link";

import { Bundle, Product } from "@/types";

export default async function Bundles() {
  const baseUrl = "http://localhost:3500/api";

  const [respBubbles, respBundles] = await Promise.all([
    fetch(`${baseUrl}/bubbles`),
    fetch(`${baseUrl}/bundles`),
  ]);

  if (!respBubbles.ok || !respBundles.ok) {
    console.log(`${respBubbles.status} ${respBundles.status}`);

    throw new Error("Could not load data from bubbles or bundles");
  }

  const bubbles = (await respBubbles.json()) as Product[];
  const bundles = (await respBundles.json()) as Bundle;

  console.log(bubbles);
  console.log(bundles);

  return (
    <div className="page-container">
      <h1>bunddle</h1>
    </div>
  );
}
