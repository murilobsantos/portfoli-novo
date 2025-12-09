'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Character {
  name: string
  level: number
  health: number
  mana: number
  strength: number
  agility: number
  intelligence: number
  divinity: number
}

interface Quest {
  id: number
  title: string
  description: string
  completed: boolean
}

interface InventoryItem {
  id: number
  name: string
  type: string
  rarity: 'common' | 'epic' | 'legendary'
  equipped: boolean
}

export default function EchoesOfDivinityDemo() {
  const [activeTab, setActiveTab] = useState<'character' | 'inventory' | 'quests'>('character')

  const [character, setCharacter] = useState<Character>({
    name: 'Espírito Divino',
    level: 1,
    health: 100,
    mana: 50,
    strength: 15,
    agility: 12,
    intelligence: 18,
    divinity: 25
  })

  const [inventory] = useState<InventoryItem[]>([
    { id: 1, name: 'Espada Sagrada', type: 'weapon', rarity: 'legendary', equipped: true },
    { id: 2, name: 'Armadura Celestial', type: 'armor', rarity: 'epic', equipped: true },
    { id: 3, name: 'Poção de Mana', type: 'consumable', rarity: 'common', equipped: false },
    { id: 4, name: 'Anel da Divindade', type: 'accessory', rarity: 'legendary', equipped: false }
  ])

  const [quests, setQuests] = useState<Quest[]>([
    { id: 1, title: 'Primeiro Contato Divino', description: 'Estabeleça conexão com o plano espiritual', completed: true },
    { id: 2, title: 'Provação dos Elementos', description: 'Domine os quatro elementos básicos', completed: false },
    { id: 3, title: 'Busca pela Relíquia Perdida', description: 'Localize o artefato ancestral', completed: false },
    { id: 4, title: 'Aliança com os Deuses', description: 'Ganhe a confiança das divindades maiores', completed: false }
  ])

  const levelUp = () => {
    setCharacter(prev => ({
      ...prev,
      level: prev.level + 1,
      health: prev.health + 10,
      mana: prev.mana + 5,
      strength: prev.strength + 2,
      agility: prev.agility + 1,
      intelligence: prev.intelligence + 3,
      divinity: prev.divinity + 5
    }))
  }

  const completeQuest = (questId: number) => {
    setQuests(prev => prev.map(quest =>
      quest.id === questId ? { ...quest, completed: true } : quest
    ))
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'text-yellow-400'
      case 'epic': return 'text-purple-400'
      case 'common': return 'text-gray-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            神的回响
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
            Echoes of Divinity - Demo Interativo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Embarque em uma jornada cósmica onde todas as mitologias colidem. Construa seu legado espiritual
            através de missões divinas e evolução transcendente.
          </p>
        </header>

        {/* Interactive Demo */}
        <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50 mb-16">
          <h3 className="text-3xl font-bold text-red-400 mb-6 text-center">
            Jornada do Espírito
          </h3>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-black/30 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('character')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'character'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-red-400'
                }`}
              >
                👤 Personagem
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'inventory'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-red-400'
                }`}
              >
                🎒 Inventário
              </button>
              <button
                onClick={() => setActiveTab('quests')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                  activeTab === 'quests'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-red-400'
                }`}
              >
                📜 Missões
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'character' && (
              <div className="text-center">
                <div className="text-6xl mb-6">⚔️</div>
                <h4 className="text-2xl font-bold text-yellow-400 mb-4">{character.name}</h4>
                <p className="text-lg text-gray-300 mb-6">Nível {character.level}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-red-400 font-bold">Vida</div>
                    <div className="text-2xl font-bold text-red-400">{character.health}</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-blue-400 font-bold">Mana</div>
                    <div className="text-2xl font-bold text-blue-400">{character.mana}</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-orange-400 font-bold">Força</div>
                    <div className="text-2xl font-bold text-orange-400">{character.strength}</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-green-400 font-bold">Agilidade</div>
                    <div className="text-2xl font-bold text-green-400">{character.agility}</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-purple-400 font-bold">Inteligência</div>
                    <div className="text-2xl font-bold text-purple-400">{character.intelligence}</div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg md:col-span-2">
                    <div className="text-yellow-400 font-bold">Divindade</div>
                    <div className="text-3xl font-bold text-yellow-400">{character.divinity}</div>
                  </div>
                </div>

                <button
                  onClick={levelUp}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                >
                  ⚡ Evoluir Espírito
                </button>
              </div>
            )}

            {activeTab === 'inventory' && (
              <div>
                <h4 className="text-2xl font-bold text-center text-yellow-400 mb-6">Inventário Sagrado</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {inventory.map(item => (
                    <div key={item.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-bold text-white">{item.name}</h5>
                        <span className={`text-sm font-bold ${getRarityColor(item.rarity)}`}>
                          {item.rarity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2 capitalize">{item.type}</p>
                      {item.equipped && (
                        <span className="text-green-400 text-sm font-bold">✓ Equipado</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'quests' && (
              <div>
                <h4 className="text-2xl font-bold text-center text-yellow-400 mb-6">Missões Divinas</h4>
                <div className="space-y-4">
                  {quests.map(quest => (
                    <div key={quest.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-bold text-white">{quest.title}</h5>
                        {quest.completed ? (
                          <span className="text-green-400 font-bold">✓ Concluída</span>
                        ) : (
                          <button
                            onClick={() => completeQuest(quest.id)}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          >
                            Completar
                          </button>
                        )}
                      </div>
                      <p className="text-gray-400">{quest.description}</p>
                    </div>
                  ))}
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
              className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300"
            >
              ← Voltar aos Demos
            </Link>
            <Link
              href="/projetos/echoes-of-divinity"
              className="inline-block px-6 py-3 border border-red-500 text-red-400 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Ver Projeto Completo →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
