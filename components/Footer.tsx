import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left">
        {/* GRID PRINCIPAL */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* COLUNA 1 - EMPRESA */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              MATI<span className="text-red-600">BOM</span>
            </h2>

            <p className="text-gray-400">
              Especialistas em{" "}
              <span className="text-red-600">desmancha de carne</span> de porco,
              garantindo qualidade, segurança alimentar e processos eficientes.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <div className="p-2 bg-gray-800 rounded hover:bg-red-600 transition cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="p-2 bg-gray-800 rounded hover:bg-red-600 transition cursor-pointer">
                <FaInstagram />
              </div>
              <div className="p-2 bg-gray-800 rounded hover:bg-red-600 transition cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* COLUNA 2 - LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Links <span className="text-red-600">Úteis</span>
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-red-600 transition cursor-pointer">
                Sobre
              </li>
              <li className="hover:text-red-600 transition cursor-pointer">
                Serviços
              </li>
              <li className="hover:text-red-600 transition cursor-pointer">
                Certificações
              </li>
              <li className="hover:text-red-600 transition cursor-pointer">
                Contactos
              </li>
            </ul>
          </div>

          {/* COLUNA 3 - CONTACTOS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Entre em <span className="text-red-600">Contacto</span>
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-red-600" />
                Guarda, Portugal
              </li>

              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-red-600" />
                +351 9XX XXX XXX
              </li>

              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-red-600" />
                geral@matibom.pt
              </li>
            </ul>
          </div>
        </div>

        {/* LINHA FINAL */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} MATIBOM - Todos os direitos reservados
          </p>

          <div className="flex gap-4">
            <span className="hover:text-red-600 cursor-pointer transition">
              Política de Privacidade
            </span>
            <span className="hover:text-red-600 cursor-pointer transition">
              Termos e Condições
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
