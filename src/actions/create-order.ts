"use server";
import { redirect } from "next/navigation";
import { Order } from "@/types";

export async function createOrder(order: Order) {
  const ordersUrl = `http://localhost:3500/api/orders/${order.fulfillmentMethod.telephone}`;
  try {
    const response = await fetch(ordersUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error("Failed to create order");
    }
  } catch {
    throw new Error("Failed to create order");
  }
  redirect("/checkout/success");
}
