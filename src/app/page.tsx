export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 oriental-pattern">
      <main className="text-center max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold wuxia-text-glow mb-6 font-serif">
            武侠
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Mestre das Artes Digitais
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bem-vindo ao meu domínio digital, onde a maestria técnica encontra a elegância oriental.
            Explore meu devlog e testemunhe demonstrações de projetos que transcendem o comum.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <a
            href="/devlog"
            className="group block p-8 wuxia-border wuxia-glow rounded-lg bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl mb-4">📜</div>
            <h3 className="text-2xl font-bold mb-2 text-yellow-400">Devlog</h3>
            <p className="text-gray-300">
              Jornada diária das artes digitais. Técnicas, insights e evolução constante.
            </p>
          </a>

          <a
            href="/projetos"
            className="group block p-8 wuxia-border wuxia-glow rounded-lg bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-4xl mb-4">⚔️</div>
            <h3 className="text-2xl font-bold mb-2 text-red-400">Projetos</h3>
            <p className="text-gray-300">
              Demonstrações de habilidades. Cada projeto uma batalha vencida.
            </p>
          </a>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <a
            href="/habilidades"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-600 text-black font-bold text-xl rounded-lg wuxia-glow hover:from-red-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-110"
          >
            Explorar Habilidades
          </a>
        </div>
      </main>
    </div>
  );
}
