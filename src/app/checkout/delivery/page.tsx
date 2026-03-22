"use client";

import { Button } from "@/components/ui/button";
import { useCheckoutContext } from "@/contexts/checkout/use-checkout-context";
import Link from "next/link";

export default function Delivery() {
  const { chooseFulfillmentMethod, addStep } = useCheckoutContext();
  return (
    <div className="page-container">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-6">
        Delivery
      </h1>

      <div className="flex flex-col items-center mt-12 gap-y-6">
        <h4 className="font-medium">Chose fulfillment method</h4>

        <div className="flex flex-row gap-x-12">
          <Link href="/checkout/info">
            <Button
              variant="action"
              size="md"
              onClick={() => {
                chooseFulfillmentMethod("pickup");
                addStep("delivery");
              }}
            >
              Pickup
            </Button>
          </Link>

          <Link href="/checkout/info">
            <Button
              variant="action"
              size="md"
              onClick={() => {
                chooseFulfillmentMethod("delivery");
                addStep("delivery");
              }}
            >
              Delivery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
