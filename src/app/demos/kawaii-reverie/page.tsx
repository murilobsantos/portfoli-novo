"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import styles from "./styles.module.css";

const fragmentos = [
  { x: 15, y: 27, delay: ".2s" },
  { x: 77, y: 20, delay: "1.1s" },
  { x: 54, y: 36, delay: ".6s" },
  { x: 24, y: 66, delay: "1.6s" },
  { x: 83, y: 69, delay: ".9s" },
  { x: 61, y: 76, delay: "2s" },
];

const espiritos = [
  { nome: "Momo", limiar: 2, classe: styles.momo, cor: "rosa" },
  { nome: "Sora", limiar: 4, classe: styles.sora, cor: "azul" },
  { nome: "Hana", limiar: 6, classe: styles.hana, cor: "dourado" },
];

function tocarNota(indice: number) {
  if (typeof window === "undefined") return;
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const contexto = new AudioContextClass();
  const oscilador = contexto.createOscillator();
  const ganho = contexto.createGain();
  oscilador.type = "sine";
  oscilador.frequency.value = [523.25, 587.33, 659.25, 783.99, 880, 1046.5][indice] ?? 660;
  ganho.gain.setValueAtTime(.0001, contexto.currentTime);
  ganho.gain.exponentialRampToValueAtTime(.12, contexto.currentTime + .02);
  ganho.gain.exponentialRampToValueAtTime(.0001, contexto.currentTime + .55);
  oscilador.connect(ganho);
  ganho.connect(contexto.destination);
  oscilador.start();
  oscilador.stop(contexto.currentTime + .58);
  oscilador.addEventListener("ended", () => void contexto.close());
}

export default function KawaiiReveriePage() {
  const [iniciado, setIniciado] = useState(false);
  const [coletados, setColetados] = useState<number[]>([]);
  const [som, setSom] = useState(true);
  const completo = coletados.length === fragmentos.length;
  const mensagem = useMemo(() => {
    if (!coletados.length) return "A noite espera pelo primeiro brilho.";
    if (coletados.length < 2) return "Um sonho começou a se lembrar de si.";
    if (coletados.length < 4) return "Momo despertou. O jardim ficou mais quente.";
    if (coletados.length < 6) return "Sora ouviu o céu chamar pelo seu nome.";
    return "Os três espíritos sonham juntos outra vez.";
  }, [coletados.length]);

  const coletar = useCallback((indice: number) => {
    setColetados(atuais => {
      if (atuais.includes(indice)) return atuais;
      if (som) tocarNota(indice);
      return [...atuais, indice];
    });
  }, [som]);

  const reiniciar = () => {
    setColetados([]);
    setIniciado(false);
  };

  return <main className={`${styles.reverie} ${iniciado ? styles.playing : ""} ${completo ? styles.complete : ""}`}>
    <div className={styles.sky} aria-hidden="true"><i/><i/><i/></div>
    <header className={styles.header}>
      <Link href="/projetos">← Arquivo de obras</Link>
      <span>KAWAII REVERIE · 夢の庭</span>
      <button type="button" onClick={() => setSom(valor => !valor)} aria-pressed={som}>{som ? "Som ligado" : "Som desligado"}</button>
    </header>

    <section className={styles.scene} aria-label="Jardim dos Sonhos">
      <div className={styles.moon} aria-hidden="true"><span /></div>
      <div className={styles.clouds} aria-hidden="true"><i/><i/><i/></div>
      <div className={styles.hills} aria-hidden="true"><i/><i/><i/></div>

      {fragmentos.map((fragmento, indice) => <button
        type="button"
        key={indice}
        className={`${styles.mote} ${coletados.includes(indice) ? styles.collected : ""}`}
        style={{ left:`${fragmento.x}%`, top:`${fragmento.y}%`, animationDelay:fragmento.delay }}
        onClick={() => coletar(indice)}
        aria-label={`Coletar fragmento de sonho ${indice + 1}`}
        disabled={!iniciado || coletados.includes(indice)}
      ><span /><i /></button>)}

      <div className={styles.spirits}>
        {espiritos.map(espirito => {
          const acordado = coletados.length >= espirito.limiar;
          return <article className={`${styles.spirit} ${espirito.classe} ${acordado ? styles.awake : ""}`} key={espirito.nome} aria-label={`${espirito.nome}, espírito ${espirito.cor}, ${acordado ? "acordado" : "adormecido"}`}>
            <div className={styles.ears}><i/><i/></div><div className={styles.face}><i/><i/><b /></div><div className={styles.body}/><span>{espirito.nome}</span>
          </article>;
        })}
      </div>

      <div className={styles.flowers} aria-hidden="true">{Array.from({length:13},(_,i)=><i key={i}/>)}</div>
    </section>

    <aside className={styles.progress} aria-live="polite"><div><span>Fragmentos reunidos</span><b>{String(coletados.length).padStart(2,"0")} / 06</b></div><i><span style={{width:`${coletados.length / 6 * 100}%`}}/></i><p>{mensagem}</p></aside>

    {!iniciado && <section className={styles.intro}>
      <div className={styles.seal}>夢</div><span>UM PEQUENO CONTO INTERATIVO</span><h1>O jardim esqueceu<br/>como <em>sonhar.</em></h1><p>Encontre seis fragmentos de luz e desperte Momo, Sora e Hana antes que a lua atravesse o céu.</p><button type="button" onClick={() => setIniciado(true)}>Entrar no jardim <b>↗</b></button>
    </section>}

    {completo && <section className={styles.ending} role="dialog" aria-modal="true" aria-labelledby="final-title"><span>SONHO RESTAURADO</span><h2 id="final-title">Boa noite,<br/><em>pequenas estrelas.</em></h2><p>Quando alguém oferece atenção a uma coisa pequena, até a noite aprende uma nova forma de brilhar.</p><button type="button" onClick={reiniciar}>Sonhar novamente</button><Link href="/projetos">Voltar ao jianghu ↗</Link></section>}
  </main>;
}
