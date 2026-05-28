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
        <div className="mt-20 text-center max-w-3xl px-6">
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
            Seleção de Cortes
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Explore as diferentes categorias de desmancha disponíveis na
            MATIBOM. Selecione um animal para visualizar as respetivas secções e
            cortes disponíveis.
          </p>
        </div>
        {/* BOTÕES */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-15">
          <button
            onClick={() => {
              setSelectedAnimal("bovino");
              setMode("preview");
            }}
            className={`
                px-14
                py-4
                rounded-full
                bg-red-700
                border border-red-500
                text-white
                uppercase
                tracking-[0.18em]
                text-sm
                font-semibold
                shadow-lg
                shadow-red-900/30
                transition-all
                duration-300
                hover:bg-red-600
                hover:border-red-400
                hover:scale-105
                hover:shadow-red-500/40
                active:scale-95
                backdrop-blur-md
                ${
                  selectedAnimal === "bovino"
                    ? "bg-red-400 text-white border-white shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
                    : ""
                }
            `}
          >
            Bovino
          </button>

          <button
            onClick={() => setSelectedAnimal("suino")}
            className={`
                px-14
                py-4
                rounded-full
                bg-red-700
                border border-red-500
                text-white
                uppercase
                tracking-[0.18em]
                text-sm
                font-semibold
                shadow-lg
                shadow-red-900/30
                transition-all
                duration-300
                hover:bg-red-600
                hover:border-red-400
                hover:scale-105
                hover:shadow-red-500/40
                active:scale-95
                backdrop-blur-md
                ${
                  selectedAnimal === "suino"
                    ? "bg-red-500 text-white border-white shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
                    : ""
                }
            `}
          >
            Suíno
          </button>

          <button
            onClick={() => setSelectedAnimal("caprino")}
            className={`
                px-14
                py-4
                rounded-full
                bg-red-700
                border border-red-500
                text-white
                uppercase
                tracking-[0.18em]
                text-sm
                font-semibold
                shadow-lg
                shadow-red-900/30
                transition-all
                duration-300
                hover:bg-red-600
                hover:border-red-400
                hover:scale-105
                hover:shadow-red-500/40
                active:scale-95
                backdrop-blur-md
                ${
                  selectedAnimal === "caprino"
                    ? "bg-red-500 text-white border-white shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-105"
                    : ""
                }
            `}
          >
            Caprino
          </button>
        </div>

        {/* IMAGEM */}
        <div className="relative flex items-center justify-center w-full flex-1">
          {/* TEMPLATE */}
          {!selectedAnimal && (
            <img
              src="/assets/porcoTemplate.png"
              className="w-[900px] max-w-[90vw] opacity-50"
            />
          )}

          {/* SVG OVERLAY */}
          {selectedAnimal && (
            <div className="absolute w-[950px] max-w-[90vw] mt-15 md:mt-40 lg:mt-60">
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
