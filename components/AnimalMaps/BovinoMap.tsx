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
      description:
        "Corte do pescoço com boa infiltração de gordura, ideal para cozidos, estufados e pratos de sabor intenso.",
    },

    acem: {
      title: "Acém",
      img: "/assets/vaca/parts/acem.jpeg",
      description:
        "Corte versátil e económico, perfeito para estufados, guisados e carne picada com excelente sabor.",
    },

    pa: {
      title: "Pá",
      img: "/assets/vaca/parts/pa.jpeg",
      description:
        "Carne macia e equilibrada, muito usada em assados, estufados e preparações de forno.",
    },

    peito: {
      title: "Peito",
      img: "/assets/vaca/parts/peito.jpeg",
      description:
        "Corte mais fibroso e suculento, ideal para cozeduras lentas, caldos e fumados.",
    },

    chambao: {
      title: "Chambão",
      img: "/assets/vaca/parts/chambao.jpeg",
      description:
        "Carne com bastante colagénio, perfeita para sopas, cozidos e pratos de longa cozedura.",
    },

    mao: {
      title: "Mão",
      img: "/assets/vaca/parts/mao.jpeg",
      description:
        "Corte rico em gelatina natural, usado em pratos tradicionais, caldos e guisados.",
    },

    lombo: {
      title: "Lombo",
      img: "/assets/vaca/parts/lombo.jpeg",
      description:
        "O corte mais nobre e macio da carne, ideal para grelhados rápidos e pratos premium.",
    },

    vazia: {
      title: "Vazia",
      img: "/assets/vaca/parts/vazia.jpeg",
      description:
        "Carne suculenta e macia, muito usada em grelhados, bifes e pratos rápidos.",
    },

    aba: {
      title: "Aba",
      img: "/assets/vaca/parts/aba.jpeg",
      description:
        "Corte saboroso com textura firme, excelente para grelha e estufados.",
    },

    alcatra: {
      title: "Alcatra",
      img: "/assets/vaca/parts/alcatra.jpeg",
      description:
        "Corte muito equilibrado, tenro e versátil, ideal para bifes, assados e grelhados.",
    },

    cha_de_fora: {
      title: "Chã de Fora",
      img: "/assets/vaca/parts/chadefora.jpeg",
      description:
        "Carne magra e consistente, indicada para assados e cozinhados lentos.",
    },

    rabadilha: {
      title: "Rabadilha",
      img: "/assets/vaca/parts/rabadilha.jpeg",
      description:
        "Corte macio e saboroso, muito usado em bifes e assados de forno.",
    },

    pojadouro: {
      title: "Pojadouro",
      img: "/assets/vaca/parts/pojadouro.jpeg",
      description:
        "Carne suculenta e ligeiramente fibrosa, ótima para grelha e estufados.",
    },

    picanha: {
      title: "Picanha",
      img: "/assets/vaca/parts/picanha.jpeg",
      description:
        "Um dos cortes mais apreciados, com capa de gordura que garante sabor e suculência na grelha.",
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
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M131.56,82.21v-2.04h4.04v2.04h-4.04ZM131.78,70.41v-2.17l3.61-1.29v2.21l-3.61,1.25ZM135.39,82.21v-15.25h2.23v15.25h-2.23ZM137.41,82.21v-2.04h3.63v2.04h-3.63Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="white"
            strokeWidth={1}
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
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M201.23,57.91v-2.45c2.36-1.3,4.12-2.66,5.28-4.07,1.16-1.41,1.75-2.86,1.75-4.36,0-.87-.21-1.53-.64-1.97-.43-.44-1.08-.66-1.96-.66-.58,0-1.19.17-1.82.5-.63.34-1.17.78-1.62,1.34l-1.48-1.47c.49-.71,1.2-1.28,2.11-1.71.91-.43,1.86-.64,2.86-.64,1.61,0,2.82.38,3.61,1.14.8.76,1.2,1.91,1.2,3.45s-.49,3.02-1.47,4.43c-.98,1.41-2.47,2.77-4.46,4.08v2.36h-3.35ZM201.88,57.91v-2.04h9.28v2.04h-9.28Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>

        <g
          id="Pá"
          data-section="pa"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M215.84,197.09c9.02-50.26,2.71-99.61,2.71-99.61-3.88-40.81-41.03-18.71-41.03-18.71-27.56,57.79-12.85,120.12-12.85,120.12,0,0,6.73,13.9,28.53,9.63l22.63-11.43"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M187.88,140.3l-.26-1.4c1.13-.15,2.05-.37,2.76-.67.71-.29,1.22-.65,1.56-1.07s.5-.89.5-1.4c0-.62-.2-1.11-.61-1.46-.4-.35-.98-.52-1.73-.52-.54,0-1.12.14-1.73.41-.61.27-1.19.68-1.73,1.22l-1.48-1.47c.66-.74,1.42-1.29,2.29-1.63.87-.34,1.83-.51,2.9-.51,1.39,0,2.46.3,3.22.89.76.59,1.14,1.43,1.14,2.53,0,.92-.29,1.71-.88,2.39-.59.68-1.35,1.14-2.3,1.39v1.29h-3.63ZM189.32,147.5c-.79,0-1.51-.05-2.16-.14s-1.24-.22-1.75-.38l.27-2.05c.44.12.93.25,1.48.39.55.14,1.24.2,2.08.2,1.12,0,1.98-.22,2.6-.67.62-.44.92-1.07.92-1.87,0-.57-.18-1.06-.53-1.46-.35-.4-.87-.71-1.54-.91-.67-.21-1.49-.31-2.46-.31h-.34l-.26-1.4,3.29.26c1.22.09,2.21.49,2.96,1.19.76.7,1.14,1.65,1.14,2.85,0,1.36-.5,2.42-1.49,3.17-.99.75-2.39,1.13-4.21,1.13Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>

        <g
          id="Peito"
          data-section="peito"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M218.55,97.48l38.45.9s7.57,48.44,1.23,86.74l-42.39,11.96s9.08-37.89,2.71-99.61Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M234.86,151.89l2.15-10.98h2.32l-2.17,10.98h-2.3ZM234.86,151.89l1.5-2h6.27v2h-7.78ZM242.42,155.31v-15.25h2.23v15.25h-2.23ZM244.44,151.89v-2h1.65v2h-1.65Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>

        <g
          id="Chambão"
          data-section="chambao"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M434.65,147.06s25.05-.86,48.01,8.27c0,0-7.85,19.2,8.27,48.48l-2.96,33.33-28.09.83-19.81-65.21s-8.02-25.4-31.05-16.95l25.63-8.75c-.03-.21-.05-.42-.08-.63"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M193.88,208.17l1.5,33.37s3.11,13.04,6.67,17.78l27.26-7.11v-12s.15-6.11,2.52-6.46c0,0,2.37-1.84,1.04-8.06l-.19-33.35-16.83,4.75-21.96,11.08Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            stroke-miterlimit="10"
          />
          <path
            d="M213.38,236.33c-1.65,0-2.92-.39-3.82-1.18s-1.35-1.89-1.35-3.31h2.3c0,.79.25,1.41.75,1.85.5.44,1.22.66,2.15.66s1.63-.28,2.13-.83c.5-.55.75-1.33.75-2.33s-.27-1.74-.82-2.28c-.54-.54-1.32-.81-2.32-.81s-1.94.24-2.81.71l.19-1.83c.57-.32,1.13-.54,1.69-.65.56-.11,1.12-.17,1.69-.17,1.48,0,2.62.44,3.43,1.31.81.87,1.21,2.11,1.21,3.72,0,1.09-.2,2.02-.61,2.78-.4.77-.99,1.35-1.76,1.75-.77.4-1.7.6-2.79.6ZM209.13,228.81l.21-7.95h2.3l-.21,6.62-1.1,1.33h-1.2ZM210.38,222.86l-.19-2h7.39v2h-7.2Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M468.45,200.34c-1.65,0-2.92-.39-3.82-1.18s-1.35-1.89-1.35-3.31h2.3c0,.79.25,1.41.75,1.85s1.22.66,2.15.66,1.63-.28,2.13-.83c.5-.55.75-1.33.75-2.33s-.27-1.74-.82-2.28-1.32-.81-2.32-.81-1.94.24-2.81.71l.19-1.83c.57-.32,1.13-.54,1.69-.65s1.12-.17,1.69-.17c1.48,0,2.62.44,3.43,1.31.81.87,1.21,2.11,1.21,3.72,0,1.09-.2,2.02-.61,2.78-.41.77-.99,1.35-1.76,1.75-.77.4-1.7.6-2.79.6ZM464.2,192.82l.21-7.95h2.3l-.21,6.62-1.1,1.33h-1.2ZM465.44,186.87l-.19-2h7.39v2h-7.2Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Mão"
          data-section="mao"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M460.16,237.95l28.09-.83s-7.37,46.52.08,70.52l-7.24-.72-3.52,7.75s5,10.13-2.24,11.97c0,0-27.18,5.9-27.07-2.4,0,0,5.08-5.6,12.07-16.63,0,0,14.71-52.8-.17-69.65Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M202.04,259.31l-1.33,16s-6.52,12.44-8,24c0,0-6.07,5.04-6.22,12,0,0,20.89,1.33,24.59,5.63,0,0,8.3-5.33,7.11-17.19l2.5-38.22v-7.09l-18.65,4.87Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M202.11,292.18v-.95c0-2.91.74-5.13,2.22-6.65,1.48-1.52,3.73-2.35,6.76-2.5l.21,2.04c-4.54.19-6.81,2.23-6.81,6.12v1.22l-2.38.71ZM207.27,297.62c-1.77,0-3.07-.44-3.9-1.32-.83-.88-1.25-2.25-1.25-4.11l1.78-1.96h.79c.21-.79.64-1.41,1.28-1.84.64-.43,1.42-.65,2.35-.65,1.33,0,2.36.41,3.08,1.24.72.82,1.08,1.99,1.08,3.49,0,1.62-.46,2.88-1.38,3.79-.92.91-2.2,1.36-3.84,1.36ZM207.34,295.64c.91,0,1.62-.28,2.13-.84.51-.56.76-1.34.76-2.34,0-.88-.23-1.56-.7-2.04-.47-.48-1.14-.71-2.01-.71-1,0-1.76.26-2.3.77s-.81,1.25-.81,2.19.26,1.66.77,2.18c.52.52,1.24.78,2.16.78Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M470.67,276.71v-.95c0-2.91.74-5.13,2.22-6.65,1.48-1.52,3.73-2.35,6.76-2.5l.21,2.04c-4.54.19-6.81,2.23-6.81,6.12v1.22l-2.38.71ZM475.83,282.15c-1.77,0-3.07-.44-3.9-1.32-.83-.88-1.25-2.25-1.25-4.11l1.78-1.96h.79c.21-.79.64-1.41,1.28-1.84.64-.43,1.42-.65,2.35-.65,1.33,0,2.36.41,3.08,1.24s1.08,1.99,1.08,3.49c0,1.62-.46,2.88-1.38,3.79-.92.91-2.2,1.36-3.84,1.36ZM475.91,280.17c.91,0,1.62-.28,2.13-.84.51-.56.76-1.34.76-2.34,0-.88-.23-1.56-.7-2.04-.47-.48-1.14-.71-2.01-.71-1,0-1.76.26-2.3.77s-.81,1.25-.81,2.19.26,1.66.77,2.18,1.24.78,2.16.78Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Lombo"
          data-section="lombo"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M241.49,17.43s25.93,27.65,124.06,12.24c0,0-.74-8.72,2.77-19.67,0,0-43.82,11.58-126.83,7.43Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M344.29,18.91v-1.48h8.14l-1.11,1.48h-7.03ZM344.29,21.32v-3.66h1.67v3.66h-1.67ZM346.83,28.52l3.81-11.09h1.79l-3.81,11.09h-1.79Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Vazia"
          data-section="vazia"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M211.11,18.58s40.72,17.6,45.89,79.79h25.04l88.9-16.17s-6.32-18.06-5.39-52.53c0,0-87.57,17.69-124.06-12.24l-30.38,1.15Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M299.5,76.18c-1.65,0-2.93-.38-3.84-1.15-.91-.77-1.36-1.85-1.36-3.25,0-1.28.45-2.27,1.36-2.97s2.19-1.05,3.84-1.05,2.93.35,3.84,1.05,1.36,1.69,1.36,2.97c0,1.4-.45,2.48-1.36,3.25-.91.77-2.19,1.15-3.84,1.15ZM299.5,67.95c-1.51,0-2.68-.31-3.52-.94-.83-.63-1.25-1.51-1.25-2.65,0-1.22.42-2.18,1.25-2.85s2.01-1.02,3.52-1.02,2.69.34,3.52,1.02c.83.68,1.25,1.63,1.25,2.85,0,1.14-.42,2.02-1.25,2.65-.83.63-2.01.94-3.52.94ZM299.5,74.2c.94,0,1.66-.22,2.17-.67.51-.44.77-1.07.77-1.87,0-.86-.26-1.53-.77-2.01-.51-.48-1.24-.72-2.17-.72s-1.66.24-2.18.72c-.51.48-.77,1.15-.77,2.01,0,.8.26,1.43.77,1.87.51.44,1.24.67,2.18.67ZM299.5,66.87c.8,0,1.42-.18,1.86-.55.44-.37.66-.88.66-1.53,0-.74-.22-1.32-.66-1.72-.44-.4-1.06-.6-1.86-.6s-1.42.2-1.86.6c-.44.4-.66.97-.66,1.72,0,.65.22,1.16.66,1.53.44.37,1.06.55,1.86.55ZM297.72,68.38v-1.1h3.59v1.1h-3.59Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Aba"
          data-section="aba"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M258.23,185.12s7-54.29-1.23-86.74h25.04l88.9-16.17s10.21,47.88,38.37,73.58l-42.84,30.99s-13.17,12.47-35.46,3.63l-45.52-6.28s-11.81-3-27.26.99Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M327.69,140.99c-1.33,0-2.36-.41-3.08-1.24-.72-.82-1.08-1.99-1.08-3.49,0-1.63.46-2.89,1.38-3.8.92-.91,2.2-1.36,3.84-1.36,1.77,0,3.07.44,3.9,1.32s1.25,2.25,1.25,4.11l-1.78,1.96h-.79c-.21.79-.64,1.41-1.28,1.84-.64.43-1.42.65-2.35.65ZM324.92,146.64l-.21-2.04c4.54-.19,6.81-2.23,6.81-6.12v-1.22l2.38-.71v.95c0,2.91-.74,5.12-2.22,6.64-1.48,1.52-3.73,2.36-6.76,2.51ZM328.49,139.02c1,0,1.76-.26,2.3-.77s.81-1.25.81-2.19-.26-1.66-.77-2.18c-.52-.52-1.24-.78-2.16-.78s-1.62.28-2.13.84c-.51.56-.76,1.34-.76,2.34,0,.88.23,1.56.7,2.04.47.48,1.14.71,2.01.71Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Alcatra"
          data-section="alcatra"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M370.94,82.21s-10.42-40.36-2.62-72.2l32.18-2.76s-24.53,55.38-19.35,105.4c0,0-3.04-6.56-10.21-30.44Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M372.26,28.52v-1.48h2.94v1.48h-2.94ZM372.42,19.94v-1.58l2.62-.94v1.61l-2.62.91ZM375.05,28.52v-11.09h1.62v11.09h-1.62ZM376.51,28.52v-1.48h2.64v1.48h-2.64Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M385,28.68c-2.52,0-3.78-1.88-3.78-5.62s1.26-5.78,3.78-5.78,3.78,1.93,3.78,5.78-1.26,5.62-3.78,5.62ZM385,27.24c1.41,0,2.11-1.4,2.11-4.19s-.7-4.34-2.11-4.34-2.11,1.45-2.11,4.34.7,4.19,2.11,4.19ZM385,24.22c-.35,0-.63-.11-.85-.32-.22-.22-.32-.5-.32-.85s.11-.64.32-.85c.22-.21.5-.32.85-.32s.64.11.85.32c.21.21.32.5.32.85s-.11.63-.32.85c-.21.22-.5.32-.85.32Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Chã_de_fora"
          data-section="cha_de_fora"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M482.94,155.31s-21.97-9.59-48.01-8.27c0,0-7.52-99.35-52.55-77.5,0,0,9.72-46.55,18.12-62.3,0,0,5.52,17.97,15.91,30.4,0,0,20.13,45.25,66.53,117.66Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M395.26,60.5v-2.04h4.04v2.04h-4.04ZM395.48,48.7v-2.17l3.61-1.29v2.21l-3.61,1.25ZM399.09,60.5v-15.25h2.23v15.25h-2.23ZM401.11,60.5v-2.04h3.63v2.04h-3.63Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M408.15,60.5v-2.04h4.04v2.04h-4.04ZM408.37,48.7v-2.17l3.61-1.29v2.21l-3.61,1.25ZM411.98,60.5v-15.25h2.23v15.25h-2.23ZM414,60.5v-2.04h3.63v2.04h-3.63Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Rabadilha"
          data-section="rabadilha"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M381.03,112.67s-2.08-23.32,1.49-42.09c0,0,39.23-30.4,52.22,75.85l-25.71,9.38s-19.27-18.17-28-43.14Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M394.31,118.84v-2.04h4.04v2.04h-4.04ZM394.53,107.04v-2.17l3.61-1.29v2.21l-3.61,1.25ZM398.13,118.84v-15.25h2.23v15.25h-2.23ZM400.15,118.84v-2.04h3.63v2.04h-3.63Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M407.01,118.84v-2.45c2.36-1.3,4.12-2.66,5.28-4.07s1.75-2.86,1.75-4.36c0-.87-.21-1.53-.64-1.97-.43-.44-1.08-.66-1.96-.66-.58,0-1.19.17-1.82.5-.63.34-1.17.78-1.62,1.34l-1.48-1.47c.49-.71,1.2-1.28,2.11-1.71.91-.43,1.86-.64,2.86-.64,1.61,0,2.82.38,3.61,1.14s1.2,1.91,1.2,3.45-.49,3.02-1.47,4.43c-.98,1.41-2.46,2.77-4.46,4.08v2.36h-3.35ZM407.65,118.84v-2.04h9.28v2.04h-9.28Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Pojadouro"
          data-section="pojadouro"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M416.41,37.64s19.54,44.44,66.53,117.66c0,0,23.53-51.28,14.37-105.36,0,0-25.08-19.16-43.79-46.4l-14.61-1.54-22.51,35.64Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M459.74,81.27v-2.04h4.04v2.04h-4.04ZM459.96,69.48v-2.17l3.61-1.29v2.21l-3.61,1.25ZM463.57,81.27v-15.25h2.23v15.25h-2.23ZM465.59,81.27v-2.04h3.63v2.04h-3.63Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M474.89,74.29l-.26-1.4c1.13-.15,2.05-.37,2.76-.67.71-.29,1.22-.65,1.56-1.07s.5-.89.5-1.4c0-.62-.2-1.11-.61-1.46-.41-.35-.98-.52-1.74-.52-.54,0-1.12.14-1.73.41-.61.27-1.19.68-1.74,1.22l-1.48-1.47c.66-.74,1.42-1.29,2.29-1.63.87-.34,1.83-.51,2.9-.51,1.39,0,2.46.3,3.22.89s1.14,1.43,1.14,2.53c0,.92-.29,1.71-.88,2.39s-1.35,1.14-2.3,1.39v1.29h-3.63ZM476.33,81.49c-.79,0-1.51-.05-2.16-.14s-1.24-.22-1.75-.38l.27-2.05c.44.12.93.25,1.48.39.55.14,1.24.2,2.08.2,1.12,0,1.98-.22,2.6-.67.62-.44.92-1.07.92-1.87,0-.57-.18-1.06-.53-1.46-.35-.4-.87-.71-1.54-.91-.67-.21-1.49-.31-2.46-.31h-.34l-.26-1.4,3.29.26c1.22.09,2.21.49,2.96,1.19s1.14,1.65,1.14,2.85c0,1.36-.5,2.42-1.49,3.17-.99.75-2.39,1.13-4.21,1.13Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g
          id="Picanha"
          data-section="picanha"
          className="section cursor-pointer"
          onClick={handleClick}
          style={{ pointerEvents: "all" }}
        >
          <path
            d="M400.49,7.24s3.71,14.29,15.91,30.4l22.51-35.64-38.42,5.24Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M408.91,19.82v-1.48h2.94v1.48h-2.94ZM409.07,11.24v-1.58l2.62-.94v1.61l-2.62.91ZM411.69,19.82v-11.09h1.62v11.09h-1.62ZM413.16,19.82v-1.48h2.64v1.48h-2.64Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M417.54,17.34l1.56-7.98h1.69l-1.58,7.98h-1.67ZM417.54,17.34l1.09-1.45h4.56v1.45h-5.66ZM423.04,19.82v-11.09h1.62v11.09h-1.62ZM424.5,17.34v-1.45h1.2v1.45h-1.2Z"
            stroke="white"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
        </g>
        <g id="Camada_16">
          <path
            d="M164.67,198.88s-9.52-10.09-29.07-25.2c0,0-5.01-4.69-16.58-32.57l58.5-62.35s-26.44,46.95-12.85,120.12Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
            style={{ pointerEvents: "all" }}
          />
          <path
            d="M497.31,49.94s-23.64-16.54-43.79-46.4c0,0,52.02-8.31,43.79,46.4Z"
            fill="rgba(220, 38, 38, 0.3)"
            stroke="red"
            strokeWidth={1}
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
