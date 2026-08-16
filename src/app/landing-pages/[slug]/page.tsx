import { notFound } from "next/navigation";
import { landings, segmentos, type Segmento } from "../dados";
import Experiencia from "./experiencia";

export function generateStaticParams() { return segmentos.map((slug) => ({ slug })); }

export default async function LandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!segmentos.includes(slug as Segmento)) notFound();
  return <Experiencia dados={landings[slug as Segmento]} />;
}
