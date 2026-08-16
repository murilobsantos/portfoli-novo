import Link from "next/link";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div><span className="eyebrow">Tem uma ideia em mente?</span><h2>Vamos criar algo<br/><em>memorável.</em></h2></div>
    <Link href="/contato" className="circle-link">Iniciar<br/>conversa <b>↗</b></Link>
    <div className="footer-bottom"><span>© 2026 Murilo Santos</span><span>Design & desenvolvimento com intenção.</span><a href="https://github.com/murilobsantos" target="_blank" rel="noreferrer">GitHub ↗</a></div>
  </footer>;
}
