import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Echoes of Divinity - O Espírito de Lâmina Serena',
  description: 'Um jogo de RPG épico ambientado em um mundo de fantasia oriental, onde jogadores exploram reinos antigos e enfrentam deuses esquecidos.',
}

export default function EchoesOfDivinityPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            神的回响
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            Echoes of Divinity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Onde todas as mitologias colidem em um mundo aberto infinito. Uma jornada cósmica onde cada escolha molda a realidade, influenciando a história como um todo através dos ciclos eternos da existência.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Project Overview */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              A Jornada do Espírito
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-red-400 mb-4">Visão do Projeto</h4>
                <p className="text-gray-300 mb-4">
                  Echoes of Divinity é um mundo aberto infinito onde todas as mitologias colidem em uma tapeçaria cósmica. O jogador não segue um caminho predeterminado — cria sua própria jornada, influenciando a história como um todo através das escolhas que moldam a realidade.
                </p>
                <p className="text-gray-300">
                  Cada decisão reverbera através dos ciclos eternos da existência, alterando alianças divinas, reescrevendo lendas antigas e determinando o destino de deuses e mortais. O jogo transcende o entretenimento para se tornar uma jornada de autodescoberta e criação mítica.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-400 mb-4">Status Atual</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Arquitetura Core</span>
                    <span className="text-green-400">✓ Completa</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sistema de Batalha</span>
                    <span className="text-yellow-400">Em Desenvolvimento</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Mundo Interativo</span>
                    <span className="text-yellow-400">Em Desenvolvimento</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Narrativa Principal</span>
                    <span className="text-blue-400">Planejada</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Arts */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              As Artes Digitais Dominadas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚛️</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Arte da Interface Serena</h4>
                <p className="text-gray-300 text-sm">React como extensão da vontade, criando interfaces que fluem como água viva.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Espada da Precisão Absoluta</h4>
                <p className="text-gray-300 text-sm">TypeScript como lâmina afiada, garantindo que cada linha de código seja uma extensão perfeita da intenção.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Ritual dos Portais Convergentes</h4>
                <p className="text-gray-300 text-sm">Next.js como portais entre mundos, conectando experiências digitais com fluidez espiritual.</p>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              A Filosofia por Trás da Lâmina
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl text-gray-300 italic mb-6">
                &ldquo;Força é fluxo. Domínio é repetição. Cada batalha vencida é uma lição aprendida, cada linha de código é um passo na jornada do mestre.&rdquo;
              </blockquote>
              <p className="text-gray-300">
                Echoes of Divinity não é apenas sobre vencer monstros ou completar quests. É sobre a transformação pessoal através da prática disciplinada, onde cada decisão reflete o crescimento do jogador como cultivador digital.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Os Caminhos da Jornada Cósmica
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌌</div>
                <h4 className="font-bold text-red-400 mb-2">Mundo Aberto Infinito</h4>
                <p className="text-gray-300 text-sm">Um universo onde todas as mitologias colidem e se entrelaçam.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚔️</div>
                <h4 className="font-bold text-red-400 mb-2">Batalhas Fluidas</h4>
                <p className="text-gray-300 text-sm">Combate que honra o fluxo da energia, não a força bruta.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="font-bold text-red-400 mb-2">Escolhas que Moldam a Realidade</h4>
                <p className="text-gray-300 text-sm">Cada decisão influencia a história como um todo através dos ciclos eternos.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎭</div>
                <h4 className="font-bold text-red-400 mb-2">Personagens Profundos</h4>
                <p className="text-gray-300 text-sm">Serem com almas digitais, cada um carregando sua própria filosofia.</p>
              </div>
            </div>
          </section>

          {/* Development Insights */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Lições da Forja Digital
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-lg font-bold text-red-400 mb-2">O Poder da Arquitetura</h4>
                <p className="text-gray-300">
                  Construir um mundo digital requer a mesma disciplina que forjar uma espada. Cada componente deve servir ao todo, criando harmonia através da estrutura.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-lg font-bold text-red-400 mb-2">Fluxo Sobre Força</h4>
                <p className="text-gray-300">
                  A verdadeira força vem da adaptação, não da rigidez. Sistemas que fluem como água vencem aqueles que se quebram como pedra.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-lg font-bold text-red-400 mb-2">A Arte da Iteração</h4>
                <p className="text-gray-300">
                  Cada versão é uma batalha vencida. O domínio vem da repetição consciente, transformando erros em sabedoria.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/projetos"
              className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-yellow-700 transition-all duration-300"
            >
              ← Voltar aos Projetos
            </Link>
            <Link
              href="/devlog"
              className="inline-block px-6 py-3 border border-red-500 text-red-400 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Seguir a Jornada no Devlog →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
