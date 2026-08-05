import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const entradas = [
  { data:"05 AGO 2026", categoria:"Portfólio", titulo:"Uma nova casa para o trabalho", resumo:"O portfólio deixa de ser uma coleção de páginas isoladas e ganha direção editorial, navegação consistente e uma hierarquia que coloca o trabalho em primeiro plano.", tags:["Next.js", "UI", "Direção de arte"], destaque:true },
  { data:"05 AGO 2026", categoria:"Web design", titulo:"Cinco setores, cinco identidades", resumo:"Uma coleção de landing pages para academia, clínica, advocacia, restaurante e imobiliária. O desafio: manter uma base robusta sem repetir a mesma personalidade visual.", tags:["Landing pages", "Responsivo", "Conversão"] },
  { data:"01 AGO 2026", categoria:"Echoes of Divinity", titulo:"O vertical slice atravessa o quality gate", resumo:"Combate, animações, performance e export Windows passaram pela validação automatizada. A próxima fronteira é humana: peso, leitura, câmera e sensação em playtest.", tags:["Godot", "Game feel", "QA"] },
  { data:"28 JUL 2026", categoria:"Echoes of Divinity", titulo:"Fundação nativa do combate e identidade do Vaso", resumo:"O ciclo jogável migrou para Godot com estados formais de movimento, ataque ritualístico e a primeira leitura visual consistente dos Ecos.", tags:["Godot", "Arquitetura", "Combate"] },
  { data:"JUN 2026", categoria:"Engenharia", titulo:"Rotas estáveis e build previsível", resumo:"Correções de navegação e parsing prepararam o projeto para deploy confiável. Uma melhoria silenciosa, mas estrutural para tudo que veio depois.", tags:["Next.js", "Build", "Manutenção"] },
];

export default function DevlogPage(){return <div className="portfolio-shell"><SiteHeader/><main className="journal-page">
  <header className="journal-hero"><span className="eyebrow">Notas de processo · 2026</span><h1>Dev<em>log.</em></h1><p>Decisões de design, engenharia e produto registradas enquanto o trabalho ainda está vivo.</p></header>
  <div className="journal-grid"><aside><span>Arquivo</span><b>05 entradas</b><p>Construindo em público, com contexto e sem transformar processo em propaganda.</p></aside><section>{entradas.map((e,i)=><article key={e.titulo} className={e.destaque?"featured-entry":""}><div className="entry-meta"><time>{e.data}</time><span>{e.categoria}</span></div><div className="entry-number">0{i+1}</div><div className="entry-body"><h2>{e.titulo}</h2><p>{e.resumo}</p><div>{e.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</section></div>
  <div className="journal-back"><Link href="/projetos">Explorar os projetos por trás das notas →</Link></div>
  </main><SiteFooter/></div>}
