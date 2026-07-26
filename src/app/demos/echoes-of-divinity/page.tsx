import Link from 'next/link'

export default function EchoesOfDivinityDemo() {
  return <main className="min-h-screen p-8 oriental-pattern"><div className="max-w-4xl mx-auto text-center">
    <p className="text-cyan-300 font-bold tracking-[.2em] text-sm">DEMO LOCAL</p><h1 className="mt-4 text-5xl font-bold wuxia-text-glow font-serif">Echoes of Divinity</h1><p className="mt-5 text-xl text-gray-300">A experiência jogável está sendo preparada para publicação. Em vez de simular um jogo nesta página, este espaço acompanha o vertical slice real.</p>
    <section className="mt-10 text-left wuxia-border wuxia-glow rounded-lg p-8 bg-black/50"><h2 className="text-2xl font-bold text-yellow-400">Vertical slice atual</h2><ul className="mt-5 space-y-3 text-gray-300"><li>✦ Cinco salas exploráveis, ecos e portais.</li><li>✦ Combate, dons desbloqueáveis, ruptura, morte e finais.</li><li>✦ Mapa RPG top-down do Panteão Quebrado, com personagens, ruínas, HUD e efeitos.</li><li>✦ Próxima entrega: feedback de combate e balanceamento para uma jornada curta.</li></ul><div className="mt-7 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-100">Para executar localmente: <code>node serve.js</code> e abra <code>http://127.0.0.1:5173</code>.</div></section>
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><Link href="/projetos/echoes-of-divinity-projeto" className="px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg">Ver estado do projeto</Link><Link href="/devlog" className="px-6 py-3 border border-red-500 text-red-300 font-bold rounded-lg">Ver devlog</Link></div>
  </div></main>
}
