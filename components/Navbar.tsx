"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import NavLink from "./Navlink";
import { AnimatePresence, motion } from "framer-motion";

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isHome && atTop
          ? "bg-transparent"
          : "bg-white shadow-md border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-0 py-4 md:py-2 flex justify-between items-center">
        {/* =========================
        LOGO
    ========================= */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center leading-none"
        >
          <Image
            src={logoSrc}
            alt="MATIBOM"
            width={320}
            height={140}
            priority
            className="
              h-14
              md:h-[95px]
              lg:h-[100px]
              w-auto
              object-contain
              transition-all
              duration-500
              select-none
            "
          />
        </Link>

        {/* =========================
        DESKTOP NAVBAR
    ========================= */}
        <nav
          className={`hidden md:flex items-center gap-12 text-[17px] ${textColor}`}
        >
          <NavLink className={linkClass("/")} href="/">
            Home
          </NavLink>

          <NavLink href="/sobre">Sobre</NavLink>

          {/* DESKTOP DROPDOWN */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setEmpresaDesktopOpen(true)}
            onMouseLeave={() => setEmpresaDesktopOpen(false)}
          >
            <button
              className={`${textColor} hover:text-red-600 transition flex items-center gap-1`}
            >
              Empresa
              <ChevronDown
                className={`w-5 h-5 text-red-600 transition-transform duration-300 transform-gpu ${
                  empresaDesktopOpen ? "rotate-180" : "rotate-0"
                }`}
                style={{ backfaceVisibility: "hidden" }}
              />
            </button>

            <AnimatePresence>
              {empresaDesktopOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.98,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute top-full left-0 pt-3 w-64 z-50"
                >
                  <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl overflow-hidden">
                    <Link
                      className="block px-5 py-4 text-black hover:bg-red-50 hover:text-red-600 transition"
                      href="/empresa/certificacoes"
                    >
                      Certificações
                    </Link>

                    <Link
                      className="block px-5 py-4 text-black hover:bg-red-50 hover:text-red-600 transition"
                      href="/instalacoes"
                    >
                      Instalações
                    </Link>

                    <Link
                      className="block px-5 py-4 text-black hover:bg-red-50 hover:text-red-600 transition"
                      href="/clientes"
                    >
                      Clientes / Parceiros
                    </Link>

                    <Link
                      className="block px-5 py-4 text-black hover:bg-red-50 hover:text-red-600 transition"
                      href="/logistica"
                    >
                      Logística e Distribuição
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink className={linkClass("/servicos")} href="/servicos">
            Serviços
          </NavLink>

          <NavLink className={linkClass("/contactos")} href="/contactos">
            Contactos
          </NavLink>
        </nav>

        {/* =========================
        MOBILE MENU BUTTON
    ========================= */}
        <button
          className={`md:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
            isHome && atTop ? "text-white" : "text-black"
          }`}
          onClick={() => {
            setMobileOpen(!mobileOpen);

            if (mobileOpen) setEmpresaMobileOpen(false);
          }}
        >
          {/* MENU ICON */}
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform-gpu backface-hidden ${
              mobileOpen
                ? "opacity-0 scale-75 rotate-90 pointer-events-none"
                : "opacity-100 scale-100 rotate-0"
            }`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <Menu />
          </span>

          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out transform-gpu backface-hidden ${
              mobileOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-90 pointer-events-none"
            }`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <X />
          </span>

          {/* CLOSE ICON */}
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-in-out ${
              mobileOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-75 rotate-90 pointer-events-none"
            }`}
          >
            <X />
          </span>
        </button>
      </div>

      {/* =========================
      MOBILE MENU
  ========================= */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 space-y-3 text-[17px]">
          <Link
            className={`${linkClass("/")} !text-black`}
            href="/"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            className={`${linkClass("/sobre")} !text-black`}
            href="/sobre"
            onClick={closeMobileMenu}
          >
            Sobre
          </Link>

          {/* MOBILE DROPDOWN */}
          <div>
            <button
              onClick={() => setEmpresaMobileOpen(!empresaMobileOpen)}
              className="flex items-center gap-1 text-black"
            >
              Empresa <ChevronDown className="w-4 h-4 text-red-600" />
            </button>

            <div
              className={`
            mt-3 pl-4 space-y-2 overflow-hidden
            transition-all duration-300 ease-in-out
            ${
              empresaMobileOpen
                ? "max-h-60 opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
            >
              <Link
                className="block text-[17px] text-black hover:text-red-600 transition"
                href="/empresa/certificacoes"
                onClick={closeMobileMenu}
              >
                - Certificações
              </Link>

              <Link
                className="block mt-4 text-[17px] text-black hover:text-red-600 transition"
                href="/instalacoes"
                onClick={closeMobileMenu}
              >
                - Instalações
              </Link>

              <Link
                className="block mt-4 text-[17px] text-black hover:text-red-600 transition"
                href="/clientes"
                onClick={closeMobileMenu}
              >
                - Clientes
              </Link>

              <Link
                className="block mt-4 text-[17px] text-black hover:text-red-600 transition"
                href="/logistica"
                onClick={closeMobileMenu}
              >
                - Logística
              </Link>
            </div>
          </div>

          <Link
            className={`${linkClass("/servicos")} !text-black`}
            href="/servicos"
            onClick={closeMobileMenu}
          >
            Serviços
          </Link>

          <Link
            className={`${linkClass("/contactos")} !text-black`}
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
