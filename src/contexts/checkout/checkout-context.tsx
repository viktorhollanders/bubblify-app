"use client";
import { createContext, useState } from "react";
import { StorePickup, Delivery, CheckoutStep } from "@/types";

interface CheckoutContextType {
  fulfillment: StorePickup | Delivery | null;
  fulfillmentType: "pickup" | "delivery";
  chooseFulfillmentMethod: (type: "pickup" | "delivery") => void;
  setFulfillmentDetails: (method: StorePickup | Delivery) => void;
  addStep: (step: CheckoutStep) => void;
  removeStep: (step: CheckoutStep) => void;
  completedSteps: CheckoutStep[];
}

export const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [fulfillment, setFulfillment] = useState<StorePickup | Delivery | null>(
    null,
  );
  const [fulfillmentType, setFulfillmentType] = useState<"pickup" | "delivery">(
    "pickup",
  );

  const [completedSteps, setCompletedSteps] = useState<CheckoutStep[]>([]);

  const chooseFulfillmentMethod = (type: "pickup" | "delivery" = "pickup") => {
    setFulfillmentType(type);
  };

  const setFulfillmentDetails = (method: StorePickup | Delivery) => {
    setFulfillment(method);
  };

  const addStep = (step: CheckoutStep) => {
    setCompletedSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
  };

  const removeStep = (step: CheckoutStep) => {
    setCompletedSteps((prev) => prev.filter((s) => s !== step));
  };

  return (
    <CheckoutContext
      value={{
        fulfillment,
        fulfillmentType,
        chooseFulfillmentMethod,
        setFulfillmentDetails,
        addStep,
        removeStep,
        completedSteps,
      }}
    >
      {children}
    </CheckoutContext>
  );
}
