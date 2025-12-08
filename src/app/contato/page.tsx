'use client';

import { useState } from 'react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen wuxia-bg smoke-effect">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
              聯絡
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
              Contato - O Portal das Mensagens
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Que sua mensagem atravesse os véus digitais como uma flecha certeira.
              Compartilhe suas ideias e juntos forjaremos algo extraordinário.
            </p>
          </header>

          {/* Contact Form */}
          <div className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-red-400 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-red-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-red-400 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors"
                  placeholder="Sobre o que deseja falar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-red-400 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                  placeholder="Conte-me sobre seu projeto, ideia ou pergunta..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg rounded-lg wuxia-glow-hover wuxia-border transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    📨 Enviar Mensagem
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-red-400 mb-2">Resposta Rápida</h3>
              <p className="text-gray-300 text-sm">
                Respondo todas as mensagens em até 24 horas durante dias úteis.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-red-400 mb-2">Projetos Personalizados</h3>
              <p className="text-gray-300 text-sm">
                Interessado em colaborações? Vamos discutir seu projeto em detalhes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-lg font-bold text-red-400 mb-2">Consultorias</h3>
              <p className="text-gray-300 text-sm">
                Precisa de orientação técnica? Ofereço consultorias especializadas.
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-block px-6 py-3 border-2 border-red-500 text-red-400 font-bold rounded-lg hover:bg-red-500 hover:text-black transition-all duration-300"
            >
              ← Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
