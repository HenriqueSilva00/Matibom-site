"use client";

type Props = {
  onSelectPart: (part: string) => void;
};

export default function BovinoMap({ onSelectPart }: Props) {
  return (
    <svg viewBox="0 0 514 331" className="w-[900px] max-w-[90vw] h-auto">
      <path
        id="cabeca"
        d="M62.4,16.98s-17.78,33.67-25.48,41.79l-25.48,34.83s-.59,19.16,25.48,19.16l49.19,3.48s27.26,4.64,25.48-17.99c0,0,1.78-27.86-12.44-51.08,0,0-19.2-49.69-36.74-30.18Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="cursor-pointer hover:fill-red-500/30"
        onClick={() => onSelectPart("cabeca")}
      />

      <path
        id="rabo"
        d="M404.81,13c1.78,0,89.48-10.67,93.63,61.04l-7.7,35.56L404.81,13Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="cursor-pointer hover:fill-red-500/30"
        onClick={() => onSelectPart("rabo")}
      />
    </svg>
  );
}
