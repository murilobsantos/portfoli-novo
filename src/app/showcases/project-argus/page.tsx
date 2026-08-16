import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Project Argus — Pesquisa de segurança governada",
  description: "Case técnico de um copiloto pessoal para investigação de segurança autorizada, com evidência persistente e controle humano explícito.",
};

const fundamentos = [
  ["01", "Controle humano", "O sistema recomenda e organiza; autorização, seleção de ativo e decisões permanecem com o operador."],
  ["02", "Evidência persistente", "Observações, eventos e decisões formam uma trilha verificável, sem converter ausência de sinal em veredito."],
  ["03", "Falha segura", "Escopo, política ou confirmação insuficientes interrompem o fluxo em vez de ampliar permissões silenciosamente."],
];

export default function ProjectArgusPage() {
  return <div className={styles.page}><SiteHeader />
    <main>
      <section className={styles.hero}>
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.eye} aria-hidden="true"><i /><i /><span>●</span></div>
        <div className={styles.topline}><Link href="/projetos">← Arquivo de obras</Link><span>CASE TÉCNICO · AMBIENTE LOCAL</span></div>
        <div className={styles.heroCopy}><span className="eyebrow">觀 · Observar sem presumir</span><h1>Project<br/><em>Argus.</em></h1><p>Um copiloto pessoal de pesquisa em segurança que reduz trabalho repetitivo sem remover o controle humano da investigação.</p></div>
        <span className={styles.status}>BETA LOCAL<br/>DESENVOLVIMENTO ATIVO</span>
      </section>

      <section className={styles.statement}><span className="eyebrow">O problema</span><h2>Automação sem governança produz <em>velocidade sem direção.</em></h2><div><p>Investigações acumulam políticas, escopos, evidências, hipóteses e decisões. O ARGUS organiza essa jornada em uma arquitetura orientada a eventos, com memória persistente e contratos explícitos.</p><p>Seu limite é parte do produto: ele não concede autorização, não transforma uma resposta inconclusiva em segurança e não substitui a revisão do operador.</p></div></section>

      <section className={styles.evidence}>
        <div className={styles.screen}><Image src="/evidencias/argus-mission-control.png" alt="Mission Control do Project Argus exibindo uma missão local de teste em modo somente leitura" fill sizes="(max-width: 900px) 100vw, 88vw" /></div>
        <div className={styles.caption}><span>FIG. 01 · MISSION CONTROL</span><p>Captura de uma fixture exclusivamente local. Nenhum alvo externo, dado privado ou operação remota foi utilizado para produzir esta evidência.</p></div>
      </section>

      <section className={styles.foundations}><header><span className="eyebrow">Contratos centrais</span><h2>O sistema deve saber<br/>quando <em>parar.</em></h2></header><div>{fundamentos.map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>

      <section className={styles.architecture}><div><span className="eyebrow">Engenharia</span><h2>Do kernel ao Mission Control.</h2><p>Kernel, ciclo de vida, planejamento por tarefas, agentes governados, memória relacional, plugins e interface local compõem um sistema pensado para investigação reproduzível.</p></div><ul><li><span>01</span>Arquitetura orientada a eventos</li><li><span>02</span>Políticas e escopo como gates</li><li><span>03</span>Persistência e replay de evidências</li><li><span>04</span>Interface local com leitura segura</li><li><span>05</span>Testes automatizados e ADRs</li></ul></section>

      <section className={styles.boundary}><span>限</span><blockquote>“O ARGUS recomenda.<br/>O operador decide.”</blockquote><p>Promessa central do projeto</p></section>
      <nav className={styles.next}><Link href="/projetos"><span>Retornar ao mapa</span><b>Arquivo de obras ↗</b></Link><Link href="/projetos/echoes-of-divinity-projeto"><span>Próximo território</span><b>Echoes of Divinity ↗</b></Link></nav>
    </main><SiteFooter />
  </div>;
}
