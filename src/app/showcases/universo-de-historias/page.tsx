import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import styles from "./styles.module.css";

export const metadata: Metadata = { title:"Universo de Histórias — Estudo de caso", description:"Plataforma funcional para leitura, publicação e descoberta de histórias." };

const fundamentos=[
  ["01","Publicar sem fricção","Uma jornada clara para transformar rascunhos em histórias acessíveis, sem exigir conhecimento técnico do autor."],
  ["02","Persistir de verdade","Conteúdo e operações apoiados por backend persistente — não por demonstrações descartáveis ou dados simulados."],
  ["03","Evoluir com pessoas","O produto alcançou a base funcional. A próxima etapa nasce do comportamento e das necessidades de usuários reais."],
];

export default function UniversoHistoriasPage(){return <div className="portfolio-shell universe-case"><SiteHeader/><main>
  <header className="universe-hero"><div className="universe-lines"/><div className="case-topline"><Link href="/projetos">← Retornar ao mapa</Link><span>Território 03 · Produto digital</span></div><span className="universe-glyph">書</span><div><span className="eyebrow">O arquivo vivo</span><h1>Universo<br/>de <em>Histórias.</em></h1><p>Um lugar para histórias encontrarem leitores — e para autores transformarem ideias em obras publicadas.</p></div><a href="#produto">Abrir o arquivo ↓</a></header>
  <section id="produto" className="universe-statement"><span className="eyebrow">O produto</span><h2>Da primeira palavra à publicação, uma plataforma construída para <em>continuar existindo.</em></h2><div><p>Universo de Histórias deixou de ser apenas uma visão de produto. A plataforma possui uma experiência reavaliada, fluxos funcionais e uma camada persistente para sustentar conteúdo real.</p><p>O marco atual muda a natureza do trabalho: o desenvolvimento deixa de perseguir uma lista abstrata de funcionalidades e passa a aguardar uso real para orientar manutenção e melhoria contínua.</p></div></section>
  <section className="universe-window"><div className="universe-live"><Image src="/evidencias/universo-biblioteca-persistencia.png" alt="Biblioteca pública do Universo de Histórias exibindo histórias persistidas" fill sizes="(max-width: 800px) 100vw, 86vw" /></div><div><span className={styles.figureCaption}>FIG. 01 · PERSISTÊNCIA PÚBLICA</span><p className={styles.figureNote}>Após cadastro, autenticação e publicação, a história de evidência reapareceu na biblioteca em uma sessão pública sem login.</p></div><div className="universe-proof-grid"><figure><div><Image src="/evidencias/universo-historia-publicada.png" alt="Página pública da história O Limiar, com autoria e capítulo publicados" fill sizes="(max-width: 800px) 100vw, 58vw" /></div><figcaption>FIG. 02 · História publicada com autoria, sinopse e capítulo acessíveis.</figcaption></figure><figure><div><Image src="/evidencias/universo-welcome-mobile.png" alt="Universo de Histórias executado em viewport móvel" fill sizes="300px" /></div><figcaption>FIG. 03 · Entrada pública em viewport móvel.</figcaption></figure></div><a className="live-product-link" href="https://universohistorias.vercel.app/story/6a72c72fba2c3dcd4d32e19c" target="_blank" rel="noreferrer">Abrir a evidência publicada ↗</a></section>
  <section className="universe-foundations"><header><span className="eyebrow">Fundamentos</span><h2>Publicado não significa terminado.</h2></header><div>{fundamentos.map(f=><article key={f[0]}><span>{f[0]}</span><h3>{f[1]}</h3><p>{f[2]}</p></article>)}</div></section>
  <section className="universe-state"><div><span className="eyebrow">Estado verificado</span><h2>Produto funcional.<br/><em>Próxima fase: pessoas.</em></h2></div><div><p>A coleta percorreu a jornada completa em produção: criação de conta autora, login, publicação, nova consulta pública e abertura da história persistida.</p><ul><li><span>01</span>Biblioteca e conteúdo público operacionais</li><li><span>02</span>Cadastro, login e perfil persistente verificados</li><li><span>03</span>Autoria, publicação e leitura pública verificadas</li></ul></div></section>
  <nav className="case-next"><Link href="/landing-pages"><span>Território anterior</span><b>Cinco Mundos</b></Link><Link href="/projetos"><span>Fechar o arquivo</span><b>Retornar ao mapa ↗</b></Link></nav>
  </main><SiteFooter/></div>}
