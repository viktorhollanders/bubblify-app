import { BundleWithProducts } from "./bundle-with-product";
import { Product } from "./product";

export interface CartItem {
  product: Product | BundleWithProducts;
  productQuantity: number;
}
