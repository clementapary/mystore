import Link from "next/link";
import React from "react";

export default function Sidebar() {
  const sideLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/users" },
    { name: "Categories", href: "/categories" },
    { name: "Products", href: "/products" },
    { name: "Settings", href: "/settings" },
  ];
  return (
    <aside className="hidden w-64 flex-col gap-6 bg-white p-6 shadow-lg md:flex">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <nav className="flex flex-col gap-3 text-sm font-medium">
        {sideLinks.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="rounded-xl px-4 py-2 text-left text-lg font-semibold transition hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
