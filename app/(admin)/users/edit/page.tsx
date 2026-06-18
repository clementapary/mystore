// app/users/[id]/edit/page.tsx

import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EditUserPage({ params }: Props) {
  const { slug } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id: Number(slug),
    },
  });

  return (
    <section className="p-6">
      <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-lg font-semibold">Edit User #{slug}</h1>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              defaultValue={user?.name ?? ""}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email ?? ""}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
}
