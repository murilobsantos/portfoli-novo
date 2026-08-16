import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const territorios = [
  { capitulo:"I", ideograma:"神", titulo:"Echoes of Divinity", subtitulo:"O templo dos ecos", descricao:"Uma vertical slice de RPG em Godot sobre memória, divindade e um mundo que responde às marcas do jogador.", papel:"Direção · Game design · Desenvolvimento", estado:"Vertical slice em evolução", href:"/projetos/echoes-of-divinity-projeto", classe:"territorio-echoes" },
  { capitulo:"II", ideograma:"界", titulo:"Cinco Mundos", subtitulo:"Coleção de landing pages", descricao:"Cinco setores interpretados como universos próprios — academia, clínica, advocacia, gastronomia e imóveis.", papel:"Direção de arte · UX/UI · Front-end", estado:"Experiência completa", href:"/landing-pages", classe:"territorio-landings" },
  { capitulo:"III", ideograma:"書", titulo:"Universo de Histórias", subtitulo:"O arquivo vivo", descricao:"Plataforma narrativa publicada, com biblioteca, autenticação, autoria e persistência verificadas em uma jornada pública completa.", papel:"Produto · Front-end · Backend persistente", estado:"Produto funcional · aguardando usuários", href:"/showcases/universo-de-historias", classe:"territorio-historias" },
];

const estudos = [
  { titulo:"Project Argus", estado:"Sistema ativo · pesquisa de segurança governada", href:"/showcases/project-argus", selo:"開" },
  { titulo:"Kawaii Reverie", estado:"Microexperiência interativa · concluída", href:"/demos/kawaii-reverie", selo:"開" },
  { titulo:"Overdrive UI", estado:"Conceito encerrado · nenhuma biblioteca demonstrável", selo:"封" },
  { titulo:"Estuda Penal", estado:"Em revisão · apresentação indisponível", selo:"封" },
];

export default function ProjetosPage(){return <div className="portfolio-shell projects-world"><SiteHeader/><main>
  <header className="world-hero"><div className="world-mist"/><span className="eyebrow">作品集 · Arquivo de obras</span><div className="world-title"><h1>O <em>jianghu</em><br/>digital.</h1><span>03<br/><small>territórios abertos</small></span></div><p>Três projetos sustentam hoje a jornada principal: um jogo autoral, uma coleção de experiências comerciais e uma plataforma narrativa funcional.</p><a href="#territorios">Descer ao mapa <b>↓</b></a></header>
  <section id="territorios" className="territories"><header><span className="eyebrow">Mapa dos territórios</span><p>Selecione um portal para atravessar.</p></header>{territorios.map((t,i)=><Link href={t.href} key={t.titulo} className={`territory ${t.classe}`}><div className="territory-chapter"><span>CAPÍTULO</span><b>{t.capitulo}</b></div><div className="territory-glyph">{t.ideograma}</div><div className="territory-copy"><small>{t.subtitulo}</small><h2>{t.titulo}</h2><p>{t.descricao}</p><div><span>{t.papel}</span><span>{t.estado}</span></div></div><div className="territory-enter"><span>Entrar</span><b>↗</b></div><i className="territory-number">0{i+1}</i></Link>)}</section>
  <section id="arquivo" className="minor-works"><header><span className="eyebrow">Círculo secundário</span><h2>Pesquisa, sementes e arquivo</h2></header><p className="archive-note">Projetos fora da jornada principal são apresentados pelo que realmente são: sistemas ativos, protótipos recuperáveis ou conceitos encerrados.</p><div>{estudos.map((e,i)=>e.href?<Link href={e.href} key={e.titulo}><span>0{i+1}</span><h3>{e.titulo}</h3><p>{e.estado}</p><b>{e.selo} ↗</b></Link>:<article key={e.titulo}><span>0{i+1}</span><h3>{e.titulo}</h3><p>{e.estado}</p><b>{e.selo}</b></article>)}</div></section>
  <section className="principle"><span>守</span><blockquote>“Um portfólio não é um depósito de coisas feitas. É o mapa das decisões que moldaram o artesão.”</blockquote><p>Princípio do arquivo</p></section>
  </main><SiteFooter/></div>}
