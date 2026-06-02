"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientesParceiros() {
  const logos = [
    "/assets/clientes/almeidaLOGO.jpeg",
    "/assets/clientes/criartecoaLOGO.jpeg",
    "/assets/clientes/guardaLOGO.jpeg",
    "/assets/clientes/pinhelLOGO.png",
    "/assets/clientes/sabugalLOGO.png",
    "/assets/clientes/talhoCaldasRainhaLOGO.png",
    "/assets/clientes/talhoCastroLOGO.png",
    "/assets/clientes/TalhoNacionalLOGO.jpeg",
  ];

  const duplicatedLogos = [...logos, ...logos];

  const [index, setIndex] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 5000);
  };

  const [itemsPerView, setItemsPerView] = useState(4);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const update = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 4);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  // subtle auto motion (premium feel)
  useEffect(() => {
    startAutoPlay();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const next = () => {
    setIndex((prev) => prev + 1);
    startAutoPlay();
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
    startAutoPlay();
  };
  return (
    <section className="w-full pt-28 md:pt-36 pb-24 px-6 bg-white relative overflow-hidden">
      {/* subtle red glow background */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-100 blur-[120px] opacity-40" />

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* badge */}
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100 mb-8">
          Parcerias • Confiança • Crescimento
        </span>

        {/* title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Clientes & <span className="text-red-600">Parceiros</span>
        </h2>

        {/* divider (igual Instalações) */}
        <div className="flex items-center justify-center mt-5 md:mt-6">
          <div className="h-[2px] w-12 bg-gray-300 rounded-full" />
          <div className="mx-3 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <div className="h-[2px] w-12 bg-gray-300 rounded-full" />
        </div>

        {/* text */}
        <p className="mt-6 text-[16px] text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Trabalhamos com parceiros de confiança que partilham os mesmos valores
          de qualidade, segurança e excelência. A nossa rede de clientes é
          fundamental para o crescimento e consolidação da MATIBOM no mercado.
        </p>
      </div>

      {/* CAROUSEL FULL WIDTH */}
      <div className="relative w-full max-w-none flex items-center justify-center mt-16 md:mt-24">
        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-10 z-10 w-14 h-14 rounded-full bg-white border border-red-100 shadow flex items-center justify-center hover:bg-red-50 hover:scale-105 transition"
        >
          <ChevronLeft size={28} className="text-red-600" />
        </button>

        {/* LOGOS */}
        <div className="overflow-hidden w-full px-6 md:px-0">
          <motion.div
            animate={{
              x: `-${index * (100 / itemsPerView)}%`,
            }}
            transition={{
              type: "tween",
              ease: [0.22, 1, 0.36, 1],
              duration: 0.8,
            }}
            className="flex"
          >
            {duplicatedLogos.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 px-6"
              >
                <div
                  className="
              flex items-center justify-center
              bg-white rounded-2xl border border-gray-100
              shadow-sm hover:shadow-md transition
              relative overflow-hidden
              h-[240px] md:h-[260px]
            "
                >
                  {/* red accent line */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-transparent opacity-70" />

                  <Image
                    src={logo}
                    alt={`Cliente ${i}`}
                    width={320}
                    height={220}
                    className="object-contain h-40 md:h-44 w-auto"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-2 md:right-10 z-10 w-14 h-14 rounded-full bg-white border border-red-100 shadow flex items-center justify-center hover:bg-red-50 hover:scale-105 transition"
        >
          <ChevronRight size={28} className="text-red-600" />
        </button>
      </div>
    </section>
  );
}
