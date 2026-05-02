"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: any) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative inline-block group text-base font-medium"
    >
      {/* TEXTO */}
      <span
        className={`transition-colors duration-300 ${
          isActive ? "text-red-600 font-semibold" : "text-gray-800"
        }`}
      >
        {children}
      </span>

      {/* UNDERLINE */}
      <span
        className={`
    hidden md:block
    absolute left-0 -bottom-1 h-[2px] bg-red-600
    transition-all duration-300 ease-out
    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
  `}
      />
    </Link>
  );
}
