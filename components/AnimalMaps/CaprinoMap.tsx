"use client";

type Props = {
  onSelectPart: (part: string) => void;
};

export default function CaprinoMap({ onSelectPart }: Props) {
  return (
    <svg viewBox="0 0 514 331" className="w-[900px] max-w-[90vw] h-auto">
      {/* RABO */}
      <path
        id="Rabo"
        d="M316,57s106-19,94,71l-94-71Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="
          cursor-pointer
          hover:fill-red-500/30
          transition-all
          duration-300
        "
        onClick={() => onSelectPart("rabo")}
      />

      {/* COSTELAS */}
      <path
        id="Costelas"
        d="M175,75s45-8,77,11c0,0,27,0,39,25l8,59-98-19-26-76Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="
          cursor-pointer
          hover:fill-red-500/30
          transition-all
          duration-300
        "
        onClick={() => onSelectPart("costelas")}
      />
    </svg>
  );
}
