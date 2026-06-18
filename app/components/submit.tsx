import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-lg bg-sky-600 px-6 py-2 text-lg font-semibold text-zinc-100 transition-colors hover:bg-sky-400 disabled:bg-zinc-600"
      disabled={pending}
    >
      Save Change
    </button>
  );
}
