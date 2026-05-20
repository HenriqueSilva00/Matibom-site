"use client";

import {
  Truck,
  PackageCheck,
  ThermometerSnowflake,
  Warehouse,
  MapPinCheck,
} from "lucide-react";

const steps = [
  {
    title: "Abate & Processamento",
    desc: "Controlo rigoroso desde a origem com elevados padrões de qualidade.",
    icon: PackageCheck,
  },
  {
    title: "Armazenamento Refrigerado",
    desc: "Conservação em condições ideais de temperatura controlada.",
    icon: ThermometerSnowflake,
  },
  {
    title: "Gestão de Armazéns",
    desc: "Organização eficiente de stock em múltiplas localizações.",
    icon: Warehouse,
  },
  {
    title: "Distribuição Nacional",
    desc: "Transporte rápido e seguro com frota própria e certificada.",
    icon: Truck,
  },
  {
    title: "Entrega ao Cliente",
    desc: "Garantia de frescura e pontualidade em todo o território.",
    icon: MapPinCheck,
  },
];

export default function LogisticaDistribuicao() {
  return (
    <section className="w-full bg-white pt-32 md:pt-40 pb-24 px-6">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100 mb-8">
          Cadeia de Frio • Distribuição • Eficiência
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Distribuição & <span className="text-red-600">Logística</span>
        </h2>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Garantimos uma cadeia logística eficiente e controlada, assegurando
          que os nossos produtos chegam sempre com máxima frescura e qualidade.
        </p>

        <div className="w-24 h-[3px] bg-gradient-to-r from-red-600 to-red-300 mx-auto mt-6 rounded-full" />
      </div>

      {/* DESKTOP FLOW */}
      <div className="hidden md:flex justify-between items-stretch gap-8 max-w-6xl mx-auto relative py-10">
        {/* linha de ligação */}
        <div className="absolute top-16 left-0 right-0 h-[3px] bg-red-100" />

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={i}
              className="flex flex-col items-center text-center w-full relative z-10 min-h-[260px]"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white border-2 border-red-200 shadow-sm">
                <Icon className="text-red-600" size={32} />
              </div>

              <h3 className="mt-4 font-semibold text-gray-800">{step.title}</h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* MOBILE FLOW */}
      <div className="md:hidden flex flex-col gap-10 max-w-xl mx-auto relative">
        {/* linha vertical */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-red-100" />

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div key={i} className="flex gap-4 relative">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-red-200 z-10">
                <Icon className="text-red-600" size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
