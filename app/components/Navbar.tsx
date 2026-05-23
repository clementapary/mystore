import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-xl border border-gray-300 px-4 py-2 outline-none"
        />
        <div className="h-10 w-10 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
