import Container from "@/components/Container";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="mt-7">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Desmancha de Carne com{" "}
            <span className="text-red-600">Qualidade</span> e Rigor
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            A MATIBOM garante processos eficientes e seguros na preparação de
            carne de porco, cumprindo todas as normas de qualidade.
          </p>

          <a className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
            Saber mais
          </a>
        </div>
      </section>

      {/* SOBRE PREVIEW */}
      <Container>
        <h2 className="text-3xl font-semibold mb-4">Sobre nós</h2>
        <p className="text-gray-600">
          Empresa especializada na desmancha e preparação de carne de porco, com
          foco na qualidade, eficiência e cumprimento das normas sanitárias.
        </p>
      </Container>
    </main>
  );
}
