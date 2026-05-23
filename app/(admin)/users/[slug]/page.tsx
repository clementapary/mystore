import { prisma } from "@/lib/prisma";
import React from "react";

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(slug),
    },
  });
  return (
    <div>
      <div className="p-6">
        <section className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold">User Details</h3>
          <div className="space-y-4">
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Status: active</p>
          </div>
        </section>
      </div>
    </div>
  );
}
