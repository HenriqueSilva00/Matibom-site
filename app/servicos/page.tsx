import Container from "@/components/Container";

export default function Servicos() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-10">Serviços</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded hover:shadow transition">
          <h2 className="text-xl font-semibold mb-2">Desmancha</h2>
          <p className="text-gray-600">
            Processamento de carne com precisão e qualidade.
          </p>
        </div>

        <div className="p-6 border rounded hover:shadow transition">
          <h2 className="text-xl font-semibold mb-2">Distribuição</h2>
          <p className="text-gray-600">
            Entregas eficientes para clientes e parceiros.
          </p>
        </div>

        <div className="p-6 border rounded hover:shadow transition">
          <h2 className="text-xl font-semibold mb-2">Controlo de Qualidade</h2>
          <p className="text-gray-600">
            Cumprimento rigoroso das normas sanitárias.
          </p>
        </div>
      </div>
    </Container>
  );
}
