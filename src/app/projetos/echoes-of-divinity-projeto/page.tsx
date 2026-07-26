import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Echoes of Divinity — Vertical Slice',
  description: 'Protótipo 2D top-down de exploração e combate, em desenvolvimento.',
}

const features = [
  ['Cinco salas conectadas', 'Câmara do Despertar, Guerra, Memória, Liberdade e Santuário final.'],
  ['Ecos e afinidades', 'Absorver ou dissipar ecos altera ordem, memória e liberdade.'],
  ['Combate e dons', 'Ataque, habilidades desbloqueáveis, ruptura e finais baseados na jornada.'],
  ['Direção de arte top-down', 'Câmara pixelada do Panteão Quebrado, personagens, ruínas, HUD e efeitos de impacto.'],
]

export default function EchoesOfDivinityPage() {
  return <main className="min-h-screen p-8 oriental-pattern"><div className="max-w-5xl mx-auto">
    <header className="text-center mb-14"><p className="text-cyan-300 font-bold tracking-[.2em] text-sm">PROTÓTIPO EM DESENVOLVIMENTO</p><h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mt-4 font-serif">Echoes of Divinity</h1><p className="mt-5 text-xl text-gray-300 max-w-3xl mx-auto">Um vertical slice 2D sobre ecos divinos, escolhas de afinidade e uma travessia curta até o Santuário.</p></header>
    <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50"><h2 className="text-3xl font-bold text-yellow-400">Estado atual</h2><p className="mt-4 max-w-3xl leading-7 text-gray-300">O projeto não é um mundo aberto nem um RPG completo ainda. A meta atual é consolidar uma sessão de 10 a 15 minutos com exploração, combate, habilidades e um final verificável.</p><div className="mt-7 grid md:grid-cols-2 gap-5">{features.map(([title, text]) => <article key={title} className="rounded-lg border border-white/10 bg-slate-950/45 p-5"><h3 className="font-bold text-red-300">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-300">{text}</p></article>)}</div></section>
    <section className="mt-8 wuxia-border rounded-lg p-8 bg-black/50"><h2 className="text-2xl font-bold text-yellow-400">Como experimentar agora</h2><p className="mt-3 text-gray-300">A demo ainda é local. No repositório do projeto, execute <code className="rounded bg-white/10 px-2 py-1">node serve.js</code> e abra <code className="rounded bg-white/10 px-2 py-1">http://127.0.0.1:5173</code>.</p><p className="mt-4 text-sm text-gray-400">Controles: WASD para mover, E para absorver/usar portal, X para dissipar, F para atacar, Q para dom e R para ruptura.</p></section>
    <footer className="text-center mt-12"><Link href="/devlog" className="inline-block px-6 py-3 border border-red-500 text-red-300 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all">Acompanhar no Devlog →</Link></footer>
  </div></main>
}
