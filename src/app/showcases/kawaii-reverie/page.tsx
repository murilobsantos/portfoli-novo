import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kawaii Reverie - O Sonho Fofo da Imaginação',
  description: 'Uma experiência visual encantadora que combina elementos kawaii com interatividade moderna.',
}

export default function KawaiiReveriePage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            かわいい夢想
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">
            Kawaii Reverie
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Onde a fofura encontra a tecnologia em uma dança encantadora. Uma jornada através de mundos pastel
            onde cada pixel pulsa com alegria inocente e maravilha digital.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Project Overview */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-pink-400 mb-6 text-center">
              O Sonho Fofo da Imaginação
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-pink-400 mb-4">Visão do Projeto</h4>
                <p className="text-gray-300 mb-4">
                  Kawaii Reverie é mais que uma aplicação — é um abraço digital caloroso que lembra que a tecnologia
                  pode ser gentil, acolhedora e cheia de alegria. Cada interação é projetada para trazer um sorriso,
                  transformando momentos digitais em memórias felizes.
                </p>
                <p className="text-gray-300">
                  Inspirado na cultura kawaii, o projeto celebra a beleza da simplicidade e do encantamento, provando
                  que interfaces poderosas podem ser tão adoráveis quanto funcionais.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-pink-400 mb-4">Tecnologias Utilizadas</h4>
                <p className="text-gray-300 mb-4">
                  O projeto utiliza uma combinação de tecnologias modernas para criar uma experiência fluida e encantadora:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• React com TypeScript para interatividade robusta</li>
                  <li>• Tailwind CSS para estilização kawaii personalizada</li>
                  <li>• Next.js para otimização de performance</li>
                  <li>• Animações CSS e JavaScript para efeitos mágicos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-pink-400 mb-6 text-center">
              Características Encantadoras
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🌸</div>
                <h4 className="text-lg font-bold text-pink-400 mb-2">Design Kawaii</h4>
                <p className="text-gray-300 text-sm">
                  Elementos visuais fofos que trazem alegria e leveza à interface.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-lg font-bold text-pink-400 mb-2">Interatividade Mágica</h4>
                <p className="text-gray-300 text-sm">
                  Animações suaves e efeitos visuais que encantam o usuário.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-lg font-bold text-pink-400 mb-2">Paleta Pastel</h4>
                <p className="text-gray-300 text-sm">
                  Cores suaves e harmoniosas que criam uma atmosfera acolhedora.
                </p>
              </div>
            </div>
          </section>

          {/* Back to Projects */}
          <div className="text-center mt-16">
            <Link
              href="/projetos"
              className="inline-block px-6 py-3 border-2 border-pink-500 text-pink-400 font-bold rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-300"
            >
              ← Voltar aos Projetos
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
