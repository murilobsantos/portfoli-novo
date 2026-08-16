import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const projetos = [
  { indice:"01", titulo:"Echoes of Divinity", tipo:"Game design · Godot · 2026", texto:"Um RPG de ação em fantasia oriental, construído como uma vertical slice autoral de combate, atmosfera e narrativa.", link:"/projetos/echoes-of-divinity-projeto", classe:"project-echoes", imagem:"/evidencias/echoes-jogabilidade.png", alt:"Build de Echoes of Divinity com cenário, personagens e portal" },
  { indice:"02", titulo:"Landing Pages", tipo:"Direção de arte · Front-end · 2026", texto:"Cinco experiências digitais premium criadas para transformar identidades de diferentes setores em interfaces memoráveis.", link:"/landing-pages", classe:"project-landings", imagem:"/evidencias/landing-colecao.png", alt:"Coleção de landing pages com a experiência Ímpeto em destaque" },
  { indice:"03", titulo:"Universo de Histórias", tipo:"Produto · Plataforma narrativa · 2026", texto:"Uma plataforma narrativa publicada, com cadastro, autoria, persistência e leitura pública verificados em produção.", link:"/showcases/universo-de-historias", classe:"project-historias", imagem:"/evidencias/universo-home.png", alt:"Página inicial publicada do Universo de Histórias" },
];

export default function Home() {
  return <div className="portfolio-shell"><SiteHeader />
    <main>
      <section className="portfolio-hero">
        <div className="jianghu-landscape" aria-hidden="true" />
        <div className="hero-kicker"><span>江湖 · O mundo entre caminhos</span><span>Brasil · disponível para jornadas</span></div>
        <div className="hero-chapter">CAPÍTULO I <i/> O LIMIAR</div>
        <h1>Entre código<br/>e <em>lenda.</em></h1>
        <div className="hero-lower"><p>Sou Murilo Santos. Construo interfaces, sistemas e mundos digitais onde técnica e imaginação percorrem o mesmo caminho.</p><Link href="/projetos">Atravessar o portal <b>↘</b></Link></div>
        <div className="hero-seal" aria-hidden="true">創<br/>造</div>
      </section>

      <section className="intro-strip"><span className="eyebrow">道 · O caminho</span><p>Não construo apenas telas. Crio passagens para ideias serem <em>entendidas, lembradas e vividas.</em></p></section>

      <section className="selected-work">
        <header><span className="eyebrow">Três territórios</span><h2>Portais abertos</h2><Link href="/projetos">Explorar o jianghu →</Link></header>
        <div className="project-list">{projetos.map(p => <Link href={p.link} key={p.titulo} className={`project-row ${p.classe}`}><span className="project-index">{p.indice}</span><div className="project-visual"><Image src={p.imagem} alt={p.alt} fill sizes="(max-width: 800px) 100vw, 36vw" className="project-image" /><span aria-hidden="true">{p.titulo.slice(0,2).toUpperCase()}</span></div><div className="project-copy"><small>{p.tipo}</small><h3>{p.titulo}</h3><p>{p.texto}</p></div><b className="project-arrow">↗</b></Link>)}</div>
      </section>

      <section className="about-preview"><div className="portrait-wrap portrait-real"><Image src="/murilo-santos-retrato.jpeg" alt="Murilo Santos fotografado diante de um espelho" fill sizes="(max-width: 800px) 90vw, 40vw" /></div><div><span className="eyebrow">工匠 · O artesão</span><h2>Disciplina técnica.<br/><em>Espírito inquieto.</em></h2><p>Sou Murilo, desenvolvedor front-end e criador independente. Meu jianghu é feito de produtos web, ferramentas e mundos interativos — cada projeto como uma etapa de cultivo, nunca como decoração vazia.</p><Link href="/sobre">Entrar na sala do artesão →</Link><div className="skills-line"><span>Next.js</span><span>TypeScript</span><span>Godot</span><span>Direção de arte</span></div></div></section>

      <section className="devlog-preview"><div><span className="eyebrow">Processo aberto</span><h2>O trabalho também<br/>acontece <em>entre</em> entregas.</h2></div><div><p>No devlog registro decisões, descobertas e mudanças reais de direção — incluindo o que funcionou e o que precisou ser reconstruído.</p><Link href="/devlog">Ler o devlog <b>↗</b></Link></div></section>
    </main><SiteFooter />
  </div>;
}
