// import { prisma } from "@/lib/prisma";
import React from "react";

export default async function DashboardPage() {
  // const users = await prisma.user.findMany();

  const stats = [
    { title: "Users", value: "12,480" },
    { title: "Revenue", value: "$48,200" },
    { title: "Transactions", value: "3,421" },
    { title: "Growth", value: "+18.2%" },
  ];

  const rows = [
    { name: "John Doe", email: "john@example.com", status: "Active" },
    { name: "Mary James", email: "mary@example.com", status: "Pending" },
    { name: "David Peter", email: "david@example.com", status: "Blocked" },
  ];

  return (
    <main className="space-y-8 p-6">
      {/* Stats */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">{stat.title}</p>
            <h3 className="mt-2 text-3xl font-bold">{stat.value}</h3>
          </div>
        ))}
      </section>

      {/* Table */}
      <section className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">Recent Users</h3>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.email} className="border-b last:border-none">
                <td className="py-4">{row.name}</td>
                <td>{row.email}</td>
                <td>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
