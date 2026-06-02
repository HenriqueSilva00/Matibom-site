import { FaFacebookF, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
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
              <span className="text-red-600">desmancha de carne</span> suína,
              bovina e caprina, garantindo qualidade, segurança alimentar e
              processos eficientes.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://www.facebook.com/matibompt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded hover:bg-blue-600 transition inline-flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/351912345678?text=Olá%20gostava%20de%20mais%20informações"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded hover:bg-green-500 transition inline-flex items-center justify-center"
              >
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>

          {/* COLUNA 2 - LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Links <span className="text-red-600">Úteis</span>
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="hover:text-red-600 transition">
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  href="/servicos"
                  className="hover:text-red-600 transition"
                >
                  Serviços
                </Link>
              </li>

              <li>
                <Link
                  href="/empresa/certificacoes"
                  className="hover:text-red-600 transition"
                >
                  Certificações
                </Link>
              </li>

              <li>
                <Link
                  href="/contactos"
                  className="hover:text-red-600 transition"
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 - CONTACTOS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contactos <span className="text-red-600">MATIBOM</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
              {/* EMAIL */}
              <div className="sm:col-span-2 flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-red-600" />

                <a
                  href="mailto:geral@matibom.pt"
                  className="hover:text-red-600 transition"
                >
                  geral@matibom.pt
                </a>
              </div>

              {/* LOCAL 1 */}
              <div className="space-y-1">
                <p className="text-white/90">Pinhel</p>
                <p className="text-xs">R. Cândido dos Reis 51</p>
                <p className="text-xs">6400-351</p>
                <a href="tel:+351271408210" className="text-red-500 text-xs">
                  271 408 210
                </a>
              </div>

              {/* LOCAL 2 */}
              <div className="space-y-1">
                <p className="text-white/90">Valbom</p>
                <p className="text-xs">Rua da Calçada</p>
                <p className="text-xs">6400-661 Pinhel</p>
                <a href="tel:+351271408210" className="text-red-500 text-xs">
                  271 408 210
                </a>
              </div>

              {/* LOCAL 3 */}
              <div className="sm:col-span-2 space-y-1">
                <p className="text-white/90">Guarda</p>
                <p className="text-xs">Parque Industrial, lote 56</p>
                <p className="text-xs">6300-625</p>
                <a href="tel:+351271408210" className="text-red-500 text-xs">
                  271 408 210
                </a>
                <p className="text-[10px] text-gray-500">
                  Chamada para rede fixa nacional
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LINHA FINAL */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col gap-8 text-sm text-gray-500">
          {/* TOP */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <p className="text-center lg:text-left">
              © {new Date().getFullYear()} MATIBOM - Todos os direitos
              reservados
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10">
              <span className="hover:text-red-600 cursor-pointer transition">
                Política de Privacidade
              </span>

              <span className="hover:text-red-600 cursor-pointer transition">
                Termos e Condições
              </span>

              {/* Livro de Reclamações */}
              <a
                href="https://www.livroreclamacoes.pt/Inicio/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-80"
              >
                <img
                  src="/assets/livroDeReclamacoes.png"
                  alt="Livro de Reclamações"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex justify-center items-center mt-6">
            <p className="text-xs md:text-sm text-gray-500 text-center">
              Desenvolvido por{" "}
              <span className="font-medium text-gray-300 hover:text-red-600 transition cursor-pointer">
                Criartecôa, Lda
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
