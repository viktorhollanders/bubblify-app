"use client";

import { DeliveryForm } from "@/components/delivery-form";
import { PickupForm } from "@/components/pickup-form";
import { useCheckoutContext } from "@/contexts/checkout/use-checkout-context";

export default function Info() {
  const { fulfillmentType } = useCheckoutContext();

  return (
    <div className="page-container">
      <h1 className="text-center font-bold text-2xl md:text-4xl">
        Contact Information
      </h1>

      {fulfillmentType === "delivery" ? <DeliveryForm /> : <PickupForm />}
    </div>
  );
}
