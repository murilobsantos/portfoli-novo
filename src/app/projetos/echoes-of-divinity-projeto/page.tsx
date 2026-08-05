import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Echoes of Divinity — Estudo de caso",
  description: "Vertical slice autoral de um RPG de ação em fantasia oriental, desenvolvido em Godot.",
};

const pilares = [
  { numero:"01", titulo:"Combate com intenção", texto:"Ataques, deslocamento e resposta visual construídos para que cada ação tenha leitura e peso — não apenas velocidade." },
  { numero:"02", titulo:"Um mundo que recorda", texto:"Os Ecos e as marcas do Vaso conectam narrativa, progressão e identidade visual dentro do próprio espaço jogável." },
  { numero:"03", titulo:"Atmosfera como sistema", texto:"Luz, silêncio, arquitetura e ritmo trabalham juntos para comunicar o estado de um mundo ferido pela divindade." },
];

export default function EchoesOfDivinityPage(){return <div className="portfolio-shell echoes-case"><SiteHeader/><main>
  <header className="case-hero"><div className="case-landscape"/><div className="case-topline"><Link href="/projetos">← Retornar ao mapa</Link><span>Território 01 · Game design</span></div><div className="case-title"><span className="case-glyph">神</span><p>Echoes<br/>of Divinity</p><h1>O templo<br/>dos <em>ecos.</em></h1></div><div className="case-intro"><p>Uma vertical slice de RPG de ação sobre memória, divindade e as marcas que permanecem depois de cada escolha.</p><span>Godot · Direção autoral · Em desenvolvimento</span></div><a className="case-scroll" href="#visao">Descobrir o projeto ↓</a></header>

  <section id="visao" className="case-statement"><span className="eyebrow">A visão</span><h2>Construir um mundo que não apenas recebe o jogador — <em>mas se lembra dele.</em></h2><div><p>Echoes of Divinity nasceu como uma tentativa de unir combate responsivo, exploração e uma mitologia própria. O jogador assume o papel do Vaso, uma presença capaz de carregar vestígios de forças divinas.</p><p>O objetivo atual não é prometer um mundo infinito. É provar, em uma vertical slice concentrada, que movimento, confronto, atmosfera e narrativa conseguem sustentar a mesma identidade.</p></div></section>

  <section className="case-frame"><div className="case-frame-art case-evidence"><Image src="/evidencias/echoes-jogabilidade.png" alt="Build real de Echoes of Divinity executando a Câmara do Despertar, com personagem, HUD e portal" fill sizes="(max-width: 800px) 100vw, 88vw" /></div><div className="frame-caption"><span>FIG. 01 · BUILD WINDOWS</span><p>Captura local da build executável: Câmara do Despertar com Vaso, HUD de Essência e Vigor, NPC e portal em cena.</p></div><div className="evidence-pair"><div><Image src="/evidencias/echoes-combate.png" alt="Build local de Echoes of Divinity durante validação de controles e combate" fill sizes="(max-width: 800px) 100vw, 44vw" /></div><p><span>FIG. 02 · RUNTIME NATIVO</span>A evidência registra o jogo rodando em Godot, não um mockup ou composição promocional.</p></div></section>

  <section className="case-pilars"><header><span className="eyebrow">Princípios do sistema</span><h2>Três forças sustentam<br/>a experiência.</h2></header><div>{pilares.map(p=><article key={p.numero}><span>{p.numero}</span><h3>{p.titulo}</h3><p>{p.texto}</p></article>)}</div></section>

  <section className="case-process"><div><span className="eyebrow">Da ideia ao jogo</span><h2>Menos promessa.<br/><em>Mais prova jogável.</em></h2></div><div className="process-steps"><article><span>PASSADO</span><h3>Protótipo web</h3><p>A primeira versão ajudou a descobrir o universo, mas não oferecia a base certa para combate e game feel.</p></article><article className="active"><span>PRESENTE</span><h3>Vertical slice em Godot</h3><p>O micro-loop agora é nativo: movimento, combate, cenas conectadas, animação e validação técnica.</p></article><article><span>PRÓXIMO RITO</span><h3>Playtest humano</h3><p>O próximo gate mede sensação, câmera, leitura, áudio e peso — qualidades que testes automatizados não substituem.</p></article></div></section>

  <section className="case-status"><span className="case-glyph">器</span><div><span className="eyebrow">Estado da jornada</span><h2>Uma fundação real.<br/>Ainda não uma obra concluída.</h2><p>A arquitetura e o ciclo jogável já existem. O trabalho agora avança sobre legibilidade, performance, arte, efeitos e conteúdo, preservando o que cada teste demonstrar — sem vender como pronto o que ainda precisa ser sentido.</p><Link href="/devlog">Acompanhar decisões no devlog →</Link></div></section>

  <nav className="case-next"><Link href="/projetos"><span>Retornar</span><b>Mapa dos territórios</b></Link><Link href="/landing-pages"><span>Próximo território</span><b>Cinco Mundos ↗</b></Link></nav>
  </main><SiteFooter/></div>}
