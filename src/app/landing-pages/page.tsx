import Link from "next/link";
import Image from "next/image";
import { landings, segmentos } from "./dados";

export default function GaleriaLandingPages() {
  return <main className="min-h-screen bg-[#080908] text-white px-5 py-20 md:px-12">
    <div className="max-w-7xl mx-auto">
      <Link href="/projetos" className="text-xs uppercase tracking-[.2em] text-lime-300">← Voltar aos projetos</Link>
      <header className="mt-16 mb-16 max-w-4xl"><p className="text-lime-300 uppercase tracking-[.25em] text-xs mb-5">Coleção de experiências digitais</p><h1 className="text-5xl md:text-8xl font-medium tracking-[-.06em] leading-[.92]">Cinco setores.<br/>Cinco identidades.</h1><p className="text-gray-400 text-lg max-w-2xl mt-8 leading-relaxed">Landing pages conceituais completas, criadas para demonstrar direção de arte, estratégia de conversão e desenvolvimento responsivo.</p></header>
      <section className="grid md:grid-cols-2 gap-5">
        {segmentos.map((slug, index) => { const item = landings[slug]; return <Link key={slug} href={`/landing-pages/${slug}`} className={`group relative min-h-[420px] overflow-hidden ${index === 0 ? "md:col-span-2" : ""}`}>
          <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{backgroundImage:`linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,.05)),url(${item.imagem})`}} />
          <div className="absolute inset-0 p-8 flex flex-col justify-between"><span className="text-xs tracking-[.2em] uppercase">0{index + 1} / {item.slug}</span><div><h2 className="text-4xl md:text-6xl tracking-[-.04em]">{item.marca}</h2><p className="text-gray-300 mt-3 max-w-md">{item.selo}</p><span className="inline-block mt-6 text-lime-300 uppercase tracking-[.15em] text-xs">Abrir experiência ↗</span></div></div>
        </Link>})}
      </section>
      <section className="mt-28 border-t border-white/20 pt-12">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-10"><div><p className="text-lime-300 uppercase tracking-[.25em] text-xs mb-5">Evidência responsiva</p><h2 className="text-4xl md:text-6xl tracking-[-.05em]">Interfaces executadas,<br/>não apenas imaginadas.</h2></div><p className="text-gray-400 leading-relaxed max-w-xl">Capturas realizadas diretamente da build local em desktop e viewport móvel. Elas documentam composição, conteúdo e adaptação responsiva reais.</p></div>
        <div className="grid md:grid-cols-[1fr_300px] gap-5"><figure><div className="relative aspect-[1.44] overflow-hidden bg-zinc-900"><Image src="/evidencias/landing-academia.png" alt="Landing page Ímpeto executada em viewport desktop" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 70vw" /></div><figcaption className="text-[10px] uppercase tracking-[.18em] text-gray-500 mt-3">FIG. 01 · Academia · 1440 × 1000</figcaption></figure><figure><div className="relative aspect-[390/844] overflow-hidden bg-zinc-900"><Image src="/evidencias/landing-academia-mobile.png" alt="Landing page Ímpeto executada em viewport móvel" fill className="object-cover object-top" sizes="300px" /></div><figcaption className="text-[10px] uppercase tracking-[.18em] text-gray-500 mt-3">FIG. 02 · Mobile · 390 × 844</figcaption></figure></div>
      </section>
    </div>
  </main>;
}
