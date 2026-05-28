"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const locations = [
  {
    title: "Talho - Pinhel",
    address: "Pinhel, Portugal",
    phone: "271 411 320",
    email: "pinhel@matibom.pt",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.950420208601!2d-7.0680917999999995!3d40.77451740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3c6048f06b8689%3A0x53f82c6ee25532eb!2sR.%20C%C3%A2ndido%20dos%20Reis%2051%2C%206400-351%20Pinhel!5e1!3m2!1spt-PT!2spt!4v1779367092357!5m2!1spt-PT!2spt",
  },
  {
    title: "Sede - Valbom",
    address: "Valbom, Pinhel",
    phone: "271 408 210",
    email: "sede@matibom.pt",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.7333441390642!2d-7.1156356!3d40.778536800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3c8a5641614de1%3A0x3342aee61504040c!2sMatibom%20-%20Matadouro%20E%20Ind%C3%BAstrias%20De%20Carne%2C%20Lda.!5e1!3m2!1spt-PT!2spt!4v1779367167179!5m2!1spt-PT!2spt",
  },
  {
    title: "Matadouro - ZI da Guarda",
    address: "Zona Industrial da Guarda",
    phone: "271 143 361",
    email: "guarda@matibom.pt",
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14399.78702540606!2d-7.214639999999999!3d40.551881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3cfb7ea70c1e3d%3A0x7ca414c21cfa11e7!2sMatibom!5e1!3m2!1spt-PT!2sus!4v1779367208591!5m2!1spt-PT!2sus",
  },
];

export default function Contactos() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full">
      {/* =========================
          LOCALIZAÇÕES
      ========================= */}
      <section className="bg-white pt-32 md:pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100 mb-8">
            Onde Estamos
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Localizações
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Conheça as nossas instalações e pontos de operação em Portugal.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              {/* MAPA */}
              <iframe
                src={loc.map}
                className="w-full h-56 md:h-64"
                loading="lazy"
              />

              {/* INFO */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-red-600">
                  {loc.title}
                </h3>

                <div className="space-y-2 text-gray-600 text-sm">
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-red-600" />
                    {loc.address}
                  </p>
                  <p className="flex items-start gap-2">
                    <Phone size={16} className="text-red-600 mt-1" />

                    <span>
                      {loc.phone}{" "}
                      <span className="text-xs text-red-500 font-medium">
                        (chamada para a rede fixa nacional)
                      </span>
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-red-600" />
                    {loc.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          CONTACT FORM
      ========================= */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/redbackground.jpeg')",
          }}
        />

        {/* LIGHTER OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* FORM */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-white/20 relative">
            {/* LOGO DENTRO DO FORM */}
            <div className="flex justify-center mb-8">
              <img
                src="/assets/logo.png"
                alt="MATIBOM"
                className="h-12 md:h-14 object-contain"
              />
            </div>

            <h3 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
              Contacte-nos
            </h3>

            <p className="text-center text-gray-500 mb-8">
              Responderemos o mais rápido possível
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
              />

              <input
                type="text"
                placeholder="Assunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="md:col-span-2 p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition"
              />

              <textarea
                placeholder="Mensagem"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="md:col-span-2 p-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className={`md:col-span-2 py-3 rounded-lg font-medium transition-all duration-200 shadow-md ${
                  loading
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white"
                }`}
              >
                {loading ? "A enviar..." : "Enviar Mensagem"}
              </button>
              {success && (
                <p className="text-green-600 text-center mt-4">
                  Mensagem enviada com sucesso!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
