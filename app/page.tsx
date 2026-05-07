import Hero from "@/components/Hero";
import ParallaxImage from "@/components/ParallaxImage";
import Navbar from "@/components/Navbar";
import MainBanner from "@/components/MainBanner";
import {
  IconMeat,
  IconSausage,
  IconTruckDelivery,
  IconToolsKitchen2,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />

      <MainBanner />

      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* TEXTO */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
              O que é a <span className="text-red-600">Matibom</span>?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A MATIBOM iniciou a sua atividade em 1997, com sede em Valbom, no
              concelho de Pinhel, distrito da Guarda, dedicando-se ao abate,
              desmancha, transformação e comercialização de carnes de elevada
              qualidade.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ao longo dos anos, a empresa tem vindo a evoluir continuamente,
              investindo em inovação, tecnologia e processos rigorosos de
              higiene e segurança alimentar, garantindo aos seus clientes
              produtos frescos, seguros e preparados segundo os mais elevados
              padrões de qualidade.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Atualmente, a MATIBOM afirma-se como uma referência no mercado
              nacional, oferecendo soluções completas na área das carnes e
              charcutaria, sempre com um compromisso constante com a excelência,
              frescura, confiança e satisfação dos seus clientes.
            </p>

            <a
              href="/sobre"
              className="
          inline-block
          bg-red-600
          hover:bg-red-700
          text-white
          font-medium
          py-3
          px-8
          rounded-xl
          transition
          duration-300
        "
            >
              Saiba mais sobre nós
            </a>
          </div>

          {/* ETAPAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-24">
            {/* ITEM */}
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <IconMeat size={52} stroke={1.4} className="text-red-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Abate
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Processos rigorosos de abate de bovinos, suínos e caprinos,
                garantindo qualidade, higiene e segurança alimentar.
              </p>
            </div>

            {/* ITEM */}
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <IconToolsKitchen2
                  size={52}
                  stroke={1.4}
                  className="text-red-600"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Desmancha
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Corte e preparação das carnes com técnicas modernas e elevado
                controlo de frescura e conservação.
              </p>
            </div>

            {/* ITEM */}
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <IconTruckDelivery
                  size={52}
                  stroke={1.4}
                  className="text-red-600"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Comercialização
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Distribuição eficiente de produtos frescos e transformados para
                clientes nacionais e internacionais.
              </p>
            </div>

            {/* ITEM */}
            <div className="text-center">
              <div className="flex justify-center mb-5">
                <IconSausage size={52} stroke={1.4} className="text-red-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Charcutaria
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Produção de enchidos e produtos tradicionais com sabor autêntico
                e elevados padrões de qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <ParallaxImage />

      <section className="h-screen w-full"></section>
    </main>
  );
}
