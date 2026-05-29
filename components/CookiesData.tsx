"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Cookie } from "lucide-react";

export default function CookiesData() {
  const [show, setShow] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [ads, setAds] = useState(false);

  const [sections, setSections] = useState({
    analytics: false,
    functional: false,
    ads: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookies_accepted");

    if (!saved) {
      setShow(true);
      return;
    }

    if (saved) {
      setShow(false);
    }

    try {
      const parsed = JSON.parse(saved);

      setAnalytics(!!parsed.analytics);
      setFunctional(!!parsed.functional);
      setAds(!!parsed.ads);
      console.log(localStorage);
    } catch {
      setShow(true);
    }
  }, []);

  const save = (p0: {
    analytics: boolean;
    functional: boolean;
    ads: boolean;
  }) => {
    const previous = JSON.parse(
      localStorage.getItem("cookies_accepted") || "{}"
    );

    const newPreferences = {
      analytics,
      functional,
      ads,
    };

    localStorage.setItem("cookies_accepted", JSON.stringify(newPreferences));

    window.dispatchEvent(new Event("cookies_updated"));

    setShow(false);

    // se analytics estava ativo e foi removido
    if (previous.analytics && !analytics) {
      window.location.reload();
    }
  };

  const acceptAll = () => {
    const newPrefs = {
      analytics: true,
      functional: true,
      ads: true,
    };

    setAnalytics(true);
    setFunctional(true);
    setAds(true);

    localStorage.setItem("cookies_accepted", JSON.stringify(newPrefs));

    window.dispatchEvent(new Event("cookies_updated"));

    setShow(false);
  };
  return (
    <>
      {/* BOTÃO FLUTUANTE */}
      <AnimatePresence>
        {!show && (
          <motion.button
            onClick={() => setShow(true)}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              fixed bottom-6 right-6 z-40
              w-12 h-12
              bg-gray-800 hover:bg-red-600
              text-white
              rounded-full
              shadow-lg
              flex items-center justify-center
              hover:scale-110 active:scale-95
            "
          >
            <Cookie size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* MODAL */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
              bg-white
              w-full
              max-w-3xl
              max-h-[90vh]
              flex flex-col
              rounded-3xl
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
              overflow-hidden
              border border-gray-200
            "
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="px-8 py-7 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center">
                    <Cookie className="text-red-600" size={22} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
                      Preferências de Cookies
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Controle a forma como os seus dados são utilizados.
                    </p>
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-gray-600">
                  Utilizamos cookies para melhorar a experiência de navegação,
                  analisar estatísticas de utilização e otimizar o desempenho do
                  website. Pode aceitar todos os cookies ou personalizar as suas
                  preferências.
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-5 max-h-[60vh] overflow-y-auto">
                {/* NECESSÁRIOS */}
                <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[17px] font-semibold text-gray-900">
                        Cookies Necessários
                      </h3>

                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        Estes cookies são essenciais para o funcionamento
                        correto do website e não podem ser desativados. Incluem
                        funcionalidades básicas de segurança, navegação e
                        acessibilidade.
                      </p>
                    </div>

                    <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                      Sempre ativo
                    </span>
                  </div>
                </div>

                {/* ANALYTICS */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
                    onClick={() =>
                      setSections((s) => ({
                        ...s,
                        analytics: !s.analytics,
                      }))
                    }
                  >
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">
                        Cookies Analíticos
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Estatísticas e análise de utilização.
                      </p>
                    </div>

                    <ChevronDown
                      className={`text-red-600 transition-transform duration-300 ${
                        sections.analytics ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {sections.analytics && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Permitem compreender como os visitantes interagem com o
                        website, ajudando a melhorar desempenho, conteúdos e
                        experiência de navegação.
                      </p>

                      <div className="mt-4">
                        <label className="inline-flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={analytics}
                            onChange={(e) => setAnalytics(e.target.checked)}
                            className="w-4 h-4 accent-red-600"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Ativar cookies analíticos
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                {/* FUNCIONAL */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
                    onClick={() =>
                      setSections((s) => ({
                        ...s,
                        functional: !s.functional,
                      }))
                    }
                  >
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">
                        Cookies Funcionais
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Preferências e funcionalidades avançadas.
                      </p>
                    </div>

                    <ChevronDown
                      className={`text-red-600 transition-transform duration-300 ${
                        sections.functional ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {sections.functional && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Permitem memorizar preferências como idioma, definições
                        de navegação e funcionalidades personalizadas.
                      </p>

                      <div className="mt-4">
                        <label className="inline-flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={functional}
                            onChange={(e) => setFunctional(e.target.checked)}
                            className="w-4 h-4 accent-red-600"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Ativar cookies funcionais
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                {/* PUBLICIDADE */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
                    onClick={() =>
                      setSections((s) => ({
                        ...s,
                        ads: !s.ads,
                      }))
                    }
                  >
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">
                        Cookies de Publicidade
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Conteúdo promocional e anúncios relevantes.
                      </p>
                    </div>

                    <ChevronDown
                      className={`text-red-600 transition-transform duration-300 ${
                        sections.ads ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {sections.ads && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Utilizados para apresentar conteúdos promocionais
                        relevantes e medir a eficácia de campanhas
                        publicitárias.
                      </p>

                      <div className="mt-4">
                        <label className="inline-flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={ads}
                            onChange={(e) => setAds(e.target.checked)}
                            className="w-4 h-4 accent-red-600"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Ativar cookies de publicidade
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* FOOTER */}
              <div className="px-8 py-6 border-t border-gray-100 bg-gray-50 flex flex-col md:flex-row gap-3 justify-end">
                <button
                  onClick={() =>
                    save({
                      analytics: false,
                      functional: false,
                      ads: false,
                    })
                  }
                  className="
              px-5 py-3
              rounded-xl
              bg-white
              border border-gray-300
              text-gray-700
              hover:bg-gray-100
              transition
              font-medium
            "
                >
                  Rejeitar
                </button>

                <button
                  onClick={() =>
                    save({
                      analytics,
                      functional,
                      ads,
                    })
                  }
                  className="
              px-5 py-3
              rounded-xl
              bg-red-600
              hover:bg-red-500
              text-white
              transition
              font-medium
              shadow-lg shadow-red-600/20
            "
                >
                  Guardar preferências
                </button>

                <button
                  onClick={acceptAll}
                  className="
                    px-5 py-3
                    rounded-xl
                    bg-black
                    hover:bg-red-600
                    text-white
                    transition
                    font-medium
                  "
                >
                  Aceitar tudo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
