"use client";

type Props = {
  onSelectPart: (part: string) => void;
};

export default function SuinoMap({ onSelectPart }: Props) {
  return (
    <svg viewBox="0 0 514 331" className="w-[900px] max-w-[90vw] h-auto">
      {/* CABEÇA */}
      <path
        id="Cabeca"
        d="M48.26,99.7s16.59-3.11,23.56,13.63c0,0,4.15,17.48-11.11,22.52,0,0,19.76,6.97,31.57,6.41.24-.01.49-.03.72-.04,11.7-.89,34.89-.81,25.78-64.44,0,0-37.26-31.04-57.11-14.15,0,0,.74,33.63-13.41,36.07Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="cursor-pointer hover:fill-red-500/30 transition-all duration-300"
        onClick={() => onSelectPart("cabeca")}
      />

      {/* FOCINHO */}
      <path
        id="Focinho"
        d="M45.96,130.3c-.93-.52-7.25-4.21-7.78-11.56-.41-5.63,2.75-11.16,7.33-13.33,8.07-3.82,18.61,3.69,21.33,11.78.4,1.19,1.85,5.5-.22,9.33-3.29,6.07-13.69,7.68-20.67,3.78Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="cursor-pointer hover:fill-red-500/30 transition-all duration-300"
        onClick={() => onSelectPart("focinho")}
      />

      {/* ORELHAS */}
      <path
        id="Orelhas"
        d="M57.37,69.41s-30.81,7.41-45.63-26.67c0,0,47.41-13.63,54.22,0,0,0,20.74,5.93,26.67.59,0,0,9.19,5.33,24-3.56,0,0,16.3,11.14,18.96,30.31,0,0-14.81,6.68-43.26-16.7,0,0-25.78-1.46-32,2.1,0,0-2.07-2.96-2.96,13.93Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="cursor-pointer hover:fill-red-500/30 transition-all duration-300"
        onClick={() => onSelectPart("orelhas")}
      />

      {/* CACHAÇO */}
      <path
        id="Cachaco"
        d="M81.67,38.68c-2.2.17,15.7-16.76,105.19-9.94,0,0,13.04,7.74-5.63,9.94,0,0-26.04-5.54-99.56,0Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="cursor-pointer hover:fill-red-500/30 transition-all duration-300"
        onClick={() => onSelectPart("cachaco")}
      />

      {/* PRESUNTO */}
      <path
        id="Presunto"
        d="M429.85,258.3s5.93-39.7,6.81-67.85c0,0-21.63-42.37-60.74-85.93,0,0,76.44-86.52,92.44,21.63,0,0-26.67,12.15-13.04,37.63,0,0,5.33,9.19-1.78,29.93,0,0-6.22,26.07-5.33,48.59l-18.37,16Z"
        fill="transparent"
        stroke="red"
        strokeWidth={2}
        className="cursor-pointer hover:fill-red-500/30 transition-all duration-300"
        onClick={() => onSelectPart("presunto")}
      />
    </svg>
  );
}
