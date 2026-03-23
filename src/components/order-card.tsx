import { Order } from "@/types";

export function OrderCard({
  order,
  orderNumber,
}: {
  order: Order;
  orderNumber: number;
}) {
  return (
    <div className="border-brand-grey-300 rounded-3xl border p-6 w-full">
      <h1 className="font-bold text-2xl text-center mb-4">
        Order nr.{orderNumber}
      </h1>

      <div className="mb-12">
        {order.items.map((i) => {
          return (
            <div key={i.product.id} className="flex flex-row gap-4 mb-3">
              <h4 className="text-2xl">{i.product.name}</h4>
              <h4 className="text-2xl font-bold">{i.product.price} Kr.</h4>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4">
          <h3>Order total:</h3>
          <h3 className="font-bold">{order.orderTotal} Kr.</h3>
        </div>
        <div className="flex flex-row gap-4">
          <h3>Total quantity: </h3>
          <h3 className="font-bold">{order.orderQuantity}</h3>
        </div>
      </div>
    </div>
  );
}
