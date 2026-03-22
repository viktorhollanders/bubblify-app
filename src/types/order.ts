import { CartItem } from "./cart-item";
import { Delivery, StorePickup } from "./fulfillment";

export interface Order {
  id: number;
  items: CartItem[];
  fulfillmentMethod: StorePickup | Delivery;
  orderTotal: number;
  orderQuantity: number;
}

export type CreateOrder = Omit<Order, "id">;
