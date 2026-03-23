"use client";
import { useActionState } from "react";
import { fetchOrder } from "@/actions/fetch-order";
import { Button } from "./ui/button";

export function OrderSearchBar() {
  const [state, formAction, isPending] = useActionState(fetchOrder, null);

  return (
    <form action={formAction} className="flex flex-col w-full">
      <h2 className="pl-4 mb-1.5">Search orders</h2>
      <input
        className="border border-brand-grey-300 py-4 px-8 rounded-3xl w-full mb-6"
        placeholder="Enter telephone number"
        name="query"
      />
      {state && "error" in state && (
        <p aria-live="polite" className="pl-4 text-red-500">
          {state.error}
        </p>
      )}
      <Button variant="action" size="md" disabled={isPending}>
        {isPending ? "Searching..." : "Search"}
      </Button>
    </form>
  );
}
