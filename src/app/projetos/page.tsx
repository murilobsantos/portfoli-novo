import Link from "next/link";
import { getPublicRepositories } from "@/lib/github";

const featuredProjects = [
  {
    title: "Eclipse System Recovery",
    description:
      "Ferramenta Windows de diagnóstico, manutenção e relatórios com interface gráfica, backups e perfis de limpeza segura.",
    tech: ["PowerShell", "WPF", "Windows"],
    link: "/demos/eclipse-system-recovery",
    status: "Versão 1.0",
    icon: "🛠️",
  },
  {
    title: "Echoes of Divinity",
    description:
      "Protótipo de RPG 2D focado em exploração, ecos, combate e uma estética de mitologia quebrada.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "/projetos/echoes-of-divinity-projeto",
    status: "Em desenvolvimento",
    icon: "🏛️",
  },
  {
    title: "Universo de Histórias",
    description:
      "Plataforma de leitura e criação de histórias. O próximo marco é o MVP com autenticação e publicação.",
    tech: ["React", "Vite", "Backend MVP"],
    link: "/showcases/universo-de-historias",
    status: "Em construção",
    icon: "📚",
  },
];

function formatUpdatedAt(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export default async function ProjetosPage() {
  const repositories = await getPublicRepositories();

  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            作品集
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            Projetos — Batalhas Vencidas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Projetos autorais, experiências em construção e repositórios ativos.
            Cada card mostra uma etapa real da minha jornada como desenvolvedor.
          </p>
        </header>

        <section aria-labelledby="featured-projects">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">Em destaque</p>
              <h2 id="featured-projects" className="text-3xl font-bold text-white">
                Projetos autorais
              </h2>
            </div>
            <span className="text-sm text-gray-400">Atualizado em cada sprint</span>
          </div>

          <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                className="group block wuxia-border wuxia-glow rounded-lg p-6 bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((technology) => (
                    <span key={technology} className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-600 text-white">
                    {project.status}
                  </span>
                  <span className="text-yellow-400 text-sm group-hover:translate-x-1 transition-transform">Explorar →</span>
                </div>
              </Link>
            ))}
          </main>
        </section>

        <section className="mt-20" aria-labelledby="github-projects">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">GitHub</p>
              <h2 id="github-projects" className="text-3xl font-bold text-white">Repositórios públicos</h2>
            </div>
            <a
              href="https://github.com/murilobsantos?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-yellow-400 hover:text-yellow-300"
            >
              Ver perfil no GitHub ↗
            </a>
          </div>

          {repositories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repositories.map((repository) => (
                <a
                  key={repository.id}
                  href={repository.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group wuxia-border rounded-lg p-6 bg-slate-950/70 hover:bg-black/80 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-lg text-yellow-400 group-hover:text-yellow-300">{repository.name}</h3>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-3 min-h-12">
                    {repository.description ?? "Repositório em desenvolvimento — detalhes no GitHub."}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repository.language && (
                      <span className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-200">{repository.language}</span>
                    )}
                    {repository.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-red-950 text-xs rounded-full text-red-200">{topic}</span>
                    ))}
                  </div>
                  <div className="mt-5 text-xs text-gray-400">
                    Atualizado em {formatUpdatedAt(repository.updated_at)} · ★ {repository.stargazers_count}
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="wuxia-border rounded-lg p-6 bg-black/50 text-gray-300">
              Os repositórios não puderam ser carregados agora. Visite o perfil do GitHub pelo link acima.
            </div>
          )}
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
