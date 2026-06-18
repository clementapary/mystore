import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function UserPage() {
  const users = await prisma.user.findMany();
  return (
    <div className="p-6">
      <section className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold">Recent Users</h3>
        <Link
          href="/users/create"
          className="self-end text-indigo-600 hover:text-indigo-800"
        >
          &larr; Create Users
        </Link>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((row) => (
              <tr key={row.email} className="border-b last:border-none">
                <td className="py-4">{row.name}</td>
                <td>{row.email}</td>
                <td className="space-x-3">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    <Link href={`/users/${row.id}`}>View Details</Link>
                  </span>
                  <span className="rounded-full bg-sky-400 px-3 py-1 text-xs font-medium text-zinc-100">
                    <Link href={`/users/edit/${row.id}`}>Edit</Link>
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
