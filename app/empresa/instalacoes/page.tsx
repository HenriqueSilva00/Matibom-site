"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export default function InstalacoesPage() {
  const images = [
    "/assets/instalacoes/instalações1.jpeg",
    "/assets/instalacoes/instalações2.jpeg",
    "/assets/instalacoes/instalações3.jpeg",
    "/assets/instalacoes/instalações4.jpeg",
    "/assets/instalacoes/instalações5.jpeg",
    "/assets/instalacoes/instalações6.jpeg",
  ];

  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen bg-[#f8f8f8] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 px-6 text-center overflow-hidden bg-white">
        <div className="relative max-w-6xl mx-auto">
          {/* badge */}
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-red-600 text-xs md:text-sm font-medium border border-gray-200 mb-6 tracking-wide">
            Infraestruturas • Tecnologia • Qualidade
          </span>

          {/* title (30px) */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Instalações
          </h2>

          {/* divider */}
          <div className="flex items-center justify-center mt-5 md:mt-6">
            <div className="h-[2px] w-12 bg-gray-300 rounded-full" />
            <div className="mx-3 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <div className="h-[2px] w-12 bg-gray-300 rounded-full" />
          </div>

          {/* text (16px) */}
          <p className="mt-6 text-[16px] text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Conheça as instalações da MATIBOM, equipadas com tecnologia moderna,
            rigorosos padrões de higiene e uma infraestrutura preparada para
            garantir qualidade, segurança e eficiência em todos os processos de
            abate, desmancha, conservação, transformação e distribuição
            alimentar.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() =>
                galleryRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-medium transition shadow-md"
            >
              Explorar instalações
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        ref={galleryRef}
        className="w-full bg-black flex justify-center pb-0"
      >
        <div
          className="
      relative
      w-full
      lg:w-[75%]
      h-[60vh]
      md:h-[70vh]
      lg:h-[80vh]
      rounded-none md:rounded-[32px]
      overflow-hidden
      shadow-2xl
      bg-black
      group
    "
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          {/* IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={images[index]}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt={`Instalações MATIBOM ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

          {/* IMAGE COUNTER */}
          <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
            {index + 1} / {images.length}
          </div>

          {/* FULLSCREEN BUTTON */}
          <button
            onClick={() => setFullscreen(true)}
            className="
              absolute
              top-6
              right-6
              z-20
              w-12
              h-12
              rounded-full
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              hover:bg-white/20
              transition
            "
          >
            <Expand size={20} />
          </button>

          {/* LEFT */}
          <button
            onClick={prevImage}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              z-20
              w-14
              h-14
              rounded-full
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              hover:bg-white/20
              transition
              opacity-0
              group-hover:opacity-100
            "
          >
            <ChevronLeft size={30} />
          </button>

          {/* RIGHT */}
          <button
            onClick={nextImage}
            className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              z-20
              w-14
              h-14
              rounded-full
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              hover:bg-white/20
              transition
              opacity-0
              group-hover:opacity-100
            "
          >
            <ChevronRight size={30} />
          </button>

          {/* THUMBNAILS */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3 px-4 overflow-x-auto max-w-[90%]">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  relative
                  w-16
                  h-16
                  rounded-xl
                  overflow-hidden
                  border-2
                  transition-all
                  flex-shrink-0
                  ${
                    index === i
                      ? "border-white scale-105"
                      : "border-white/20 opacity-70 hover:opacity-100"
                  }
                `}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            {/* CLOSE */}
            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
            >
              <X size={24} />
            </button>

            {/* PREV */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
            >
              <ChevronLeft size={30} />
            </button>

            {/* NEXT */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
            >
              <ChevronRight size={30} />
            </button>

            {/* IMAGE */}
            <motion.div
              key={images[index]}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative w-[92vw] h-[85vh]"
            >
              <Image
                src={images[index]}
                alt={`Instalação ${index + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
