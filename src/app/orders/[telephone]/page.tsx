import { OrderCard } from "@/components/order-card";
import { Order } from "@/types";

export default async function OrderInfo({
  params,
}: {
  params: Promise<{ telephone: string }>;
}) {
  const { telephone } = await params;

  const url = `http://localhost:3500/api/orders/${telephone}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.log(response.statusText);
    throw new Error("Could not fetch orders");
  }

  const orders = (await response.json()) as Order[];

  console.log(orders);

  const formattedTelephone = `${telephone.slice(0, 3)}-${telephone.slice(3)}`;

  return (
    <div className="page-container flex flex-col gap-12 items-center">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-6">
        Orders for {formattedTelephone}
      </h1>

      {orders.map((order, index) => (
        <OrderCard key={index + 1} order={order} orderNumber={index + 1} />
      ))}
    </div>
  );
}
