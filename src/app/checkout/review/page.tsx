"use client";
import { useCheckoutContext } from "@/contexts/checkout/use-checkout-context";
import { useCartContext } from "@/contexts/cart/use-cart-context";
import { DeliveryAddress } from "@/components/delivery-address";
import { Delivery } from "@/types";
import { Button } from "@/components/ui/button";

export default function Review() {
  const { fulfillment, fulfillmentType } = useCheckoutContext();
  const { cartItems, cartQuantity, cartTotal } = useCartContext();

  return (
    <div className="page-container">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-6">
        Review your order
      </h1>

      <div className="p-6 rounded-3xl border border-brand-grey-300 flex flex-col gap-12 max-w-85 m-auto mb-6">
        <div>
          <h2 className="font-bold text-[20px] mb-4">Contact</h2>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-4 font-bold">
              <h3>Name:</h3>
              <h3>Phone:</h3>
            </div>

            <div className="flex flex-col gap-4">
              <h3>{fulfillment?.name}</h3>
              <h3>{fulfillment?.telephone}</h3>
            </div>
          </div>
        </div>

        {fulfillmentType === "delivery" && (
          <DeliveryAddress fulfillment={fulfillment as Delivery} />
        )}
      </div>

      <div className="p-6 rounded-3xl border border-brand-grey-300 flex flex-col gap-12 max-w-85 m-auto mb-6">
        <div className="grid grid-cols-4 font-bold">
          <h3 className="col-span-2">Name</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
        </div>
        {cartItems.map((i) => (
          <div key={i.product.id} className="grid grid-cols-4">
            <h3 className="col-span-2">{i.product.name}</h3>
            <h3 className="font-bold">{i.product.price} Kr.</h3>
            <h3>{i.productQuantity}</h3>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-3xl border border-brand-grey-300 flex flex-col gap-6 max-w-85 m-auto mb-6">
        <div className="grid grid-cols-2">
          <h3>Cart total:</h3>
          <h3 className="font-bold">{cartTotal} Kr.</h3>
        </div>
        <div className="grid grid-cols-2">
          <h3>Total items:</h3>
          <h3 className="font-bold">{cartQuantity}</h3>
        </div>

        <Button variant="accept" size="md" onClick={() => {}}>
          Confirm order
        </Button>
      </div>
    </div>
  );
}
