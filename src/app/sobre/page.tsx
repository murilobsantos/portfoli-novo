import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import styles from "./styles.module.css";

const principios = [
  ["01", "Forma com intenção", "A direção de arte existe para revelar a ideia do produto, não para disputar atenção com ela."],
  ["02", "Estrutura que permanece", "Arquitetura, componentes e decisões feitas para sobreviver ao lançamento e facilitar a evolução."],
  ["03", "Evidência antes de discurso", "Entregas verificáveis, fluxos reais e processo aberto valem mais do que promessas abstratas."],
];

export default function SobrePage() {
  return <div className={styles.page}><SiteHeader />
    <main>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlyph} aria-hidden="true">匠</div>
        <div className={styles.chapter}><span>CAPÍTULO III</span><i /><span>O ARTESÃO</span></div>
        <div className={styles.heroCopy}>
          <span className="eyebrow">工匠 · Técnica em movimento</span>
          <h1>Construir é uma<br />forma de <em>cultivo.</em></h1>
          <p>Sou Murilo Santos, desenvolvedor front-end e criador independente. Uno engenharia, produto e direção de arte para transformar ideias em experiências com identidade própria.</p>
        </div>
        <div className={styles.heroNote}><span>BRASIL · 2026</span><p>Produtos web<br />Sistemas autorais<br />Mundos interativos</p></div>
      </section>

      <section className={styles.portraitSection}>
        <div className={styles.portrait}>
          <Image src="/murilo-santos-retrato.jpeg" alt="Murilo Santos fotografado diante de um espelho" fill priority sizes="(max-width: 850px) 100vw, 48vw" />
          <span>FIG. 01 · O AUTOR FORA DO CÓDIGO</span>
        </div>
        <div className={styles.manifesto}>
          <span className="eyebrow">O ponto de encontro</span>
          <h2>Técnica sem imaginação produz apenas o <em>esperado.</em></h2>
          <p>Meu trabalho vive no encontro entre clareza e atmosfera. Gosto de sistemas que funcionam de verdade, mas também de interfaces que fazem alguém sentir que atravessou um limiar — seja uma plataforma narrativa, uma ferramenta ou um jogo.</p>
          <p>O universo wuxia deste portfólio não é fantasia aplicada por cima. Ele traduz como enxergo desenvolvimento: prática contínua, domínio conquistado em etapas e cada projeto como um novo território.</p>
          <Link href="/devlog">Ler os registros do caminho ↗</Link>
        </div>
      </section>

      <section className={styles.principles}>
        <header><span className="eyebrow">三則 · Três princípios</span><h2>Como o trabalho<br />ganha <em>forma.</em></h2></header>
        <div>{principios.map(([numero, titulo, texto]) => <article key={numero}><span>{numero}</span><h3>{titulo}</h3><p>{texto}</p></article>)}</div>
      </section>

      <section className={styles.path}>
        <div><span className="eyebrow">O caminho até aqui</span><h2>Uma trajetória ainda em construção.</h2></div>
        <ol>
          <li><span>2022</span><p>Primeiros projetos web e a busca por unir estética a uma execução técnica sólida.</p></li>
          <li><span>2023—24</span><p>Consolidação em front-end, TypeScript, design de interação e entregas orientadas ao produto.</p></li>
          <li><span>2025—26</span><p>Produtos autorais, Godot, plataformas persistentes e uma direção criativa finalmente reconhecível.</p></li>
          <li className={styles.current}><span>AGORA</span><p>Construindo experiências que possam ser demonstradas, utilizadas e lembradas.</p></li>
        </ol>
      </section>

      <section className={styles.next}><span>Próximo capítulo</span><h2>Tem uma ideia que merece<br />um mundo próprio?</h2><Link href="/contato">Abrir uma conversa <b>↗</b></Link></section>
    </main><SiteFooter />
  </div>;
}
