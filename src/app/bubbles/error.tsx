"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-container flex flex-col gap-6 items-center">
      <h1 className="mt-12 text-brand-primary font-bold text-4xl ">
        Could not fetch bubbles
      </h1>
    </div>
  );
}
