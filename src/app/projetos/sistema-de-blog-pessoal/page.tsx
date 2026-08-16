import Image from 'next/image'
import Link from 'next/link'

export default function SistemaDeBlogPessoalPage() {
  return (
    <div className="min-h-screen wuxia-bg smoke-effect">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
              📝 Sistema de Blog Pessoal
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-400">
              Conteúdo, posts e organização — como uma tecelagem digital
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Esta página é um placeholder funcional para a rota que estava gerando 404 em produção.
              Se quiser, posso substituir pelos detalhes reais (prints, features e links) do projeto.
            </p>
          </header>

          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Visão Geral</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• CRUD de posts e gerenciamento de conteúdo</li>
                  <li>• Estrutura para categorias, comentários e leitura</li>
                  <li>• Base preparada para integração com banco de dados</li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full">
                    Prisma
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded-full">
                    Tailwind CSS
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="wuxia-border rounded-lg overflow-hidden wuxia-glow bg-black/30">
                    <div className="relative w-full aspect-[16/10]">
                      <Image
                        src="/image.png"
                        alt="Imagem ilustrativa do Sistema de Blog Pessoal"
                        fill
                        sizes="(max-width: 768px) 100vw, 384px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    * Imagem ilustrativa (pode ser trocada pelo preview real do projeto).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Próximos passos</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-5">
                <div className="text-lg font-bold text-white mb-2">Adicionar screenshots</div>
                <p className="text-gray-300 text-sm">
                  Incluir imagens do UI/fluxo (lista, editor, página do post, etc.).
                </p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-5">
                <div className="text-lg font-bold text-white mb-2">Detalhar features</div>
                <p className="text-gray-300 text-sm">
                  Documentar arquitetura, rotas, autenticação (se houver) e stack.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projetos"
                className="px-8 py-4 border-2 border-red-500 text-red-400 font-bold rounded-lg hover:bg-red-500 hover:text-black transition-all duration-300"
              >
                ← Voltar aos Projetos
              </Link>
              <Link
                href="/contato"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300"
              >
                Falar sobre o projeto →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

