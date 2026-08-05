"use client";

import Link from 'next/link';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import styles from './styles.module.css';

export default function ContatoPage() {
  return (
    <div className="portfolio-shell">
      <SiteHeader />
      <main>
        <div className={styles.contactContainer}>
          <header className={styles.contactHeader}>
            <h1>Contato</h1>
            <p>Que sua mensagem chegue clara e objetiva — compartilhe seu projeto, ideia ou pergunta.</p>
          </header>

          <div className={styles.formBox}>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.gridTwo}>
                <div>
                  <label className={styles.fieldLabel} htmlFor="name">Nome *</label>
                  <input className={styles.input} id="name" name="name" required placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className={styles.fieldLabel} htmlFor="email">Email *</label>
                  <input className={styles.input} id="email" name="email" type="email" required placeholder="seu.email@exemplo.com" />
                </div>
              </div>

              <div style={{marginTop:20}}>
                <label className={styles.fieldLabel} htmlFor="subject">Assunto *</label>
                <input className={styles.input} id="subject" name="subject" required placeholder="Sobre o que deseja falar?" />
              </div>

              <div style={{marginTop:16}}>
                <label className={styles.fieldLabel} htmlFor="message">Mensagem *</label>
                <textarea className={styles.textarea} id="message" name="message" required placeholder="Conte-me sobre seu projeto, ideia ou pergunta..." />
              </div>

              <div className={styles.submitRow}>
                <button type="submit" className={styles.submitBtn}>Enviar Mensagem</button>
              </div>
            </form>
          </div>

          <div style={{marginTop:28}} className="project-copy">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3>Resposta Rápida</h3>
                <p>Respondo mensagens em até 24 horas durante dias úteis.</p>
              </div>
              <div>
                <h3>Projetos</h3>
                <p>Interessado em colaborações? Vamos discutir os detalhes.</p>
              </div>
              <div>
                <h3>Consultoria</h3>
                <p>Ofereço consultorias técnicas e estratégicas em produto e front-end.</p>
              </div>
            </div>
          </div>

          <div style={{textAlign:'center', marginTop:36}}>
            <Link href="/" className="inline-block px-6 py-3 border-2 border-transparent text-sm font-bold rounded-lg hover:bg-transparent">← Voltar ao Início</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

