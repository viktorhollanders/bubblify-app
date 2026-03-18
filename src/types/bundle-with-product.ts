export interface BundleProduct {
  id: number;
  image: string;
  name: string;
}

export interface BundleWithProducts {
  id: number;
  name: string;
  products: BundleProduct[];
  bundlePrice: number;
}
