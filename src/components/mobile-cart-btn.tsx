"use client";

import Link from "next/link";
import { QuantityIndicator } from "./quantity-indicator";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function MobileCartIndicator() {
  const pathname = usePathname();

  return pathname === "/cart" || pathname.startsWith("/checkout/") ? null : (
    <div className="fixed bottom-0 md:hidden z-10 w-full flex justify-end p-4">
      <Link href="/cart">
        <Button
          className="bg-white drop-shadow-xl w-11 h-11"
          variant="ghost"
          size="round"
        >
          <QuantityIndicator />
        </Button>
      </Link>
    </div>
  );
}
