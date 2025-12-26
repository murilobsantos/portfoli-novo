'use client';

import Link from 'next/link';
import { useState } from 'react';

interface StudySession {
  id: number;
  subject: string;
  questionsAnswered: number;
  correctAnswers: number;
  timeSpent: number;
}

interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number;
  answered: boolean;
}

export default function EstudaPenalDemoPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'questions' | 'progress' | 'sessions'>('dashboard');

  const [studySessions, setStudySessions] = useState<StudySession[]>([
    { id: 1, subject: 'Direito Penal', questionsAnswered: 25, correctAnswers: 20, timeSpent: 45 },
    { id: 2, subject: 'Processo Penal', questionsAnswered: 30, correctAnswers: 28, timeSpent: 60 },
    { id: 3, subject: 'Criminologia', questionsAnswered: 15, correctAnswers: 12, timeSpent: 30 }
  ]);

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      subject: 'Direito Penal',
      question: 'Qual é a diferença entre dolo e culpa?',
      options: ['Dolo é intencional, culpa é negligente', 'Dolo é negligente, culpa é intencional', 'São sinônimos', 'Dolo é para crimes, culpa para contravenções'],
      correctAnswer: 0,
      answered: false
    },
    {
      id: 2,
      subject: 'Processo Penal',
      question: 'O que é habeas corpus?',
      options: ['Ação contra prisão ilegal', 'Pedido de liberdade provisória', 'Recurso contra sentença', 'Mandado de segurança'],
      correctAnswer: 0,
      answered: false
    },
    {
      id: 3,
      subject: 'Criminologia',
      question: 'Qual teoria explica o crime como resultado de fatores sociais?',
      options: ['Teoria Biológica', 'Teoria Psicológica', 'Teoria Sociológica', 'Teoria Econômica'],
      correctAnswer: 2,
      answered: false
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const answerQuestion = () => {
    if (selectedAnswer !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestion].answered = true;
      setQuestions(updatedQuestions);
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const totalQuestions = questions.length;
  const answeredQuestions = questions.filter(q => q.answered).length;
  const correctAnswers = questions.filter(q => q.answered && selectedAnswer === q.correctAnswer).length;

  return (
    <div className="min-h-screen p-8 oriental-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold wuxia-text-glow mb-6 font-serif">
            律法之鑰
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            Estuda Penal - Demo Interativo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Domine o direito penal através de sessões interativas de estudo. Teste seus conhecimentos
            e acompanhe seu progresso na jornada jurídica.
          </p>
        </header>

        {/* Interactive Demo */}
        <section className="wuxia-border wuxia-glow rounded-lg p-8 bg-black/50 mb-16">
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
            Plataforma de Estudo Jurídico
          </h3>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-black/30 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setActiveTab('dashboard')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'dashboard'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                📊 Dashboard
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('questions')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'questions'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                ❓ Questões
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('progress')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'progress'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                📈 Progresso
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sessions')}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'sessions'
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                📚 Sessões
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'dashboard' && (
              <div className="text-center">
                <h4 className="text-2xl font-bold text-cyan-400 mb-4">Dashboard do Estudante</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-3xl mb-2">📚</div>
                    <div className="text-2xl font-bold text-green-400">{totalQuestions}</div>
                    <div className="text-gray-300">Questões Totais</div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-3xl mb-2">✅</div>
                    <div className="text-2xl font-bold text-blue-400">{answeredQuestions}</div>
                    <div className="text-gray-300">Respondidas</div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="text-2xl font-bold text-yellow-400">{correctAnswers}</div>
                    <div className="text-gray-300">Corretas</div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-2xl font-bold text-purple-400">
                      {totalQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) || 0 : 0}%
                    </div>
                    <div className="text-gray-300">Aproveitamento</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'questions' && (
              <div>
                <h4 className="text-2xl font-bold text-center text-cyan-400 mb-6">Banco de Questões</h4>
                {questions.length > 0 && (
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <div className="mb-4">
                      <span className="text-cyan-400 font-bold">{questions[currentQuestion].subject}</span>
                      <span className="text-gray-400 ml-2">Questão {currentQuestion + 1} de {questions.length}</span>
                    </div>
                    <h5 className="text-lg font-bold text-white mb-4">{questions[currentQuestion].question}</h5>
                    <div className="space-y-2 mb-6">
                      {questions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedAnswer(index)}
                          className={`w-full text-left p-3 rounded-lg transition-colors cursor-pointer ${
                            selectedAnswer === index
                              ? 'bg-cyan-600 text-white'
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={answerQuestion}
                      disabled={selectedAnswer === null}
                      className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Responder
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="text-center">
                <h4 className="text-2xl font-bold text-cyan-400 mb-4">Acompanhamento de Progresso</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-green-400 mb-4">Progresso Geral</h5>
                    <div className="space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Questões Respondidas</span>
                        <span className="text-green-400">{answeredQuestions}/{totalQuestions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Taxa de Acerto</span>
                        <span className="text-green-400">
                          {answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Tempo Médio por Questão</span>
                        <span className="text-green-400">2.5 min</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-blue-400 mb-4">Por Matéria</h5>
                    <div className="space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Direito Penal</span>
                        <span className="text-blue-400">80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Processo Penal</span>
                        <span className="text-blue-400">65%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Criminologia</span>
                        <span className="text-blue-400">45%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sessions' && (
              <div>
                <h4 className="text-2xl font-bold text-center text-cyan-400 mb-6">Histórico de Sessões</h4>
                <div className="space-y-4">
                  {studySessions.map(session => (
                    <div key={session.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-bold text-white">{session.subject}</h5>
                        <span className="text-cyan-400 text-sm">
                          {Math.round((session.correctAnswers / session.questionsAnswered) * 100)}% acertos
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{session.questionsAnswered} questões</span>
                        <span>{session.timeSpent} min</span>
                      </div>
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
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white font-bold rounded-lg hover:from-cyan-700 hover:to-cyan-900 transition-all duration-300"
            >
              ← Voltar aos Demos
            </Link>
            <Link
              href="/projetos"
              className="inline-block px-6 py-3 border border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explorar Projetos →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
