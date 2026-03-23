import { OrderSearchBar } from "@/components/order-search-bar";

export default function Orders() {
  return (
    <div className="page-container flex flex-col gap-12 items-center">
      <h1 className="text-center font-bold text-2xl md:text-4xl mb-6">
        Orders
      </h1>

      <OrderSearchBar />
    </div>
  );
}
