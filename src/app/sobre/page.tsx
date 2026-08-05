import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import styles from './styles.module.css';

export default function SobrePage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main className={styles.sobreShell}>
        <div className="max-w-6xl mx-auto">
        {/* Header com Identidade de Mestre */}
        <header className={styles.sobreHeader}>
          <div className="mb-8">
            <Image
              src="/identidade visual.png"
              alt="Símbolo pessoal de Murilo Santos"
              width={120}
              height={120}
              className="mx-auto mb-6 rounded-full border-4 border-red-500 shadow-2xl"
            />
          </div>
          <h1 className="font-serif">代码的信徒</h1>
          <h2>Murilo Santos — Tecelão de Interfaces</h2>
          <p>
            &ldquo;O código deve ser como água — fluido, adaptável, cortando o caos com elegância.&rdquo;
          </p>
        </header>

        {/* Jornada Pessoal */}
        <main className="space-y-16">
          <section className={styles.sectionCard}>
            <h3 className={styles.sectionTitle}>
              A Jornada do Discípulo
            </h3>
            <div className={styles.sectionText}>
              <p>
                Sou Murilo, desenvolvedor front-end e entusiasta da estética oriental.
                Vejo o código como uma arte marcial — cada linha é um golpe, cada interface é uma forma de expressão.
              </p>
              <p>
                Minha jornada começou com curiosidade, cresceu com disciplina e hoje é movida por um desejo constante de evolução.
                Cada projeto é uma batalha vencida, cada bug derrotado é uma lição aprendida.
              </p>
              <blockquote>
                &ldquo;Força vem da repetição consciente. Domínio vem da adaptação constante.&rdquo;
              </blockquote>
            </div>
          </section>

          {/* Técnicas Dominadas */}
          <section className={styles.sectionCard}>
            <h3 className={styles.sectionTitle}>
              Técnicas Dominadas
            </h3>
            <div className={styles.skillGrid}>
              <div className={styles.skillItem}>
                <div className="text-4xl mb-4">⚛️</div>
                <h4>Arte da Interface Serena</h4>
                <p>React como extensão da vontade, criando interfaces que fluem como água viva.</p>
              </div>
              <div className={styles.skillItem}>
                <div className="text-4xl mb-4">🎯</div>
                <h4>Espada da Precisão Absoluta</h4>
                <p>TypeScript como lâmina afiada, garantindo que cada linha de código seja uma extensão perfeita da intenção.</p>
              </div>
              <div className={styles.skillItem}>
                <div className="text-4xl mb-4">🌐</div>
                <h4>Ritual dos Portais Convergentes</h4>
                <p>Next.js como portais entre mundos, conectando experiências digitais com fluidez espiritual.</p>
              </div>
              <div className={styles.skillItem}>
                <div className="text-4xl mb-4">🎨</div>
                <h4>Arte das Linhas Harmoniosas</h4>
                <p>Tailwind CSS como pincel do vento, pintando interfaces com graça e precisão.</p>
              </div>
              <div className={styles.skillItem}>
                <div className="text-4xl mb-4">⚙️</div>
                <h4>Punho da Forja Digital</h4>
                <p>Node.js como martelo ancestral, forjando aplicações robustas no caldeirão da tecnologia.</p>
              </div>
              <div className={styles.skillItem}>
                <div className="text-4xl mb-4">🎭</div>
                <h4>Dança dos Elementos Visuais</h4>
                <p>Framer Motion como coreografia espiritual, dando vida aos elementos com movimento consciente.</p>
              </div>
            </div>
          </section>

          {/* Linha do Tempo Wuxia */}
          <section className={styles.sectionCard}>
            <h3 className={styles.sectionTitle}>
              Conquistas na Jornada
            </h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} style={{ background: '#d95b4a' }} />
                <div className={styles.timelineContent}>
                  <h4>2024 — Mestre das Interfaces Digitais</h4>
                  <p>Dominei as artes do React e Next.js, criando experiências que transcendem o meramente funcional.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} style={{ background: '#d8bd78' }} />
                <div className={styles.timelineContent}>
                  <h4>2023 — Aprendiz da Precisão</h4>
                  <p>Adotei TypeScript como minha lâmina espiritual, garantindo que cada criação seja impecável.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} style={{ background: '#68a9d4' }} />
                <div className={styles.timelineContent}>
                  <h4>2022 — Iniciação nas Artes Digitais</h4>
                  <p>Comecei minha jornada no desenvolvimento web, descobrindo a beleza da criação digital.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Filosofia */}
          <section className={styles.sectionCard}>
            <h3 className={styles.sectionTitle}>
              A Filosofia por Trás do Código
            </h3>
            <div className={styles.sectionText}>
              <blockquote>
                &ldquo;O verdadeiro mestre não busca a perfeição imediata, mas o crescimento constante através da prática disciplinada.&rdquo;
              </blockquote>
              <p>
                Cada linha de código é uma oportunidade de crescimento. Cada projeto é uma batalha que fortalece o espírito.
                Acredito que a tecnologia deve servir à humanidade, criando experiências que elevam a alma tanto quanto a funcionalidade.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footerLinks}>
          <Link href="/" className={`${styles.footerLink} ${styles.primary}`}>
            ← Voltar ao Início
          </Link>
          <Link href="/devlog" className={`${styles.footerLink} ${styles.secondary}`}>
            Seguir a Jornada no Devlog →
          </Link>
        </footer>
      </div>
      </main>
      <SiteFooter />
    </div>
  );
}
