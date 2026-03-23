import { CartItem } from "./cart-item";
import { Delivery, StorePickup } from "./fulfillment";

export interface Order {
  items: CartItem[];
  fulfillmentMethod: StorePickup | Delivery;
  orderTotal: number;
  orderQuantity: number;
}
