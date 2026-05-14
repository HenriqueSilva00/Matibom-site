"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/assets/instalacoes1.jpg", "/assets/instalacoes2.jpg"];

export default function Sobre() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6500); // mais lento

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* BACKGROUND */}
        <img
          src="/assets/WhiteBackground.jpeg"
          alt="Background MATIBOM"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay subtil */}
        <div className="absolute inset-0 bg-white/40 backdrop-[1px]" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* TITULO */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl md:text-8xl font-black tracking-[0.25em] text-[#8B1E1E]"
          >
            MATIBOM
          </motion.h1>

          {/* SUBTITULO */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 3.0,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-base md:text-2xl tracking-[0.3em] uppercase text-[#A63A3A] font-light"
          >
            Tradição, Qualidade e Confiança desde 1997
          </motion.p>
        </div>
      </section>

      {/* BANNER SEPARADOR */}
      <section className="relative w-full h-[220px] md:h-[400px] overflow-hidden">
        {/* IMAGEM */}
        <img
          src="/assets/bannerSobre.jpeg"
          alt="Banner Sobre MATIBOM"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY SUAVE */}
        <div className="absolute inset-0 bg-[#8B1E1E]/25 backdrop-brightness-90" />

        {/* DEGRADÊ */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
      </section>

      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ESQUERDA - SLIDESHOW */}
          <div className="relative w-full aspect-[5/4] md:aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt="MATIBOM"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{
                  opacity: 0,
                  scale: 1.15,
                  x: 40,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  x: -40,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </AnimatePresence>

            {/* overlay cinematográfico */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          {/* DIREITA - TEXTO */}
          <div className="relative">
            {/* moldura externa decorativa */}
            <div className="absolute -inset-3 border-2 border-[#8B1E1E]/20 rounded-[32px] rotate-1" />
            <div className="absolute -inset-6 border border-[#8B1E1E]/10 rounded-[32px] -rotate-2" />

            {/* conteúdo principal */}
            <div className="relative bg-white rounded-[28px] p-12 shadow-xl">
              {/* título estilizado */}
              <div className="mb-6">
                <span className="text-[#8B1E1E] uppercase tracking-[0.35em] text-sm font-semibold">
                  A nossa essência
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mt-3 leading-tight">
                  Carne com origem, rigor e identidade
                </h2>
              </div>

              {/* texto mais leve, editorial */}
              <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                <p>
                  A MATIBOM nasce de uma tradição profundamente enraizada na
                  região da Guarda, onde a qualidade não é um objetivo — é um
                  padrão obrigatório.
                </p>

                <p>
                  Ao longo dos anos, evoluímos processos, tecnologia e rigor
                  técnico, sem nunca perder a ligação à autenticidade da
                  produção.
                </p>

                <p>
                  Cada etapa é controlada com precisão para garantir
                  consistência, segurança e excelência no produto final.
                </p>
              </div>

              {/* detalhe visual pequeno */}
              <div className="mt-10 flex items-center gap-3 text-[#8B1E1E] font-medium">
                <span className="w-2.5 h-2.5 bg-[#8B1E1E] rounded-full animate-pulse"></span>
                Produção certificada e controlada diariamente
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
