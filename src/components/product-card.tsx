import { Product } from "@/types";
import Image from "next/image";

export function ProductCard(props: Product) {
  return (
    <div>
      <div className="w-3xs h-14">
        <Image
          src={props.url}
          alt={props.name}
          fill={true}
          height={0}
          width={0}
        />
      </div>

      <div className="flex flex-row gap-3">
        <h3>{props.name}</h3>
        <h4>{props.price} ISK</h4>
      </div>
    </div>
  );
}
