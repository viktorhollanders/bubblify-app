import { Bundle, Product, BundleWithProducts, BundleProduct } from "@/types";

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

  const productData = (await respBubbles.json()) as Product[];
  const bundlesData = (await respBundles.json()) as Bundle[];

  const bundles: BundleWithProducts[] = bundlesData.map((bundle) => {
    const filteredProducts: Product[] = productData.filter((product) => {
      return bundle.items.includes(product.id);
    });

    const products: BundleProduct[] = filteredProducts.map((product) => {
      return {
        id: product.id,
        name: product.name,
        image: product.image,
      };
    });

    const bundlePrice: number = filteredProducts.reduce(
      (acc, curr: Product) => {
        return acc + curr.price;
      },
      0,
    );

    return {
      id: bundle.id,
      name: bundle.name,
      products,
      bundlePrice,
    };
  });

  console.log(bundles);

  return (
    <div className="page-container">
      <h1>bunddle</h1>
    </div>
  );
}
