import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import styles from "./styles.module.css";

export default function ContatoPage() {
  return <div className={styles.page}><SiteHeader />
    <main>
      <section className={styles.hero}>
        <div className={styles.glyph} aria-hidden="true">會</div>
        <div className={styles.heroTop}><span>CAPÍTULO IV · O ENCONTRO</span><span>BRASIL · REMOTO</span></div>
        <div><span className="eyebrow">會 · Pavilhão de encontro</span><h1>Todo projeto começa<br />com uma <em>conversa.</em></h1></div>
        <p>Conte o que você quer construir, transformar ou descobrir. Eu retorno com perguntas claras e um próximo passo possível.</p>
        <a href="#mensagem">Deixar uma mensagem <b>↓</b></a>
      </section>

      <section className={styles.contact} id="mensagem">
        <aside>
          <span className="eyebrow">Canal direto</span>
          <h2>Sem formulários<br />de fumaça.</h2>
          <p>Você fala diretamente comigo. Em dias úteis, a resposta costuma chegar em até 24 horas.</p>
          <dl><div><dt>Disponibilidade</dt><dd>Projetos e colaborações selecionadas</dd></div><div><dt>Fuso horário</dt><dd>Brasília · UTC−3</dd></div><div><dt>Preferência</dt><dd>Briefing objetivo, desafio real e diálogo aberto</dd></div></dl>
        </aside>

        <form className={styles.form} action="/api/contato" method="POST">
          <div className={styles.formHeading}><span>FORMULÁRIO 01</span><p>Os campos marcados são necessários.</p></div>
          <div className={styles.row}><label><span>01 · Seu nome *</span><input id="name" name="name" required autoComplete="name" placeholder="Como devo chamar você?" /></label><label><span>02 · Seu e-mail *</span><input id="email" name="email" type="email" required autoComplete="email" placeholder="voce@exemplo.com" /></label></div>
          <label><span>03 · Assunto *</span><input id="subject" name="subject" required placeholder="Produto, colaboração, oportunidade..." /></label>
          <label><span>04 · A ideia *</span><textarea id="message" name="message" required placeholder="Contexto, objetivo e o que você espera desta conversa." /></label>
          <div className={styles.submit}><p>Ao enviar, sua mensagem segue apenas para contato profissional.</p><button type="submit">Enviar mensagem <b>↗</b></button></div>
        </form>
      </section>

      <section className={styles.protocol}>
        <header><span className="eyebrow">O que acontece depois</span><h2>Um processo simples,<br /><em>sem ruído.</em></h2></header>
        <div><article><span>01</span><h3>Leitura</h3><p>Entendo o contexto, o objetivo e se posso realmente contribuir.</p></article><article><span>02</span><h3>Alinhamento</h3><p>Retorno com perguntas, restrições e uma direção inicial honesta.</p></article><article><span>03</span><h3>Próximo passo</h3><p>Se houver encaixe, definimos escopo, prazo e forma de colaboração.</p></article></div>
      </section>

      <nav className={styles.next}><Link href="/projetos"><span>Explorar antes de conversar</span><b>Ver projetos ↗</b></Link><Link href="/sobre"><span>Conhecer quem está do outro lado</span><b>Sobre Murilo ↗</b></Link></nav>
    </main><SiteFooter />
  </div>;
}
