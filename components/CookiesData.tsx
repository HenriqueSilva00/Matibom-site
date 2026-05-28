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
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setShow(true);
  }, []);

  const save = (value: string) => {
    localStorage.setItem("cookies_accepted", value);
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
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <div
              className="bg-white w-[92%] max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-red-600">
                  Personalizar Preferências de Consentimento
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                  Utilizamos cookies para melhorar a experiência de navegação.
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4 text-sm">
                {/* NECESSÁRIOS */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Necessário</span>
                    <span className="text-xs text-gray-500">Sempre ativo</span>
                  </div>
                  <p className="text-gray-500 mt-2">
                    Cookies essenciais para funcionamento do site.
                  </p>
                </div>

                {/* ANALYTICS */}
                <div className="border rounded-lg p-4">
                  <button
                    className="flex justify-between w-full items-center"
                    onClick={() =>
                      setSections((s) => ({ ...s, analytics: !s.analytics }))
                    }
                  >
                    <span className="font-semibold text-red-600">
                      Analytics
                    </span>
                    <ChevronDown
                      className={`transition ${
                        sections.analytics ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {sections.analytics && (
                    <p className="text-gray-600 mt-2">
                      Cookies usados para análise de tráfego e comportamento.
                    </p>
                  )}

                  <div className="mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={analytics}
                        onChange={(e) => setAnalytics(e.target.checked)}
                        className="accent-red-600"
                      />
                      Ativar
                    </label>
                  </div>
                </div>

                {/* FUNCIONAL */}
                <div className="border rounded-lg p-4">
                  <button
                    className="flex justify-between w-full items-center"
                    onClick={() =>
                      setSections((s) => ({ ...s, functional: !s.functional }))
                    }
                  >
                    <span className="font-semibold text-red-600">
                      Funcional
                    </span>
                    <ChevronDown
                      className={`transition ${
                        sections.functional ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {sections.functional && (
                    <p className="text-gray-600 mt-2">
                      Guarda preferências do utilizador.
                    </p>
                  )}

                  <div className="mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={functional}
                        onChange={(e) => setFunctional(e.target.checked)}
                        className="accent-red-600"
                      />
                      Ativar
                    </label>
                  </div>
                </div>

                {/* ADS */}
                <div className="border rounded-lg p-4">
                  <button
                    className="flex justify-between w-full items-center"
                    onClick={() => setSections((s) => ({ ...s, ads: !s.ads }))}
                  >
                    <span className="font-semibold text-red-600">
                      Publicidade
                    </span>
                    <ChevronDown
                      className={`transition ${
                        sections.ads ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {sections.ads && (
                    <p className="text-gray-600 mt-2">
                      Cookies usados para anúncios personalizados.
                    </p>
                  )}

                  <div className="mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={ads}
                        onChange={(e) => setAds(e.target.checked)}
                        className="accent-red-600"
                      />
                      Ativar
                    </label>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex flex-col md:flex-row gap-3 justify-end p-6 border-t border-gray-200">
                <button
                  onClick={() => save("rejected")}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  Rejeitar
                </button>

                <button
                  onClick={() =>
                    save(JSON.stringify({ analytics, functional, ads }))
                  }
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg"
                >
                  Guardar preferências
                </button>

                <button
                  onClick={() => {
                    setAnalytics(true);
                    setFunctional(true);
                    setAds(true);
                    save("accepted_all");
                  }}
                  className="px-4 py-2 bg-black text-white hover:bg-red-600 rounded-lg"
                >
                  Aceitar tudo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
