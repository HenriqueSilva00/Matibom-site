import Container from "@/components/Container";

export default function Contactos() {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-6">Contactos</h1>

      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Morada:</strong> Guarda, Portugal
        </p>
        <p>
          <strong>Telefone:</strong> 9XX XXX XXX
        </p>
        <p>
          <strong>Email:</strong> geral@matibom.pt
        </p>
      </div>
    </Container>
  );
}
