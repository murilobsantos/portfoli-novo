"use client";

import Link from "next/link";
import { useState } from "react";
import type { Landing } from "../dados";
import "../landing.css";

const styles = new Proxy({} as Record<string, string>, {
  get: (_, propriedade) => String(propriedade),
});

export default function Experiencia({ dados }: { dados: Landing }) {
  const [menu, setMenu] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const tema = styles[dados.slug];
  return (
    <main className={`${styles.pagina} ${tema}`}>
      <header className={styles.cabecalho}>
        <a href="#inicio" className={styles.marca}>{dados.marca}<i /></a>
        <button className={styles.menuBotao} aria-label="Abrir menu" onClick={() => setMenu(!menu)}><span /><span /></button>
        <nav className={menu ? styles.menuAberto : ""}>
          <a href="#conceito">Conceito</a><a href="#experiencias">Experiências</a><a href="#contato">Contato</a>
        </nav>
        <a className={styles.ctaTopo} href="#contato">{dados.acao}</a>
      </header>

      <section id="inicio" className={styles.hero} style={{ "--hero": `url(${dados.imagem})` } as React.CSSProperties}>
        <div className={styles.heroImagem} />
        <div className={styles.heroConteudo}>
          <div className={styles.selo}><span />{dados.selo}</div>
          <h1>{dados.titulo} <em>{dados.destaque}</em></h1>
          <p>{dados.descricao}</p>
          <div className={styles.acoes}><a href="#contato" className={styles.botao}>{dados.acao}<b>↗</b></a><a href="#experiencias" className={styles.link}>{dados.acaoSecundaria}<span>→</span></a></div>
        </div>
        <div className={styles.indice}>01 <span /> 05</div>
      </section>

      <section className={styles.numeros} aria-label="Números da empresa">
        {dados.numeros.map((item) => <div key={item.rotulo}><strong>{item.valor}</strong><span>{item.rotulo}</span></div>)}
      </section>

      <section id="conceito" className={styles.manifesto}>
        <span className={styles.vertical}>NOSSO PROPÓSITO</span>
        <div><small>Mais que um serviço</small><h2>Excelência é quando cada detalhe <em>tem intenção.</em></h2></div>
        <p>{dados.descricao} Nosso compromisso é criar uma jornada clara, cuidadosa e memorável — do primeiro contato ao resultado.</p>
      </section>

      <section id="experiencias" className={styles.servicos}>
        <header><span>O que fazemos</span><h2>Uma experiência<br />pensada por inteiro.</h2></header>
        <div className={styles.lista}>
          {dados.servicos.map((item) => <article key={item.numero}><span>{item.numero}</span><h3>{item.titulo}</h3><p>{item.texto}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className={styles.depoimento}><div className={styles.aspas}>“</div><blockquote>{dados.depoimento}</blockquote><p>{dados.autor}</p></section>

      <section id="contato" className={styles.contato}>
        <div><span>Próximo passo</span><h2>Vamos começar<br /><em>uma conversa?</em></h2><p>Conte um pouco sobre o que procura. Nossa equipe retorna em até um dia útil.</p></div>
        <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
          <label>Seu nome<input required placeholder="Como podemos chamar você?" /></label>
          <label>E-mail ou telefone<input required placeholder="Seu melhor contato" /></label>
          <label>Como podemos ajudar?<textarea required placeholder="Conte brevemente o que você procura" /></label>
          <button>{enviado ? "Mensagem recebida ✓" : `${dados.acao}  →`}</button>
        </form>
      </section>

      <footer><a className={styles.marca} href="#inicio">{dados.marca}<i /></a><p>Experiência conceitual criada para portfólio.</p><Link href="/landing-pages">Ver as cinco experiências</Link></footer>
    </main>
  );
}
