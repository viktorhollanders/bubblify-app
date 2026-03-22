import { Delivery } from "@/types";

interface Props {
  fulfillment: Delivery;
}

export function DeliveryAddress({ fulfillment }: Props) {
  return (
    <div>
      <h2 className="font-bold text-[20px] mb-4">Ship to</h2>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col font-bold gap-3">
          <h3>Address:</h3>
          <h3>City:</h3>
          <h3>Zip:</h3>
        </div>

        <div className="flex flex-col gap-3">
          <h3>{fulfillment?.address}</h3>
          <h3>{fulfillment?.city}</h3>
          <h3>{fulfillment?.postalCode}</h3>
        </div>
      </div>
    </div>
  );
}
