"use client";
import React, { useActionState, useEffect } from "react";
import { createProduct } from "../productAction";
import Submit from "@/app/components/submit";
import { toast } from "react-hot-toast";

export default function CreateProductPage() {
  const [state, formAction] = useActionState(createProduct, null);
  useEffect(() => {
    if (state?.success === true) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <section className="p-6">
      <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-lg font-semibold">Create Product</h1>
        <form action={formAction} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              name="name"
            />
          </div>
          <div className="min-h-5">
            {state?.errors && (
              <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
              name="price"
            />
          </div>
          <div className="min-h-5">
            {state?.errors && (
              <p className="mt-1 text-sm text-red-600">{state?.errors.price}</p>
            )}
          </div>
          <Submit />
        </form>
      </div>
    </section>
  );
}
