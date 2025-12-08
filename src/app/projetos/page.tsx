import Link from "next/link";

export default function ProjetosPage() {
  const projects = [
    {
      title: "Echoes of Divinity",
      description: "Um jogo de RPG épico ambientado em um mundo de fantasia oriental, onde jogadores exploram reinos antigos e enfrentam deuses esquecidos.",
      tech: ["React", "TypeScript", "Three.js", "Node.js"],
      link: "/projetos/echoes-of-divinity",
      status: "Em Desenvolvimento",
      icon: "🏛️"
    },
    {
      title: "Sistema de Blog Pessoal",
      description: "Plataforma completa para criação e gerenciamento de conteúdo pessoal, com sistema de posts, comentários e analytics.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      link: "/projetos/sistema-de-blog-pessoal",
      status: "Demonstração",
      icon: "📝"
    },
    {
      title: "Estuda Penal",
      description: "Aplicativo educacional para estudo do direito penal brasileiro, com flashcards interativos e simulados.",
      tech: ["React Native", "Firebase", "TypeScript"],
      link: "/showcases/estudapenal",
      status: "Showcase",
      icon: "⚖️"
    },
    {
      title: "Overdrive UI",
      description: "Framework de componentes UI de alta performance com tema cyberpunk, otimizado para aplicações web modernas.",
      tech: ["React", "CSS-in-JS", "Storybook", "Vite"],
      link: "/showcases/overdrive-ui",
      status: "Showcase",
      icon: "🚀"
    },

    {
      title: "Universo de Histórias",
      description: "Plataforma interativa para criação colaborativa de histórias, com sistema de mundos compartilhados.",
      tech: ["Next.js", "Socket.io", "MongoDB", "WebRTC"],
      link: "/showcases/universo-de-historias",
      status: "Showcase",
      icon: "📚"
    },
    {
      title: "Kawaii Reverie",
      description: "Jogo casual de puzzle com estética kawaii, onde jogadores resolvem quebra-cabeças em um mundo de sonhos.",
      tech: ["Phaser.js", "TypeScript", "WebGL"],
      link: "/showcases/kawaii-reverie",
      status: "Showcase",
      icon: "🎮"
    },
    {
      title: "Sistema de Gestão Empresarial",
      description: "ERP completo para pequenas e médias empresas, com módulos de vendas, estoque, financeiro e RH.",
      tech: ["React", "Node.js", "MySQL", "Docker"],
      link: "/demos/sistema-de-gestao-empresarial",
      status: "Demonstração",
      icon: "🏢"
    }
  ];

  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            作品集
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            Projetos - As Batalhas Vencidas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada projeto representa uma jornada única, uma batalha contra os limites da tecnologia e da criatividade.
            Explore as demonstrações das artes que domino.
          </p>
        </header>

        <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  project.status === 'Em Desenvolvimento' ? 'bg-blue-600 text-white' :
                  project.status === 'Demonstração' ? 'bg-green-600 text-white' :
                  'bg-purple-600 text-white'
                }`}>
                  {project.status}
                </span>
                <span className="text-yellow-400 text-sm group-hover:translate-x-1 transition-transform">
                  Explorar →
                </span>
              </div>
            </Link>
          ))}
        </main>

        <section className="mt-16 text-center">
          <div className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Metodologia de Desenvolvimento</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Planejamento</h4>
                <p className="text-gray-300 text-sm">Cada projeto começa com uma visão clara e arquitetura sólida.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Execução</h4>
                <p className="text-gray-300 text-sm">Código limpo, eficiente e escalável é a marca de minha arte.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Testes</h4>
                <p className="text-gray-300 text-sm">Qualidade garantida através de testes rigorosos e feedback contínuo.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Deploy</h4>
                <p className="text-gray-300 text-sm">Entrega perfeita, com monitoramento e otimização constantes.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center mt-16">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-yellow-700 transition-all duration-300"
          >
            ← Voltar ao Início
          </Link>
        </footer>
      </div>
    </div>
  );
}
