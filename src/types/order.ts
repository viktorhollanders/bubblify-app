import { CartItem } from "./cart-item";
import { Delivery, StorePickup } from "./fulfillment";

export interface Order {
  id: number;
  items: CartItem;
  fulfillment: StorePickup | Delivery;
}

// export interface CreateOrderInput {}
