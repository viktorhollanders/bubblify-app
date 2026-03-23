"use server";
import { redirect } from "next/navigation";

type OrderState = { error: string } | null;

export async function fetchOrder(
  _prevState: OrderState,
  formData: FormData,
): Promise<OrderState> {
  const telephone = (formData.get("query") as string)
    .trim()
    .replace(/\s+/g, "");
  const ordersUrl = `http://localhost:3500/api/orders/${telephone}`;
  const response = await fetch(ordersUrl);
  if (!response.ok) {
    return { error: "Order not found" };
  }
  redirect(`/orders/${telephone}`);
}
