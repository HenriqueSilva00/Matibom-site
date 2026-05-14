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
  const animals = {
    bovino: "/assets/vaca/vaca.png",
    suino: "/assets/porco/porco.png",
    caprino: "/assets/cabra/cabra.png",
  };

  const partInfo: Record<
    string,
    { title: string; img: string; description: string }
  > = {
    cabeca: {
      title: "Cabeça",
      img: "/assets/vaca/parts/cabecaVaca.jpeg",
      description:
        "Este corte é amplamente utilizado na indústria alimentar devido à sua textura, rendimento e versatilidade em diferentes métodos de confeção. No contexto da MATIBOM, representa uma das secções mais valorizadas no processamento de carne",
    },
    rabo: {
      title: "Rabo",
      img: "/assets/vaca/parts/raboVaca.jpeg",
      description: "Utilizado em pratos tradicionais com longa cozedura.",
    },
  };

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

          {/* IMAGEM BASE */}
          {selectedAnimal && (
            <img
              src={animals[selectedAnimal]}
              className="w-[900px] max-w-[90vw] mt-20 select-none"
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
        {selectedPart && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedPart(null)}
          >
            <div
              className="bg-[#1f1f1f] border border-red-600/30 rounded-2xl p-8 w-[92%] max-w-2xl shadow-2xl relative text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close */}
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-red-500 text-2xl transition"
                onClick={() => setSelectedPart(null)}
              >
                ✕
              </button>

              {/* title */}
              <h2 className="text-3xl font-bold mb-5 text-red-500 tracking-wide">
                {partInfo[selectedPart]?.title}
              </h2>

              {/* image */}
              <img
                src={partInfo[selectedPart]?.img}
                className="w-full h-[260px] object-cover rounded-xl mb-6 border border-red-500/20"
              />

              {/* description */}
              <p className="text-gray-300 leading-relaxed text-base">
                {partInfo[selectedPart]?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
