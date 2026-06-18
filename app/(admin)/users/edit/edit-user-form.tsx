"use client";
import { UserSchemaT } from "@/lib/validationSchema";
import { useActionState, useEffect } from "react";
import { updateUser } from "../actions";
import Submit from "@/app/components/submit";
import toast from "react-hot-toast/headless";

export default function EditUserForm({ user }: { user: UserSchemaT }) {
  const [state, formAction] = useActionState(updateUser, null);

  useEffect(() => {
    toast.success("hey");
  }, []);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <input type="hidden" name="id" defaultValue={user.id} />
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          name="name"
          defaultValue={user.name}
        />
        {state?.errors && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
          name="email"
          defaultValue={user.email}
        />
        {state?.errors && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
        )}
      </div>
      <Submit />
    </form>
  );
}
