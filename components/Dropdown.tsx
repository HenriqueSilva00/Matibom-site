"use client";

import { useState } from "react";
import Link from "next/link";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* ===== DESKTOP ===== */}
      <div
        className="hidden md:block relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* BOTÃO */}
        <button className="text-[15px] font-medium text-gray-800 hover:text-red-600 transition flex items-center gap-1">
          Empresa
          <span className="text-red-600 text-[10px]">▾</span>
        </button>

        {/* DROPDOWN OVERLAY */}
        {open && (
          <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden z-50">
            <Link
              href="/certificacoes"
              className="block px-4 py-3 text-black hover:bg-red-600 transition"
            >
              Certificações
            </Link>

            <Link
              href="/instalacoes"
              className="block px-4 py-3 text-black hover:bg-red-600 transition"
            >
              Instalações
            </Link>

            <Link
              href="/clientes"
              className="block px-4 py-3 text-black hover:bg-red-600 transition"
            >
              Clientes / Parceiros
            </Link>

            <Link
              href="/logistica"
              className="block px-4 py-3 text-black hover:bg-red-600 transition"
            >
              Logística e Distribuição
            </Link>
          </div>
        )}
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-[15px] font-medium text-black flex items-center gap-1"
        >
          Empresa <span className="text-red-600">▾</span>
        </button>

        {open && (
          <div className="mt-3 pl-4 border-l-2 border-red-600 space-y-2">
            <Link href="/certificacoes">Certificações</Link>
            <Link href="/instalacoes">Instalações</Link>
            <Link href="/clientes">Clientes</Link>
            <Link href="/logistica">Logística</Link>
          </div>
        )}
      </div>
    </div>
  );
}
