import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estuda Penal - Mestre da Justiça Digital',
  description: 'Sistema de estudo para concursos jurídicos com foco em direito penal.',
}

export default function EstudaPenalPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            律法之鑰
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            Estuda Penal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A forja sagrada onde mentes jurídicas são temperadas. Onde a sabedoria ancestral da justiça encontra
            a precisão digital, forjando mestres da lei através da disciplina e do conhecimento.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Project Overview */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
              A Forja da Justiça Digital
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-cyan-400 mb-4">Visão do Projeto</h4>
                <p className="text-gray-300 mb-4">
                  Estuda Penal transcende o conceito de plataforma de estudo — é uma jornada de domínio jurídico.
                  Cada lição é uma batalha vencida, cada conceito dominado é uma vitória contra a ignorância da lei.
                  O sistema combina a profundidade do estudo tradicional com a eficiência da tecnologia moderna.
                </p>
                <p className="text-gray-300">
                  Desenvolvido especificamente para concursos jurídicos, o foco no direito penal cria uma experiência
                  imersiva onde estudantes não apenas memorizam, mas compreendem a essência da justiça criminal.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-cyan-400 mb-4">Status Atual</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Base de Dados Jurídica</span>
                    <span className="text-green-400">✓ Completa</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Algoritmos de Estudo</span>
                    <span className="text-yellow-400">Em Desenvolvimento</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sistema de Certificação</span>
                    <span className="text-blue-400">Planejado</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Arts */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
              As Ferramentas do Mestre Jurídico
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h4 className="text-lg font-bold text-cyan-400 mb-2">Balança da Justiça</h4>
                <p className="text-gray-300 text-sm">Next.js como balança equilibrada, distribuindo conhecimento com justiça e precisão.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📜</div>
                <h4 className="text-lg font-bold text-cyan-400 mb-2">Pergaminho da Lei</h4>
                <p className="text-gray-300 text-sm">TypeScript como pergaminho sagrado, garantindo que cada linha de código seja uma lei imutável.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h4 className="text-lg font-bold text-cyan-400 mb-2">Templo do Conhecimento</h4>
                <p className="text-gray-300 text-sm">React como templo vivo, abrigando o conhecimento jurídico em uma estrutura sagrada.</p>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
              A Filosofia da Justiça Temperada
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl text-gray-300 italic mb-6">
                &ldquo;Justiça não é dada — é forjada. Conhecimento não é adquirido — é conquistado. Cada lei dominada
                é uma batalha vencida na guerra contra a ignorância jurídica.&rdquo;
              </blockquote>
              <p className="text-gray-300">
                Estuda Penal não é apenas uma ferramenta de estudo — é um dojo digital onde aspirantes a juristas
                cultivam sua compreensão da justiça. Cada conceito penal é uma lição de equilíbrio entre rigor e
                compaixão, entre lei e humanidade.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
              Os Caminhos da Justiça
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-bold text-cyan-400 mb-2">Biblioteca Jurídica Viva</h4>
                <p className="text-gray-300 text-sm">Base de dados interconectada com jurisprudência, doutrina e legislação atualizada.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-cyan-400 mb-2">Estudo Adaptativo</h4>
                <p className="text-gray-300 text-sm">Algoritmos inteligentes que se ajustam ao ritmo e dificuldades individuais.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚔️</div>
                <h4 className="font-bold text-cyan-400 mb-2">Simulações Jurídicas</h4>
                <p className="text-gray-300 text-sm">Casos práticos que colocam estudantes em situações reais de decisão judicial.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold text-cyan-400 mb-2">Certificação de Maestria</h4>
                <p className="text-gray-300 text-sm">Sistema de avaliação que reconhece e valida o domínio jurídico alcançado.</p>
              </div>
            </div>
          </section>

          {/* Development Insights */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
              Lições da Forja Jurídica
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h4 className="text-lg font-bold text-cyan-400 mb-2">Arquitetura da Justiça</h4>
                <p className="text-gray-300">
                  Construir sistemas educacionais jurídicos requer a mesma precisão que elaborar leis.
                  Cada componente deve servir à verdade e à justiça do conhecimento.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h4 className="text-lg font-bold text-cyan-400 mb-2">Adaptação à Mente Jurídica</h4>
                <p className="text-gray-300">
                  Sistemas de aprendizado devem fluir como jurisprudência — adaptando-se aos precedentes
                  do progresso individual enquanto mantêm a consistência estrutural.
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-6">
                <h4 className="text-lg font-bold text-cyan-400 mb-2">A Arte da Avaliação</h4>
                <p className="text-gray-300">
                  Medir o domínio jurídico vai além de testes — requer compreensão profunda de como
                  o conhecimento se manifesta em julgamento e decisão.
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
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white font-bold rounded-lg hover:from-cyan-700 hover:to-cyan-900 transition-all duration-300"
            >
              ← Voltar aos Projetos
            </Link>
            <Link
              href="/devlog"
              className="inline-block px-6 py-3 border border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Seguir a Jornada no Devlog →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
