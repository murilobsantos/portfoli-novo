import Link from 'next/link';

export default function DemosPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            演示项目
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">
            Demos Interativos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore aplicações funcionais e protótipos interativos. Cada demo representa
            uma solução prática desenvolvida com tecnologias modernas e design elegante.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Demos Grid */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">
              Aplicações Demonstrativas
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/demos/sistema-de-gestao-empresarial"
                className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/30 hover:bg-black/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                  Sistema de Gestão Empresarial
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Plataforma completa para gestão empresarial com dashboards, RH, financeiro e relatórios.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">PostgreSQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm group-hover:translate-x-1 transition-transform">
                    Explorar Demo →
                  </span>
                  <span className="text-yellow-400 text-xs">Demonstração</span>
                </div>
              </Link>

              <Link
                href="/demos/echoes-of-divinity"
                className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/30 hover:bg-black/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">⚔️</div>
                <h4 className="text-xl font-bold mb-3 text-red-400 group-hover:text-red-300 transition-colors">
                  Echoes of Divinity
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Demo interativa do jogo RPG épico. Evolua seu personagem, gerencie inventário e complete missões divinas.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">Tailwind</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm group-hover:translate-x-1 transition-transform">
                    Jogar Demo →
                  </span>
                  <span className="text-yellow-400 text-xs">Interativo</span>
                </div>
              </Link>

              <Link
                href="/demos/estudapenal"
                className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/30 hover:bg-black/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">⚖️</div>
                <h4 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Estuda Penal
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Plataforma interativa de estudo jurídico. Responda questões, acompanhe progresso e domine o direito penal.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">Tailwind</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm group-hover:translate-x-1 transition-transform">
                    Estudar Demo →
                  </span>
                  <span className="text-yellow-400 text-xs">Educacional</span>
                </div>
              </Link>

              <Link
                href="/demos/kawaii-reverie"
                className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/30 hover:bg-black/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">🌸</div>
                <h4 className="text-xl font-bold mb-3 text-pink-400 group-hover:text-pink-300 transition-colors">
                  Kawaii Reverie
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Playground kawaii interativo. Crie, personalize e anime elementos fofos em um mundo pastel encantador.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded">TypeScript</span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-400 text-xs rounded">Tailwind</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm group-hover:translate-x-1 transition-transform">
                    Explorar Demo →
                  </span>
                  <span className="text-yellow-400 text-xs">Criativo</span>
                </div>
              </Link>
            </div>
          </section>

          {/* Philosophy */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">
              A Arte da Demonstração
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl text-gray-300 italic mb-6">
                &ldquo;A melhor forma de aprender é através da prática. Cada demo é uma oportunidade
                de explorar conceitos complexos de forma interativa e acessível.&rdquo;
              </blockquote>
              <p className="text-gray-300">
                As demonstrações aqui apresentadas não são apenas protótipos — são aplicações funcionais
                que demonstram o potencial das tecnologias modernas aplicadas a problemas reais do mundo
                empresarial e digital.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
            >
              ← Voltar ao Início
            </Link>
            <Link
              href="/projetos"
              className="inline-block px-6 py-3 border border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Explorar Projetos →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
