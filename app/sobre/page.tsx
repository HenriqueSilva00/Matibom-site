"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ShieldCheck, Factory, Award, Users } from "lucide-react"; // Opcional: ícones para ajudar na leitura

const images = [
  "/assets/instalacoes1.jpg",
  "/assets/instalacoes2.jpg",
  "/assets/instalacoes3.jpg",
];

export default function Sobre() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6500); // mais lento

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* BACKGROUND */}
        <img
          src="/assets/WhiteBackground.jpeg"
          alt="Background MATIBOM"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay subtil */}
        <div className="absolute inset-0 bg-white/40 backdrop-[1px]" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* TITULO */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl md:text-8xl font-black tracking-[0.25em] text-[#8B1E1E]"
          >
            MATIBOM
          </motion.h1>

          {/* SUBTITULO */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 3.0,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 text-base md:text-2xl tracking-[0.3em] uppercase text-[#A63A3A] font-light"
          >
            Tradição, Qualidade e Confiança desde 1997
          </motion.p>
        </div>
      </section>

      {/* BANNER SEPARADOR */}
      <section className="relative w-full h-[220px] md:h-[400px] overflow-hidden">
        {/* IMAGEM */}
        <img
          src="/assets/bannerSobre.jpeg"
          alt="Banner Sobre MATIBOM"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      <section className="w-full py-24 bg-gray-50/30">
        {/* 1. CONTAINER TOPO (80% Width, 50/50) */}
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* ESQUERDA - SLIDESHOW */}
          <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl group">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={images[index]}
                className="absolute inset-0"
                initial={{
                  clipPath:
                    index % 3 === 0
                      ? "inset(0 0 100% 0)" // reveal de cima
                      : index % 3 === 1
                      ? "inset(100% 0 0 0)" // reveal de baixo
                      : "inset(0 100% 0 0)", // reveal da direita
                  filter: "blur(12px)",
                }}
                animate={{
                  clipPath: "inset(0 0 0 0)",
                  filter: "blur(0px)",
                  transition: { duration: 1.1, ease: [0.65, 0, 0.35, 1] },
                }}
                exit={{
                  scale: 1.15,
                  opacity: 0,
                  filter: "blur(8px)",
                  transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
                }}
              >
                {/* Ken Burns: a imagem continua a respirar enquanto está visível */}
                <motion.img
                  src={images[index]}
                  alt="MATIBOM Instalações"
                  className="absolute inset-0 w-full h-full object-cover will-change-transform"
                  initial={{ scale: 1.2 }}
                  animate={{
                    scale: 1.05,
                    transition: { duration: 6, ease: "easeOut" },
                  }}
                />

                {/* Brilho que varre a imagem na entrada */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "120%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Vinheta inferior */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Legenda com micro-animação a cada troca */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`caption-${index}`}
                className="absolute bottom-8 left-8 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              ></motion.div>
            </AnimatePresence>

            {/* Barra de progresso do slide */}
            <motion.div
              key={`progress-${index}`}
              className="absolute bottom-0 left-0 h-[3px] bg-white/80"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>

          {/* DIREITA - DESCRIÇÃO CURTA */}
          <div className="flex flex-col justify-center">
            <span className="text-[#8B1E1E] uppercase tracking-[0.4em] text-xs font-bold mb-4">
              Desde 1997
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
              Referência Nacional e{" "}
              <span className="text-[#8B1E1E]">Internacional</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p className="font-medium text-gray-800">
                A MATIBOM nasceu com a missão de oferecer produtos de excelência
                alimentar, aliando a tradição do setor à máxima inovação
                industrial.
              </p>
              <p>
                Iniciámos o nosso percurso em Pinhel e, hoje, somos uma empresa
                de referência pelo rigoroso controle de qualidade e pela
                capacidade de resposta às necessidades técnicas dos nossos
                clientes mais exigentes.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CONTAINER DE INFORMAÇÃO DETALHADA (80% Width) */}
        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* BLOCO A: EVOLUÇÃO E TECNOLOGIA */}
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-50 rounded-2xl text-[#8B1E1E]">
                    <Factory size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Evolução & Infraestrutura
                  </h3>
                </div>

                <div className="space-y-6 text-gray-700">
                  <div className="border-l-2 border-red-100 pl-6 relative">
                    <span className="absolute -left-[5px] top-0 w-2 h-2 bg-[#8B1E1E] rounded-full" />
                    <p className="text-sm font-bold text-[#8B1E1E] uppercase">
                      1997
                    </p>
                    <p>
                      Início com Matadouro de Suínos, desmancha e transformação
                      em Valbom.
                    </p>
                  </div>

                  <div className="border-l-2 border-red-100 pl-6 relative">
                    <span className="absolute -left-[5px] top-0 w-2 h-2 bg-[#8B1E1E] rounded-full" />
                    <p className="text-sm font-bold text-[#8B1E1E] uppercase">
                      2015
                    </p>
                    <p>
                      Nova unidade vocacionada para fatiar e preservar produtos,
                      implementando a mais alta tecnologia de manuseamento.
                    </p>
                  </div>

                  <p className="pt-4 italic">
                    "O nosso moderno matadouro permite processar anualmente uma
                    grande quantidade de carne, garantindo o melhor preço com
                    alta qualidade."
                  </p>
                </div>
              </div>
            </div>

            {/* BLOCO B: ATIVIDADE E CONTROLO */}
            <div className="space-y-8">
              <div className="bg-[#8B1E1E] p-10 rounded-[32px] shadow-xl text-white h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-2xl text-white">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">Rigor & Segurança</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <ChevronRight className="text-red-300 shrink-0" />
                    <span>
                      <strong>Local 100% Controlado:</strong> Processos que
                      cumprem todas as normas de higiene e segurança.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="text-red-300 shrink-0" />
                    <span>
                      <strong>Variedade de Espécies:</strong> Carnes Suínas,
                      Bovinas, Ovinas, Caprinas e Fumeiro Tradicional.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="text-red-300 shrink-0" />
                    <span>
                      <strong>Formatos:</strong> Carne fresca, congelados,
                      fatiados e transformados em diversos estilos de embalagem.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="text-red-300 shrink-0" />
                    <span>
                      <strong>Apresentação:</strong> Embalamento focado na
                      estética atrativa e na vida útil duradoura do produto.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOCO C: EQUIPA E MISSÃO (Ocupa 2 colunas em telas grandes) */}
            <div className="md:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
              <div className="lg:col-span-1 bg-white p-8 rounded-[28px] border border-gray-100 flex items-start gap-5">
                <Users className="text-[#8B1E1E] shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Equipa Qualificada
                  </h4>
                  <p className="text-sm text-gray-600">
                    Profissionais versáteis com vasta experiência e conhecimento
                    técnico na indústria.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-white p-8 rounded-[28px] border border-gray-100 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2 text-[#8B1E1E]">
                  <Award size={20} />
                  <span className="font-bold uppercase text-xs tracking-tighter">
                    Missão Constante
                  </span>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed">
                  "Obter a melhor{" "}
                  <span className="text-[#8B1E1E] font-bold">
                    Qualidade, Frescura e Higiene
                  </span>{" "}
                  em todos os produtos, até que estes cheguem ao consumidor
                  final para integrar as mais originais receitas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
