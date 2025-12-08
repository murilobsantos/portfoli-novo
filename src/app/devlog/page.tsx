import Link from "next/link";

export default function DevlogPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            开发日志
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Devlog - Jornada das Artes Digitais
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Registros diários da minha evolução técnica. Técnicas aprendidas, desafios superados e insights conquistados.
          </p>
        </header>

        <main className="space-y-8">
          {/* Sample Devlog Entry */}
          <article className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Dia 1: Iniciando a Jornada</h3>
                <time className="text-gray-400">15 de Janeiro, 2024</time>
              </div>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Hoje iniciei a reconstrução completa do meu portfolio. Apaguei tudo e comecei do zero,
                mantendo apenas a visão original: um portfolio wuxia/oriental que serve como vitrina de habilidades.
              </p>
              <h4 className="text-xl font-bold text-red-400 mb-2">Técnicas Aprendidas:</h4>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Configuração de projeto Next.js com TypeScript e Tailwind CSS</li>
                <li>• Implementação de tema oriental com fontes chinesas (Noto Sans SC)</li>
                <li>• Criação de efeitos visuais wuxia (glows, borders, gradients)</li>
              </ul>
              <h4 className="text-xl font-bold text-red-400 mb-2">Próximos Passos:</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Criar páginas para projetos e habilidades</li>
                <li>• Implementar navegação oriental</li>
                <li>• Adicionar conteúdo dinâmico</li>
              </ul>
            </div>
          </article>

          {/* Placeholder for more entries */}
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">Em Construção</h3>
            <p className="text-gray-500">Mais entradas serão adicionadas conforme avanço na jornada</p>
          </div>
        </main>

        <footer className="text-center mt-16">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-600 to-red-600 text-white font-bold rounded-lg hover:from-yellow-700 hover:to-red-700 transition-all duration-300"
          >
            ← Voltar ao Início
          </Link>
        </footer>
      </div>
    </div>
  );
}
