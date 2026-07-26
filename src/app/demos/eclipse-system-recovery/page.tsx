import Link from "next/link";

const capabilities = [
  ["🧹", "Limpeza auditável", "Perfis seguro e completo, prévia de espaço e proteção a diretórios pessoais."],
  ["🩺", "Diagnóstico e reparo", "Hardware, rede, SSD, drivers, relatórios e comandos de reparo do Windows."],
  ["📋", "Rastreabilidade", "Backups, logs, relatórios em HTML/JSON/CSV e confirmação antes de ações sensíveis."],
];

export default function EclipseSystemRecoveryPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <div className="text-6xl mb-5">🛠️</div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Windows utility</p>
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-5 font-serif">Eclipse System Recovery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aplicativo de manutenção e diagnóstico para Windows, construído para executar tarefas sensíveis com transparência.
          </p>
          <span className="inline-block mt-6 px-3 py-1 rounded-full bg-cyan-700 text-cyan-50 text-sm font-bold">Versão 1.0</span>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          {capabilities.map(([icon, title, description]) => (
            <article key={title} className="wuxia-border wuxia-glow rounded-lg p-6 bg-black/50">
              <div className="text-4xl mb-4">{icon}</div>
              <h2 className="text-xl font-bold text-cyan-300 mb-3">{title}</h2>
              <p className="text-gray-300 text-sm">{description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 wuxia-border rounded-lg p-8 bg-slate-950/70 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Estado do projeto</h2>
          <p className="text-gray-300 leading-relaxed">
            A versão 1.0 está pronta para testes controlados. As próximas melhorias dependem de feedback de uso,
            assinatura comercial e avaliação de um instalador.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projetos" className="px-5 py-3 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white font-bold transition-colors">
              Ver outros projetos
            </Link>
            <Link href="/devlog" className="px-5 py-3 rounded-lg border border-cyan-400 text-cyan-200 hover:bg-cyan-950 transition-colors">
              Acompanhar devlog
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
