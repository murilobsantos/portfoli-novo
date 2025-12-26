'use client';

import Link from 'next/link';
import { useState } from 'react';

interface KawaiiElement {
  id: number;
  name: string;
  emoji: string;
  color: string;
  size: number;
  x: number;
  y: number;
}

interface Animation {
  id: number;
  name: string;
  type: 'bounce' | 'spin' | 'pulse' | 'float';
  active: boolean;
}

export default function KawaiiReverieDemoPage() {
  const [activeTab, setActiveTab] = useState<'playground' | 'customize' | 'gallery' | 'animations'>('playground');

  const [kawaiiElements, setKawaiiElements] = useState<KawaiiElement[]>([
    { id: 1, name: 'Coelhinho', emoji: '🐰', color: 'pink', size: 50, x: 100, y: 100 },
    { id: 2, name: 'Gatinho', emoji: '🐱', color: 'blue', size: 45, x: 200, y: 150 },
    { id: 3, name: 'Florzinha', emoji: '🌸', color: 'purple', size: 40, x: 300, y: 200 }
  ]);

  const [animations, setAnimations] = useState<Animation[]>([
    { id: 1, name: 'Saltinho Feliz', type: 'bounce', active: false },
    { id: 2, name: 'Girandinha', type: 'spin', active: false },
    { id: 3, name: 'Pulsação Doce', type: 'pulse', active: false },
    { id: 4, name: 'Flutuando', type: 'float', active: false }
  ]);

  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [customColor, setCustomColor] = useState('#ff69b4');
  const [customSize, setCustomSize] = useState(50);

  const addElement = () => {
    const newElement: KawaiiElement = {
      id: kawaiiElements.length + 1,
      name: `Elemento ${kawaiiElements.length + 1}`,
      emoji: '✨',
      color: customColor,
      size: customSize,
      x: Math.random() * 400 + 50,
      y: Math.random() * 300 + 50
    };
    setKawaiiElements([...kawaiiElements, newElement]);
  };

  const updateElement = (id: number, updates: Partial<KawaiiElement>) => {
    setKawaiiElements(elements =>
      elements.map(el => el.id === id ? { ...el, ...updates } : el)
    );
  };

  const removeElement = (id: number) => {
    setKawaiiElements(elements => elements.filter(el => el.id !== id));
  };

  const toggleAnimation = (id: number) => {
    setAnimations(anims =>
      anims.map(anim => anim.id === id ? { ...anim, active: !anim.active } : anim)
    );
  };

  const getAnimationClass = (type: string, active: boolean) => {
    if (!active) return '';
    switch (type) {
      case 'bounce': return 'animate-bounce';
      case 'spin': return 'animate-spin';
      case 'pulse': return 'animate-pulse';
      case 'float': return 'animate-bounce';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            かわいい夢想
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">
            Kawaii Reverie - Demo Interativo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entre em um mundo fofo e encantador! Crie, personalize e anime elementos kawaii
            em um playground digital cheio de alegria e criatividade.
          </p>
        </header>

        {/* Interactive Demo */}
        <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50 mb-16">
          <h3 className="text-3xl font-bold text-pink-400 mb-6 text-center">
            Playground Kawaii
          </h3>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-black/30 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setActiveTab('playground')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'playground'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-400 hover:text-pink-400'
                }`}
              >
                🎮 Playground
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('customize')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'customize'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-400 hover:text-pink-400'
                }`}
              >
                🎨 Personalizar
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('gallery')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'gallery'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-400 hover:text-pink-400'
                }`}
              >
                🖼️ Galeria
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('animations')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'animations'
                    ? 'bg-pink-600 text-white'
                    : 'text-gray-400 hover:text-pink-400'
                }`}
              >
                ✨ Animações
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'playground' && (
              <div className="text-center">
                <h4 className="text-2xl font-bold text-pink-400 mb-4">Mundo Kawaii Interativo</h4>
                <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg h-96 mb-6 overflow-hidden">
                  {kawaiiElements.map(element => (
                    <div
                      key={element.id}
                      className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 ${getAnimationClass(
                        animations.find(a => a.active)?.type || '',
                        animations.some(a => a.active)
                      )}`}
                      style={{
                        left: element.x,
                        top: element.y,
                        fontSize: `${element.size}px`,
                        color: element.color,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                      }}
                      onClick={() => setSelectedElement(element.id)}
                    >
                      {element.emoji}
                    </div>
                  ))}
                  {selectedElement && (
                    <div className="absolute top-4 right-4 bg-white/90 p-4 rounded-lg shadow-lg">
                      <h5 className="font-bold text-gray-800 mb-2">Elemento Selecionado</h5>
                      <button
                        type="button"
                        onClick={() => removeElement(selectedElement)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                      >
                        Remover
                      </button>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={addElement}
                  className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  ➕ Adicionar Elemento Kawaii
                </button>
              </div>
            )}

            {activeTab === 'customize' && (
              <div>
                <h4 className="text-2xl font-bold text-center text-pink-400 mb-6">Personalização Kawaii</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-pink-400 mb-4">Configurações Gerais</h5>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Cor Personalizada</label>
                        <input
                          type="color"
                          value={customColor}
                          onChange={(e) => setCustomColor(e.target.value)}
                          className="w-full h-10 rounded border border-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Tamanho ({customSize}px)</label>
                        <input
                          type="range"
                          min="20"
                          max="100"
                          value={customSize}
                          onChange={(e) => setCustomSize(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-pink-400 mb-4">Elementos Existentes</h5>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {kawaiiElements.map(element => (
                        <div key={element.id} className="flex items-center justify-between bg-gray-700 p-2 rounded">
                          <span className="text-white">{element.emoji} {element.name}</span>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => updateElement(element.id, { color: customColor })}
                              className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                            >
                              Cor
                            </button>
                            <button
                              type="button"
                              onClick={() => updateElement(element.id, { size: customSize })}
                              className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                            >
                              Tamanho
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div>
                <h4 className="text-2xl font-bold text-center text-pink-400 mb-6">Galeria Kawaii</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {kawaiiElements.map(element => (
                    <div key={element.id} className="bg-gray-800 p-4 rounded-lg text-center">
                      <div
                        className="text-6xl mb-2"
                        style={{ color: element.color }}
                      >
                        {element.emoji}
                      </div>
                      <h5 className="font-bold text-white mb-1">{element.name}</h5>
                      <p className="text-gray-400 text-sm">Tamanho: {element.size}px</p>
                      <p className="text-gray-400 text-sm">Cor: {element.color}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'animations' && (
              <div className="text-center">
                <h4 className="text-2xl font-bold text-pink-400 mb-4">Controle de Animações</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-pink-400 mb-4">Animações Disponíveis</h5>
                    <div className="space-y-3">
                      {animations.map(animation => (
                        <div key={animation.id} className="flex items-center justify-between">
                          <span className="text-white">{animation.name}</span>
                          <button
                            type="button"
                            onClick={() => toggleAnimation(animation.id)}
                            className={`px-4 py-2 rounded transition-colors ${
                              animation.active
                                ? 'bg-pink-600 text-white'
                                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                            }`}
                          >
                            {animation.active ? 'Ativa' : 'Inativa'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-pink-400 mb-4">Prévia de Animação</h5>
                    <div className="flex justify-center items-center h-32">
                      <div
                        className={`text-6xl ${getAnimationClass(
                          animations.find(a => a.active)?.type || '',
                          animations.some(a => a.active)
                        )}`}
                        style={{ color: customColor }}
                      >
                        ✨
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/demos"
              className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-800 text-white font-bold rounded-lg hover:from-pink-700 hover:to-pink-900 transition-all duration-300"
            >
              ← Voltar aos Demos
            </Link>
            <Link
              href="/projetos"
              className="inline-block px-6 py-3 border border-pink-500 text-pink-400 font-bold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Explorar Projetos →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
