import React from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
  className,
  ...rest
}: {
  className: string;
  rest: React.ReactNode;
}) {
  return (
    <div
      {...rest}
      className={(twMerge("rounded-lg bg-white p-6 shadow-sm"), className)}
    />
  );
}
