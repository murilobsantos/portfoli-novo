import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Overdrive UI - Framework de Componentes Cyberpunk',
  description: 'Framework de componentes UI de alta performance com tema cyberpunk para aplicações modernas.',
}

export default function OverdriveUIPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            超速界面
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">
            Overdrive UI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma arma digital para desenvolvedores modernos. Acelere sua criação com componentes de alta performance
            que fundem velocidade e estética cyberpunk em harmonia perfeita.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Project Overview */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">
              A Arma Digital do Mestre
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-purple-400 mb-4">Visão do Projeto</h4>
                <p className="text-gray-300 mb-4">
                  Overdrive UI é mais que um framework — é uma arma digital forjada para desenvolvedores que exigem
                  excelência. Cada componente é uma lâmina afiada, projetada para cortar através da complexidade e
                  entregar interfaces que não apenas funcionam, mas impressionam.
                </p>
                <p className="text-gray-300">
                  Inspirado na estética cyberpunk, o framework transforma ideias em experiências digitais com velocidade
                  sobre-humana, permitindo que desenvolvedores foquem no que realmente importa: inovação.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-400 mb-4">Status Atual</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Biblioteca de Componentes</span>
                    <span className="text-green-400">✓ Completa</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sistema de Temas</span>
                    <span className="text-yellow-400">Em Desenvolvimento</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Documentação</span>
                    <span className="text-blue-400">Planejada</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Arts */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">
              As Armas Digitais do Mestre
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚛️</div>
                <h4 className="text-lg font-bold text-purple-400 mb-2">Lâmina da Reatividade</h4>
                <p className="text-gray-300 text-sm">React como lâmina afiada, criando interfaces que respondem instantaneamente à intenção do usuário.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-lg font-bold text-purple-400 mb-2">Essência da Estilização</h4>
                <p className="text-gray-300 text-sm">CSS-in-JS como sangue digital, infundindo estilos diretamente nos componentes com precisão cirúrgica.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-lg font-bold text-purple-400 mb-2">Galeria dos Elementos</h4>
                <p className="text-gray-300 text-sm">Storybook como museu digital interativo, exibindo cada componente em sua glória cyberpunk.</p>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">
              A Filosofia da Velocidade Cibernética
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl text-gray-300 italic mb-6">
                &ldquo;Velocidade é poder. Design é arma. Cada componente é uma extensão da vontade do desenvolvedor,
                forjado para dominar o caos digital com elegância sobre-humana.&rdquo;
              </blockquote>
              <p className="text-gray-300">
                Overdrive UI não é apenas sobre criar interfaces bonitas — é sobre forjar armas digitais que amplificam
                o poder criativo. Em um mundo onde a velocidade define o sucesso, este framework é o turbo que transforma
                desenvolvedores em mestres cyberpunk.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">
              Os Modos de Operação
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🔧</div>
                <h4 className="font-bold text-purple-400 mb-2">Sistema Modular</h4>
                <p className="text-gray-300 text-sm">Componentes que se adaptam a qualquer campo de batalha digital.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌃</div>
                <h4 className="font-bold text-purple-400 mb-2">Tema Cyberpunk</h4>
                <p className="text-gray-300 text-sm">Estética neon e sombra que mergulha usuários no futuro.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-purple-400 mb-2">Performance Máxima</h4>
                <p className="text-gray-300 text-sm">Interfaces que carregam em velocidade da luz.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">👨‍💻</div>
                <h4 className="font-bold text-purple-400 mb-2">DX Otimizada</h4>
                <p className="text-gray-300 text-sm">APIs intuitivas e documentação abrangente.</p>
              </div>
            </div>
          </section>

          {/* Development Insights */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-purple-400 mb-6 text-center">
              Lições da Forja Cibernética
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-bold text-purple-400 mb-2">O Equilíbrio do Poder</h4>
                <p className="text-gray-300">
                  Construir frameworks requer equilíbrio entre poder bruto e controle elegante. Cada componente deve
                  ser uma ferramenta precisa, não uma arma indiscriminada.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-bold text-purple-400 mb-2">Escalabilidade Cibernética</h4>
                <p className="text-gray-300">
                  Frameworks devem crescer com a ambição do desenvolvedor. Sistemas que começam pequenos mas escalam
                  para o infinito são os verdadeiros mestres da arquitetura digital.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-bold text-purple-400 mb-2">Documentação Viva</h4>
                <p className="text-gray-300">
                  A documentação não é estática — ela evolui com o framework, guiando desenvolvedores através de
                  jornadas cada vez mais complexas e recompensadoras.
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
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
            >
              ← Voltar aos Projetos
            </Link>
            <Link
              href="/devlog"
              className="inline-block px-6 py-3 border border-purple-500 text-purple-400 font-bold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Seguir a Jornada no Devlog →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
