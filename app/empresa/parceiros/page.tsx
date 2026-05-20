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
    <section className="w-full pt-32 md:pt-40 pb-24 px-6 bg-white relative overflow-hidden">
      {/* subtle red glow background */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-100 blur-[120px] opacity-40" />

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100 mb-8">
          Parcerias • Confiança • Crescimento
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Clientes & <span className="text-red-600">Parceiros</span>
        </h2>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          Trabalhamos com parceiros de confiança que partilham os mesmos valores
          de qualidade, segurança e excelência. A nossa rede de clientes é
          fundamental para o crescimento e consolidação da MATIBOM no mercado.
        </p>

        <div className="w-24 h-[3px] bg-gradient-to-r from-red-600 to-red-300 mx-auto mt-6 rounded-full" />
      </div>

      {/* CAROUSEL FULL WIDTH */}
      <div className="relative w-full max-w-none flex items-center justify-center">
        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 z-10 w-14 h-14 rounded-full bg-white border border-red-100 shadow flex items-center justify-center hover:bg-red-50 hover:scale-105 transition"
        >
          <ChevronLeft size={28} className="text-red-600" />
        </button>

        {/* LOGOS */}
        <div className="overflow-hidden w-full px-16 md:px-10">
          <motion.div
            animate={{
              x: `-${index * (100 / (window.innerWidth < 768 ? 1 : 4))}%`,
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
                whileHover={{ scale: 1.04 }}
                className="
          w-full md:w-1/4
          flex-shrink-0
          px-4
        "
              >
                <div
                  className="
            flex items-center justify-center
            bg-white rounded-2xl border border-gray-100
            shadow-sm hover:shadow-md transition
            relative overflow-hidden
            h-[200px] md:h-[180px]
          "
                >
                  {/* red accent line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-transparent opacity-60" />

                  <Image
                    src={logo}
                    alt={`Cliente ${i}`}
                    width={260}
                    height={180}
                    className="object-contain h-32 md:h-28 w-auto"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-2 md:right-6 z-10 w-14 h-14 rounded-full bg-white border border-red-100 shadow flex items-center justify-center hover:bg-red-50 hover:scale-105 transition"
        >
          <ChevronRight size={28} className="text-red-600" />
        </button>
      </div>
    </section>
  );
}
