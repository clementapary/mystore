import Link from "next/link";
import React from "react";

import { LuChevronLeft } from "react-icons/lu";
import { getProducts } from "./productAction";

export default async function ProductPage() {
  const products = await getProducts();
  return (
    <div className="p-6">
      <section className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">Recent products</h3>
        <Link
          href="/products/create"
          className="self-end text-indigo-600 hover:text-indigo-800"
        >
          <LuChevronLeft className="mr-2 inline-block" />
          Create products
        </Link>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3">Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((row) => (
              <tr key={row.name} className="border-b last:border-none">
                <td className="py-4">{row.name}</td>
                <td>{row.price}</td>
                <td className="space-x-3">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    <Link href={`/products/${row.id}`}>View Details</Link>
                  </span>
                  <span className="rounded-full bg-sky-400 px-3 py-1 text-xs font-medium text-zinc-100">
                    <Link href={`/products/edit/${row.id}`}>Edit</Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
