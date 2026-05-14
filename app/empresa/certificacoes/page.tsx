export default function CertificacoesPage() {
  const certificacoes = [
    {
      title: "HACCP",
      subtitle: "Segurança Alimentar",
      description:
        "Sistema de análise de perigos e controlo de pontos críticos.",
      badge: "Certificado",
      logo: "/assets/certificacoes/haccp.png",
    },

    {
      title: "ISO 22000",
      subtitle: "Gestão da Segurança Alimentar",
      description: "Norma internacional focada na segurança alimentar.",
      badge: "Certificado",
      logo: "/assets/certificacoes/iso22000.png",
    },

    {
      title: "Bem-Estar Animal",
      subtitle: "Conformidade e Responsabilidade",
      description:
        "Cumprimento das normas europeias relativas ao bem-estar animal.",
      badge: "Certificado",
      logo: "/assets/certificacoes/bemEstarAnimal.png",
    },
    {
      title: "Rastreabilidade",
      subtitle: "Controlo Total",
      description:
        "Monitorização completa da origem e percurso dos produtos, assegurando transparência e confiança.",
      badge: "Certificado",
      logo: null,
    },
  ];

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-200 rounded-full blur-3xl opacity-40" />
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-40 pb-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100 mb-8">
            Qualidade • Segurança • Confiança
          </span>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-tight">
            Certificações
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A MATIBOM segue rigorosos padrões de qualidade e segurança
            alimentar, garantindo processos certificados, rastreabilidade e
            conformidade com as normas nacionais e internacionais do setor.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="relative z-10 pb-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificacoes.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute top-5 right-5 flex flex-col items-center gap-2">
                {/* BADGE */}
                <div
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-white/70
                    backdrop-blur-md
                    border
                    border-white/40
                    text-red-600
                    text-xs
                    font-semibold
                    tracking-wide
                    uppercase
                    shadow-sm
                  "
                >
                  {item.badge}
                </div>

                {/* PNG LOGO */}
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="
                      w-15
                      h-15
                      object-contain
                      opacity-90
                    "
                  />
                )}
              </div>
              {/* TOP LINE */}
              <div className="w-16 h-[3px] bg-red-600 rounded-full mb-8 group-hover:w-28 transition-all duration-500" />

              {/* TITLE */}
              <div className="flex flex-col gap-3">
                <span className="text-sm uppercase tracking-[0.25em] text-gray-400 font-medium">
                  {item.subtitle}
                </span>

                <h2 className="text-3xl font-semibold text-gray-900">
                  {item.title}
                </h2>
              </div>

              {/* TEXT */}
              <p className="mt-6 text-gray-600 leading-8 text-lg">
                {item.description}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-red-100 rounded-full blur-3xl opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
