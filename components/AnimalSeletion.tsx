"use client";

import { useState } from "react";
import BovinoMap from "./AnimalMaps/BovinoMap";
import SuinoMap from "./AnimalMaps/SuinoMap";
import CaprinoMap from "./AnimalMaps/CaprinoMap";

export default function AnimalSeletion() {
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType | null>(null);
  const [mode, setMode] = useState<"preview" | "interactive">("preview");
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  type AnimalType = "bovino" | "suino" | "caprino";

  return (
    <section
      className="
    relative
    w-full
    min-h-[600px]
    md:min-h-[900px]
    lg:min-h-[1200px]
    bg-cover
    bg-center
    bg-no-repeat
    overflow-hidden
    pb-20
  "
      style={{
        backgroundImage: "url('/assets/GrafiteBackground.jpeg')",
      }}
    >
      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen px-6">
        <div className="mt-16 md:mt-20 text-center max-w-3xl px-6 mx-auto">
          {/* TÍTULO */}
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-wide leading-tight">
            <span className="block md:inline animate-fade-in-up">Seleção</span>

            <span className="block md:inline text-red-400 md:ml-3 mt-1 md:mt-0 animate-fade-in-up delay-100">
              de Cortes
            </span>
          </h2>

          {/* SEPARADOR VISUAL */}
          <div className="flex items-center justify-center mt-5 md:mt-6">
            <div className="h-[2px] w-10 bg-red-500/60 rounded-full" />
            <div className="mx-3 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <div className="h-[2px] w-10 bg-red-500/60 rounded-full" />
          </div>

          {/* TEXTO */}
          <p className="mt-6 text-white/80 text-sm md:text-lg leading-relaxed">
            Explore as diferentes categorias de desmancha disponíveis na
            MATIBOM. Selecione um animal para visualizar as respetivas secções e
            cortes disponíveis.
          </p>
        </div>
        {/* BOTÕES */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-6 mt-10 sm:mt-15">
          <button
            onClick={() => {
              setSelectedAnimal("bovino");
              setMode("preview");
            }}
            className={`
      px-4 sm:px-14
      py-2.5 sm:py-4
      rounded-full
      bg-red-700
      border border-red-500
      text-white
      uppercase
      tracking-[0.08em] sm:tracking-[0.18em]
      text-xs sm:text-sm
      font-semibold
      shadow-lg shadow-red-900/30
      transition-all duration-300
      hover:bg-red-600
      hover:border-red-400
      hover:scale-105
      active:scale-95
      ${
        selectedAnimal === "bovino"
          ? "bg-red-400 border-white shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
          : ""
      }
    `}
          >
            Bovino
          </button>

          <button
            onClick={() => setSelectedAnimal("suino")}
            className={`
      px-4 sm:px-14
      py-2.5 sm:py-4
      rounded-full
      bg-red-700
      border border-red-500
      text-white
      uppercase
      tracking-[0.08em] sm:tracking-[0.18em]
      text-xs sm:text-sm
      font-semibold
      shadow-lg shadow-red-900/30
      transition-all duration-300
      hover:bg-red-600
      hover:border-red-400
      hover:scale-105
      active:scale-95
      ${
        selectedAnimal === "suino"
          ? "bg-red-500 border-white shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
          : ""
      }
    `}
          >
            Suíno
          </button>

          <button
            onClick={() => setSelectedAnimal("caprino")}
            className={`
      px-4 sm:px-14
      py-2.5 sm:py-4
      rounded-full
      bg-red-700
      border border-red-500
      text-white
      uppercase
      tracking-[0.08em] sm:tracking-[0.18em]
      text-xs sm:text-sm
      font-semibold
      shadow-lg shadow-red-900/30
      transition-all duration-300
      hover:bg-red-600
      hover:border-red-400
      hover:scale-105
      active:scale-95
      ${
        selectedAnimal === "caprino"
          ? "bg-red-500 border-white shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
          : ""
      }
    `}
          >
            Caprino
          </button>
        </div>

        {/* IMAGEM */}
        <div className="relative flex items-center justify-center w-full flex-1 pt-6 md:pt-70">
          {/* TEMPLATE */}
          {!selectedAnimal && (
            <img
              src="/assets/porcoTemplate.png"
              className="w-[900px] max-w-[90vw] opacity-50"
            />
          )}

          {/* SVG OVERLAY */}
          {selectedAnimal && (
            <div className="absolute w-[950px] max-w-[90vw]">
              {selectedAnimal === "bovino" && (
                <BovinoMap onSelectPart={setSelectedPart} />
              )}

              {selectedAnimal === "suino" && (
                <SuinoMap onSelectPart={setSelectedPart} />
              )}

              {selectedAnimal === "caprino" && (
                <CaprinoMap onSelectPart={setSelectedPart} />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
