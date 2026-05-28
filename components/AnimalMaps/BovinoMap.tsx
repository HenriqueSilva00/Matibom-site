"use client";

import { useState } from "react";

type Section =
  | "cachaco"
  | "acem"
  | "pa"
  | "peito"
  | "chambao"
  | "mao"
  | "lombo"
  | "vazia"
  | "aba"
  | "alcatra"
  | "cha_de_fora"
  | "rabadilha"
  | "pojadouro"
  | "picanha";

type Props = {
  onSelectPart: (part: string) => void;
};

export default function BovinoMap({ onSelectPart }: Props) {
  const [selected, setSelected] = useState<Section | null>(null);

  const partInfo: Record<
    string,
    { title: string; img: string; description: string }
  > = {
    cachaco: {
      title: "Cachaço",
      img: "/assets/vaca/parts/cachaco.jpeg",
      description: "Zona do pescoço com boa gordura e sabor intenso.",
    },

    acem: {
      title: "Acém",
      img: "/assets/vaca/parts/acem.jpeg",
      description: "Corte versátil ideal para estufados e carne picada.",
    },
  };

  function handleClick(e: React.MouseEvent<SVGGElement>) {
    const target = e.currentTarget;
    const section = target.getAttribute("data-section") as Section | null;

    if (section) {
      setSelected(section);
    }
  }

  return (
    <div className="w-full flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 329.71"
        style={{ pointerEvents: "all" }}
      >
        <g id="Camada_1">{<image href="/assets/vaca/vaca.png" />}</g>
        <g
          id="Cachaço"
          data-section="cachaco"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M89.07,120.39l28.03-103.62,37.49.8,22.94,61.2-58.5,62.35s-2.93-19.05-29.95-20.73Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Acém"
          data-section="acem"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M154.58,17.57l22.94,61.2s37.76-23.1,41.03,18.71l38.45.9s-.89-51.97-45.89-79.79c0,0-43.19,8.02-56.54-1.01Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Pá"
          data-section="Pá"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M164.67,198.88s-14.71-62.33,12.85-120.12c0,0,37.15-22.1,41.03,18.71,0,0,6.31,49.35-2.71,99.61l-51.16,1.8Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Peito"
          data-section="Peito"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M218.55,97.48l38.45.9s7.57,48.44,1.23,86.74l-42.39,11.96s9.08-37.89,2.71-99.61Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Chambão"
          data-section="Chambão"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M434.65,147.06s25.05-.86,48.01,8.27c0,0-7.85,19.2,8.27,48.48l-2.96,33.33-28.09.83-19.81-65.21s-8.02-25.4-31.05-16.95l25.63-8.75c-.03-.21-.05-.42-.08-.63"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
          <polygon
            points="192.26 197.9 196.7 247.7 229.42 241.7 232.51 192.2 215.71 196.91 192.26 197.9"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeMiterlimit="10"
          />
        </g>
        <g
          id="Mão"
          data-section="Mão"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M460.16,237.95l28.09-.83s-7.37,46.52.08,70.52l-7.24-.72-3.52,7.75s5,10.13-2.24,11.97c0,0-27.18,5.9-27.07-2.4,0,0,5.08-5.6,12.07-16.63,0,0,14.71-52.8-.17-69.65Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Lombo"
          data-section="Lombo"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M241.49,17.43s25.93,27.65,124.06,12.24c0,0-.74-8.72,2.77-19.67,0,0-43.82,11.58-126.83,7.43Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Vazia"
          data-section="Vazia"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M211.11,18.58s40.72,17.6,45.89,79.79h25.04l88.9-16.17s-6.32-18.06-5.39-52.53c0,0-87.57,17.69-124.06-12.24l-30.38,1.15Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Aba"
          data-section="Aba"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M258.23,185.12s7-54.29-1.23-86.74h25.04l88.9-16.17s10.21,47.88,38.37,73.58l-42.84,30.99s-13.17,12.47-35.46,3.63l-45.52-6.28s-11.81-3-27.26.99Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Alcatra"
          data-section="Alcatra"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M370.94,82.21s-10.42-40.36-2.62-72.2l32.18-2.76s-24.53,55.38-19.35,105.4c0,0-3.04-6.56-10.21-30.44Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Chã_de_fora"
          data-section="Chã_de_fora"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M482.94,155.31s-21.97-9.59-48.01-8.27c0,0-7.52-99.35-52.55-77.5,0,0,9.72-46.55,18.12-62.3,0,0,5.52,17.97,15.91,30.4,0,0,20.13,45.25,66.53,117.66Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Rabadilha"
          data-section="Rabadilha"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M381.03,112.67s-2.08-23.32,1.49-42.09c0,0,39.23-30.4,52.22,75.85l-25.71,9.38s-19.27-18.17-28-43.14Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Pojadouro"
          data-section="Pojadouro"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M416.41,37.64s19.54,44.44,66.53,117.66c0,0,23.53-51.28,14.37-105.36,0,0-25.08-19.16-43.79-46.4l-14.61-1.54-22.51,35.64Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Picanha"
          data-section="Picanha"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M400.49,7.24s3.71,14.29,15.91,30.4l22.51-35.64-38.42,5.24Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={2}
            style={{ pointerEvents: "all" }}
          />
        </g>
      </svg>

      {/* MODAL SIMPLES */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#1f1f1f] border border-red-600/30 rounded-2xl p-8 w-[92%] max-w-2xl shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-red-500 text-2xl transition"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* title */}
            <h2 className="text-3xl font-bold mb-5 text-red-500 tracking-wide capitalize">
              {partInfo[selected]?.title ?? selected}
            </h2>

            {/* content */}
            <p className="text-gray-300 leading-relaxed text-base mb-6">
              {partInfo[selected]?.description ?? "Sem descrição disponível."}
            </p>

            {/* image dinâmica */}
            <img
              src={partInfo[selected]?.img}
              alt={selected}
              className="w-full h-[260px] object-cover rounded-xl border border-red-500/20 mb-6"
            />

            {/* fallback caso não exista imagem */}
            {!partInfo[selected]?.img && (
              <div className="w-full h-[260px] rounded-xl border border-red-500/20 bg-black/30 flex items-center justify-center text-gray-500">
                Sem imagem definida
              </div>
            )}

            {/* footer button */}
            <button
              className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition w-full"
              onClick={() => setSelected(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
