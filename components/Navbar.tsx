"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import NavLink from "./Navlink";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [empresaDesktopOpen, setEmpresaDesktopOpen] = useState(false);
  const [empresaMobileOpen, setEmpresaMobileOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setEmpresaMobileOpen(false);
  };
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const textColor = isHome && atTop ? "text-white" : "text-black";
  const logoSrc =
    isHome && atTop ? "/assets/logoBranco.png" : "/assets/logoPreto.png";

  const linkClass = (href: string) =>
    `block py-2 transition ${
      pathname === href ? "text-red-600 font-semibold" : "text-white"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY < 10);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scroll down → hide
        setShowNavbar(false);
      } else {
        // scroll up → show
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isHome && atTop
          ? "bg-transparent"
          : "bg-white shadow-md border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center leading-none"
        >
          <Image
            src={logoSrc}
            alt="MATIBOM"
            width={220}
            height={90}
            priority
            className="
    h-16
    md:h-[72px]
    lg:h-20
    w-auto
    object-contain
    transition-opacity
    duration-300
    select-none
  "
          />
        </Link>

        {/* DESKTOP */}
        <nav
          className={`hidden md:flex items-center gap-8 text-[17px] font-medium ${textColor}`}
        >
          <NavLink className={linkClass("/")} href="/">
            Home
          </NavLink>
          <NavLink href="/sobre">Sobre</NavLink>

          {/* DROPDOWN DESKTOP OVERLAY */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setEmpresaDesktopOpen(true)}
            onMouseLeave={() => setEmpresaDesktopOpen(false)}
          >
            {/* BOTÃO */}
            <button
              className={`${textColor} hover:text-red-600 transition flex items-center gap-1`}
            >
              Empresa <span className="text-red-600 text-xs">▾</span>
            </button>

            {/* DROPDOWN */}
            {empresaDesktopOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden">
                  <Link
                    className="block px-4 py-3 text-black hover:bg-red-50 hover:text-red-600"
                    href="/certificacoes"
                  >
                    Certificações
                  </Link>

                  <Link
                    className="block px-4 py-3 text-black hover:bg-red-50 hover:text-red-600"
                    href="/instalacoes"
                  >
                    Instalações
                  </Link>

                  <Link
                    className="block px-4 py-3 text-black hover:bg-red-50 hover:text-red-600"
                    href="/clientes"
                  >
                    Clientes / Parceiros
                  </Link>

                  <Link
                    className="block px-4 py-3 text-black hover:bg-red-50 hover:text-red-600"
                    href="/logistica"
                  >
                    Logística e Distribuição
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink className={linkClass("/servicos")} href="/servicos">
            Serviços
          </NavLink>
          <NavLink className={linkClass("/contactos")} href="/contactos">
            Contactos
          </NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            if (mobileOpen) setEmpresaMobileOpen(false);
          }}
        >
          {/* MENU ICON */}
          <span
            className={`absolute transition-all duration-200 ease-in-out ${
              mobileOpen
                ? "opacity-0 scale-75 rotate-90"
                : "opacity-100 scale-100"
            }`}
          >
            <Menu />
          </span>

          {/* X ICON */}
          <span
            className={`absolute transition-all duration-200 ease-in-out ${
              mobileOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75 rotate-90"
            }`}
          >
            <X />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 space-y-3 text-[17px]">
          <Link className={linkClass("/")} href="/" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link
            className={linkClass("/sobre")}
            href="/sobre"
            onClick={closeMobileMenu}
          >
            Sobre
          </Link>

          {/* MOBILE DROPDOWN */}
          <div>
            <button
              onClick={() => setEmpresaMobileOpen(!empresaMobileOpen)}
              className="flex items-center gap-1 text-white"
            >
              Empresa <span className="text-red-600">▾</span>
            </button>

            <div
              className={`
    mt-3 pl-4  space-y-2 overflow-hidden
    transition-all duration-300 ease-in-out
    ${
      empresaMobileOpen
        ? "max-h-60 opacity-100"
        : "max-h-0 opacity-0 pointer-events-none"
    }
  `}
            >
              <div
                className={`
                mt-3 pl-4 space-y-2 overflow-hidden
                transition-all duration-300 ease-in-out
                ${
                  empresaMobileOpen
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
              >
                <Link
                  className="block text-[17px] text-white hover:text-red-600 transition"
                  href="/certificacoes"
                  onClick={closeMobileMenu}
                >
                  - Certificações
                </Link>

                <Link
                  className="block mt-4 text-[17px] text-white hover:text-red-600 transition"
                  href="/instalacoes"
                  onClick={closeMobileMenu}
                >
                  - Instalações
                </Link>

                <Link
                  className="block mt-4 text-[17px] text-white hover:text-red-600 transition"
                  href="/clientes"
                  onClick={closeMobileMenu}
                >
                  - Clientes
                </Link>

                <Link
                  className="block mt-4 text-[17px] text-white hover:text-red-600 transition"
                  href="/logistica"
                  onClick={closeMobileMenu}
                >
                  - Logística
                </Link>
              </div>
            </div>
          </div>

          <Link
            className={linkClass("/servicos")}
            href="/servicos"
            onClick={closeMobileMenu}
          >
            Serviços
          </Link>
          <Link
            className={linkClass("/contactos")}
            href="/contactos"
            onClick={closeMobileMenu}
          >
            Contactos
          </Link>
        </div>
      )}
    </header>
  );
}
