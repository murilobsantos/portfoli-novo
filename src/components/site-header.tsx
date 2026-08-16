"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [aberto, setAberto] = useState(false);
  return <header className="site-header">
    <Link href="/" className="site-brand" aria-label="Murilo Santos, início"><span>MS</span><small>Murilo Santos<br/>Creative developer</small></Link>
    <button className="site-menu-button" onClick={() => setAberto(!aberto)} aria-expanded={aberto} aria-label="Alternar menu"><i/><i/></button>
    <nav className={aberto ? "is-open" : ""}>
      <Link href="/projetos" onClick={() => setAberto(false)}>Projetos</Link>
      <Link href="/devlog" onClick={() => setAberto(false)}>Devlog</Link>
      <Link href="/sobre" onClick={() => setAberto(false)}>Sobre</Link>
      <Link href="/contato" className="site-contact" onClick={() => setAberto(false)}>Vamos conversar ↗</Link>
    </nav>
  </header>;
}
