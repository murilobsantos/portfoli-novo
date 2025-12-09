'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen wuxia-bg smoke-effect">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Logo Principal */}
          <div className="mb-8">
            <Image
              src="/Logo.png"
              alt="Logo de Murilo Santos - Tecelão de Interfaces"
              width={200}
              height={200}
              className="mx-auto wuxia-glow rounded-full border-4 border-red-500/50 shadow-2xl"
              priority
            />
          </div>

          {/* Nome Principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold wuxia-text-glow mb-6 brush-stroke">
            MURILO SANTOS
          </h1>

          {/* Subtítulo */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-red-400 metallic-text">
            TECELÃO DE INTERFACES
          </h2>

          {/* Descrição */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            O código deve ser como água — fluido, adaptável, cortando o caos com elegância.
            Mestre das artes digitais, entrelaçando tecnologia e design em harmonia perfeita.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/projetos"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg rounded-lg wuxia-glow-hover wuxia-border transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                ⚔️ Explorar Projetos
              </span>
            </Link>
            <Link
              href="/devlog"
              className="group px-8 py-4 border-2 border-red-500 text-red-400 font-bold text-lg rounded-lg hover:bg-red-500 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                📜 Ver Devlog
              </span>
            </Link>
          </div>
        </div>

        {/* Elementos Decorativos */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Seção Sobre Mim */}
      <section className="py-20 px-4 oriental-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 wuxia-text-glow">
                SOBRE MIM
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Desenvolvedor frontend apaixonado por criar experiências digitais que transcendem o comum.
                  Especialista em React, Next.js e design de interfaces que combinam funcionalidade e estética.
                </p>
                <p>
                  Minha jornada é guiada pela filosofia wuxia: maestria técnica aliada à elegância espiritual.
                  Cada linha de código é uma pincelada, cada projeto uma obra de arte digital.
                </p>
                <p>
                  Explore meu universo através do devlog, onde compartilho insights, técnicas e evoluções constantes.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 wuxia-border rounded-full overflow-hidden wuxia-glow">
              <Image
                src="/murilo santos.png?v=2"
                alt="Murilo Santos - Tecelão de Interfaces"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                loading="eager"
                unoptimized
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Projetos */}
      <section className="py-20 px-4 oriental-pattern">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 wuxia-text-glow">
            PROJETOS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/projetos/echoes-of-divinity" className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Echoes of Divinity</h3>
              <p className="text-gray-300 mb-4">
                Jogo RPG web com sistema de cultivo wuxia, desenvolvido com Next.js e tecnologias modernas.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-sm rounded">Next.js</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-sm rounded">TypeScript</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-sm rounded">Tailwind</span>
              </div>
              <span className="text-yellow-400 text-sm group-hover:translate-x-1 transition-transform">
                Explorar →
              </span>
            </Link>

            <Link href="/projetos/sistema-de-blog-pessoal" className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Sistema de Blog Pessoal</h3>
              <p className="text-gray-300 mb-4">
                Plataforma completa para criação e gerenciamento de conteúdo pessoal com sistema avançado de posts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded">Next.js</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded">Prisma</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-sm rounded">PostgreSQL</span>
              </div>
              <span className="text-yellow-400 text-sm group-hover:translate-x-1 transition-transform">
                Explorar →
              </span>
            </Link>

            <Link href="/showcases/overdrive-ui" className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Overdrive UI</h3>
              <p className="text-gray-300 mb-4">
                Framework de componentes UI de alta performance com tema cyberpunk para aplicações modernas.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-sm rounded">React</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-sm rounded">CSS-in-JS</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-sm rounded">Storybook</span>
              </div>
              <span className="text-yellow-400 text-sm group-hover:translate-x-1 transition-transform">
                Explorar →
              </span>
            </Link>
          </div>

          <div className="mt-12">
            <Link
              href="/projetos"
              className="inline-block px-8 py-4 border-2 border-red-500 text-red-400 font-bold text-lg rounded-lg hover:bg-red-500 hover:text-black transition-all duration-300"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 wuxia-text-glow">
            聯絡
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-400">
            Contato - O Portal das Mensagens
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Que sua mensagem atravesse os véus digitais como uma flecha certeira.
            Compartilhe suas ideias e juntos forjaremos algo extraordinário.
          </p>

          <div className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-bold text-red-400 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-bold text-red-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-bold text-red-400 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="Sobre o que deseja falar?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-bold text-red-400 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                  placeholder="Conte-me sobre seu projeto, ideia ou pergunta..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg rounded-lg wuxia-glow-hover wuxia-border transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    📨 Enviar Mensagem
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Assinatura Visual */}
          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="wuxia-border rounded-lg p-4 bg-black/30 relative w-36 h-36">
              <Image
                src="/identidade visual.png"
                alt="Identidade Visual de Murilo Santos"
                fill
                sizes="144px"
                className="wuxia-glow object-cover"
              />
            </div>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <Link href="/contato" className="hover:text-red-400 transition-colors">Página Completa de Contato</Link>
              <Link href="/sobre" className="hover:text-red-400 transition-colors">Sobre</Link>
              <a href="https://github.com" className="hover:text-red-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
