import { getUser } from "../../actions";
import EditUserForm from "../edit-user-form";

export default async function EditUserPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const user = await getUser(id);
  return (
    <section className="p-6">
      <div className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-lg font-semibold">Edit User</h1>
        <div className="space-y-4">
          <EditUserForm user={user} />
        </div>
      </div>
    </section>
  );
}
