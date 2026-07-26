import Link from "next/link";
import { DevlogClock } from "@/components/DevlogClock";
import { devlogEntries } from "@/data/devlog";

export default function DevlogPage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">开发日志</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">Devlog — Jornada das Artes Digitais</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Uma linha do tempo das decisões, entregas e próximos passos que moldam os projetos.
          </p>
          <DevlogClock />
          <p className="mt-2 text-sm text-gray-400">
            Cada entrega relevante deve atualizar a entrada mais recente e registrar um próximo passo concreto.
          </p>
        </header>

        <main className="relative space-y-8 before:absolute before:left-5 before:top-2 before:bottom-12 before:w-px before:bg-yellow-500/40 md:before:left-8">
          {devlogEntries.map((entry) => (
            <article key={entry.id} className="relative pl-14 md:pl-20">
              <div className="absolute left-0 top-7 grid h-10 w-10 place-items-center rounded-full border border-yellow-400 bg-slate-950 text-xl md:left-3">
                {entry.icon}
              </div>
              <div className="wuxia-border wuxia-glow rounded-lg p-6 md:p-8 bg-black/50">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-red-300">{entry.phase}</p>
                    <h3 className="mt-2 text-2xl font-bold text-yellow-400">{entry.title}</h3>
                  </div>
                  <time className="shrink-0 text-sm text-gray-400" dateTime={entry.dateTime}>
                    {entry.period}
                  </time>
                </div>

                <p className="mt-4 text-gray-300 leading-relaxed">{entry.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-gray-300">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2"><span className="text-yellow-400">✦</span>{highlight}</li>
                  ))}
                </ul>
                <div className="mt-6 rounded-md border border-cyan-500/30 bg-cyan-950/30 p-4 text-sm text-cyan-100">
                  <span className="font-bold text-cyan-300">Próximo passo: </span>{entry.nextStep}
                </div>
                {entry.current && (
                  <span className="mt-5 inline-block rounded-full bg-green-700 px-3 py-1 text-xs font-bold text-white">Entrada atual</span>
                )}
              </div>
            </article>
          ))}
        </main>

        <section className="mt-16 wuxia-border rounded-lg p-6 bg-black/50 text-center">
          <h3 className="text-xl font-bold text-yellow-400">Como este devlog evolui</h3>
          <p className="mt-3 text-gray-300">
            O histórico antigo foi condensado em marcos. Daqui para frente, cada entrada deve registrar contexto, entrega, aprendizado e próximo passo.
          </p>
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
