import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kawaii Reverie - O Sonho Fofo da Imaginação',
  description: 'Uma experiência visual encantadora que combina elementos kawaii com interatividade moderna.',
}

export default function KawaiiReveriePage() {
  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            かわいい夢想
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">
            Kawaii Reverie
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Onde a fofura encontra a tecnologia em uma dança encantadora. Uma jornada através de mundos pastel
            onde cada pixel pulsa com alegria inocente e maravilha digital.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Project Overview */}
          <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50">
            <h3 className="text-3xl font-bold text-pink-400 mb-6 text-center">
              O Sonho Fofo da Imaginação
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-pink-400 mb-4">Visão do Projeto</h4>
                <p className="text-gray-300 mb-4">
                  Kawaii Reverie é mais que uma aplicação — é um abraço digital caloroso que lembra que a tecnologia
                  pode ser gentil, acolhedora e cheia de alegria. Cada interação é projetada para trazer um sorriso,
                  transformando momentos digitais em memórias felizes.
                </p>
                <p className="text-gray-300">
                  Inspirado na cultura kawaii, o projeto celebra a beleza da simplicidade e do encantamento, provando
                  que interfaces poderosas podem ser tão adoráveis quanto funcionais.
                </p>
              </div>
              <div>
