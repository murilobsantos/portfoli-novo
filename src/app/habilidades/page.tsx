import Link from "next/link";

export default function HabilidadesPage() {
  const skillCategories = [
    {
      title: "Técnicas de Cultivo Digital",
      icon: "💻",
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "Arte da Interface Serena (React/Next.js)", level: 90 },
        { name: "Espada da Precisão Absoluta (TypeScript)", level: 85 },
        { name: "Punho da Forja Digital (Node.js)", level: 80 },
        { name: "Caminho do Dragão Escondido (Python)", level: 75 }
      ]
    },
    {
      title: "Estilos de Design",
      icon: "🎨",
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Photoshop", level: 75 }
      ]
    },
    {
      title: "Técnicas Avançadas",
      icon: "⚡",
      color: "from-yellow-600 to-orange-600",
      skills: [
        { name: "APIs REST/GraphQL", level: 85 },
        { name: "Banco de Dados", level: 70 },
        { name: "DevOps/CI/CD", level: 40 },
        { name: "Testes", level: 55 }
      ]
    },
    {
      title: "Artes Orientais",
      icon: "🏮",
      color: "from-red-600 to-yellow-600",
      skills: [
        { name: "Game Development", level: 45 },
        { name: "3D Modeling", level: 45 },
        { name: "Animação", level: 60 },
        { name: "Áudio Design", level: 55 }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            武艺技能
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Técnicas de Cultivo - As Artes Dominadas
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada técnica representa anos de treinamento, batalhas travadas e artes aperfeiçoadas no caminho do cultivo digital.
          </p>
        </header>

        <main className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{category.icon}</div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-yellow-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>

        <section className="mt-16 text-center">
          <div className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Filosofia das Técnicas de Cultivo</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-red-400 mb-2">Precisão</h4>
                <p className="text-gray-300">Cada linha de código é escrita com intenção e propósito.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h4 className="text-xl font-bold text-red-400 mb-2">Paixão</h4>
                <p className="text-gray-300">O desenvolvimento é uma arte que queima no coração.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h4 className="text-xl font-bold text-red-400 mb-2">Excelência</h4>
                <p className="text-gray-300">Busco a perfeição em cada projeto, cada função, cada pixel.</p>
              </div>
            </div>
          </div>
        </section>

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
