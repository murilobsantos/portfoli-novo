chimport Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Universo de Histórias - A Tapeçaria Viva das Narrativas',
  description: 'Uma plataforma interativa para criação e compartilhamento de histórias colaborativas.',
}

export default function UniversoDeHistoriasPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            故事宇宙
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">
            Universo de Histórias
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Onde cada voz encontra seu lugar na grande tapeçaria da narrativa humana. Uma plataforma viva onde
            histórias nascem, crescem e se entrelaçam em harmonia infinita.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Project Overview */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">
              A Tapeçaria Viva das Narrativas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-green-400 mb-4">Visão do Projeto</h4>
                <p className="text-gray-300 mb-4">
                  Universo de Histórias transcende o conceito de plataforma — é um ecossistema vivo onde narrativas
                  respiram e evoluem. Cada história não é estática, mas um organismo digital que cresce através da
                  colaboração e imaginação coletiva.
                </p>
                <p className="text-gray-300">
                  Aqui, escritores não apenas criam, mas cultivam mundos. Leitores não apenas consomem, mas participam
                  ativamente da evolução das histórias que amam.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-400 mb-4">Status Atual</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sistema de Colaboração</span>
                    <span className="text-green-400">✓ Completo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Interface de Criação</span>
                    <span className="text-yellow-400">Em Desenvolvimento</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Comunidade Interativa</span>
                    <span className="text-blue-400">Planejada</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Arts */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">
              As Artes da Criação Coletiva
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-lg font-bold text-green-400 mb-2">Semente da Colaboração</h4>
                <p className="text-gray-300 text-sm">Next.js como solo fértil, nutrindo o crescimento orgânico das narrativas compartilhadas.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h4 className="text-lg font-bold text-green-400 mb-2">Pincel da Expressão</h4>
                <p className="text-gray-300 text-sm">TypeScript como pincel preciso, garantindo que cada palavra seja colocada com intenção perfeita.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h4 className="text-lg font-bold text-green-400 mb-2">Teia da Conexão</h4>
                <p className="text-gray-300 text-sm">React como teia viva, conectando criadores e leitores em uma rede de significado compartilhado.</p>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">
              A Filosofia da Criação Compartilhada
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-xl text-gray-300 italic mb-6">
                &ldquo;Histórias não pertencem a indivíduos — elas pertencem à humanidade. Cada voz adiciona cor à
                tapeçaria, cada colaboração enriquece o tecido da imaginação coletiva.&rdquo;
              </blockquote>
              <p className="text-gray-300">
                Universo de Histórias não é sobre posse, mas sobre compartilhamento. É um jardim digital onde ideias
                florescem através da polinização cruzada de mentes criativas, criando algo maior que a soma das partes.
              </p>
            </div>
          </section>

          {/* Features */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">
              Os Jardins da Imaginação
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-green-400 mb-2">Colaboração Orgânica</h4>
                <p className="text-gray-300 text-sm">Escritores trabalhando juntos para cultivar narrativas ricas e complexas.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌿</div>
                <h4 className="font-bold text-green-400 mb-2">Crescimento Evolutivo</h4>
                <p className="text-gray-300 text-sm">Histórias que evoluem naturalmente através de contribuições comunitárias.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔗</div>
                <h4 className="font-bold text-green-400 mb-2">Conexões Narrativas</h4>
                <p className="text-gray-300 text-sm">Universos interconectados onde histórias se entrelaçam e influenciam.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎭</div>
                <h4 className="font-bold text-green-400 mb-2">Personagens Coletivos</h4>
                <p className="text-gray-300 text-sm">Serem digitais moldados pela imaginação de múltiplos criadores.</p>
              </div>
            </div>
          </section>

          {/* Development Insights */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">
              Lições da Jardinagem Digital
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-bold text-green-400 mb-2">Arquitetura Orgânica</h4>
                <p className="text-gray-300">
                  Plataformas sociais devem crescer como jardins, não como máquinas. Sistemas que se adaptam ao
                  comportamento natural dos usuários criam experiências mais autênticas.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-bold text-green-400 mb-2">Equilíbrio Criativo</h4>
                <p className="text-gray-300">
                  Facilitar a criação coletiva requer equilíbrio delicado entre estrutura e liberdade. Muito controle
                  sufoca a criatividade; pouca orientação leva ao caos.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-bold text-green-400 mb-2">Comunidade como Ecossistema</h4>
                <p className="text-gray-300">
                  Construir comunidades é como cultivar ecossistemas. Cada membro é uma espécie valiosa que contribui
                  para a saúde e diversidade do todo.
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
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-lg hover:from-green-700 hover:to-green-900 transition-all duration-300"
            >
              ← Voltar aos Projetos
            </Link>
            <Link
              href="/devlog"
              className="inline-block px-6 py-3 border border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Seguir a Jornada no Devlog →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
