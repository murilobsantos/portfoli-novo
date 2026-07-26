/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

export default function SobrePage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header com Identidade de Mestre */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/identidade visual.png"
              alt="Símbolo pessoal de Murilo Santos"
              width={120}
              height={120}
              className="mx-auto mb-6 rounded-full border-4 border-red-500 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-4 font-serif">
            代码的信徒
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            Murilo Santos — Tecelão de Interfaces
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
            "O código deve ser como água — fluido, adaptável, cortando o caos com elegância."
          </p>
        </header>

        {/* Jornada Pessoal */}
        <main className="space-y-16">
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              A Jornada do Discípulo
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-300 mb-6">
                Sou Murilo, desenvolvedor front-end e entusiasta da estética oriental.
                Vejo o código como uma arte marcial — cada linha é um golpe, cada interface é uma forma de expressão.
              </p>
              <p className="text-gray-300 mb-6">
                Minha jornada começou com curiosidade, cresceu com disciplina e hoje é movida por um desejo constante de evolução.
                Cada projeto é uma batalha vencida, cada bug derrotado é uma lição aprendida.
              </p>
              <blockquote className="text-lg text-gray-400 italic border-l-4 border-red-500 pl-6">
                "Força vem da repetição consciente. Domínio vem da adaptação constante."
              </blockquote>
            </div>
          </section>

          {/* Técnicas Dominadas */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Técnicas Dominadas
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-red-500/30 rounded-lg hover:border-red-500 transition-colors">
                <div className="text-4xl mb-4">⚛️</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Arte da Interface Serena</h4>
                <p className="text-gray-300 text-sm">React como extensão da vontade, criando interfaces que fluem como água viva.</p>
              </div>
              <div className="text-center p-6 border border-red-500/30 rounded-lg hover:border-red-500 transition-colors">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Espada da Precisão Absoluta</h4>
                <p className="text-gray-300 text-sm">TypeScript como lâmina afiada, garantindo que cada linha de código seja uma extensão perfeita da intenção.</p>
              </div>
              <div className="text-center p-6 border border-red-500/30 rounded-lg hover:border-red-500 transition-colors">
                <div className="text-4xl mb-4">🌐</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Ritual dos Portais Convergentes</h4>
                <p className="text-gray-300 text-sm">Next.js como portais entre mundos, conectando experiências digitais com fluidez espiritual.</p>
              </div>
              <div className="text-center p-6 border border-red-500/30 rounded-lg hover:border-red-500 transition-colors">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Arte das Linhas Harmoniosas</h4>
                <p className="text-gray-300 text-sm">Tailwind CSS como pincel do vento, pintando interfaces com graça e precisão.</p>
              </div>
              <div className="text-center p-6 border border-red-500/30 rounded-lg hover:border-red-500 transition-colors">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Punho da Forja Digital</h4>
                <p className="text-gray-300 text-sm">Node.js como martelo ancestral, forjando aplicações robustas no caldeirão da tecnologia.</p>
              </div>
              <div className="text-center p-6 border border-red-500/30 rounded-lg hover:border-red-500 transition-colors">
                <div className="text-4xl mb-4">🎭</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Dança dos Elementos Visuais</h4>
                <p className="text-gray-300 text-sm">Framer Motion como coreografia espiritual, dando vida aos elementos com movimento consciente.</p>
              </div>
            </div>
          </section>

          {/* Linha do Tempo Wuxia */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Conquistas na Jornada
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-400">2024 — Mestre das Interfaces Digitais</h4>
                  <p className="text-gray-300">Dominei as artes do React e Next.js, criando experiências que transcendem o meramente funcional.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-400">2023 — Aprendiz da Precisão</h4>
                  <p className="text-gray-300">Adotei TypeScript como minha lâmina espiritual, garantindo que cada criação seja impecável.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-red-400">2022 — Iniciação nas Artes Digitais</h4>
                  <p className="text-gray-300">Comecei minha jornada no desenvolvimento web, descobrindo a beleza da criação digital.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Filosofia */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              A Filosofia por Trás do Código
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl text-gray-300 italic mb-6">
                "O verdadeiro mestre não busca a perfeição imediata, mas o crescimento constante através da prática disciplinada."
              </blockquote>
              <p className="text-gray-300">
                Cada linha de código é uma oportunidade de crescimento. Cada projeto é uma batalha que fortalece o espírito.
                Acredito que a tecnologia deve servir à humanidade, criando experiências que elevam a alma tanto quanto a funcionalidade.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-yellow-700 transition-all duration-300">
              ← Voltar ao Início
            </Link>
            <Link href="/devlog" className="inline-block px-6 py-3 border border-red-500 text-red-400 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
              Seguir a Jornada no Devlog →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
