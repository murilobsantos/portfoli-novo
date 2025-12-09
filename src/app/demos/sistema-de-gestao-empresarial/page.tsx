'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SistemaDeGestaoEmpresarialPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [employees, setEmployees] = useState([
    { id: 1, name: 'João Silva', role: 'Desenvolvedor', salary: 5000 },
    { id: 2, name: 'Maria Santos', role: 'Designer', salary: 4500 },
    { id: 3, name: 'Pedro Costa', role: 'Gerente', salary: 7000 }
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: '', role: '', salary: '' });

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Sistema de Gestão Empresarial
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
            Demo Interativo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma solução completa para gestão empresarial moderna.
          </p>
        </header>

        {/* Interactive Demo */}
        <section className="bg-gray-800 rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-blue-400 mb-6 text-center">
            Funcionalidades do Sistema
          </h3>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setActiveTab('employees')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'employees'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              👥 Funcionários
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'finance'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              💰 Financeiro
            </button>
          </div>

          {/* Debug Info */}
          <div className="text-center mb-4 text-sm text-gray-400">
            Aba ativa: <span className="font-bold text-blue-400">{activeTab}</span>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'dashboard' && (
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-400 mb-4">Dashboard Executivo</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="text-2xl font-bold text-green-400">{employees.length}</div>
                    <div className="text-gray-300">Funcionários Ativos</div>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="text-3xl mb-2">💰</div>
                    <div className="text-2xl font-bold text-blue-400">R$ {employees.reduce((sum, emp) => sum + emp.salary, 0).toLocaleString()}</div>
                    <div className="text-gray-300">Folha de Pagamento</div>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-2xl font-bold text-yellow-400">+{Math.round((employees.length / 10) * 100)}%</div>
                    <div className="text-gray-300">Produtividade</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'employees' && (
              <div>
                <h4 className="text-2xl font-bold text-blue-400 mb-4 text-center">Gestão de Funcionários</h4>
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-gray-300 mb-4">Adicionar Novo Funcionário</h5>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Nome"
                      value={newEmployee.name}
                      onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                      className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    />
                    <input
                      type="text"
                      placeholder="Cargo"
                      value={newEmployee.role}
                      onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
                      className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    />
                    <input
                      type="number"
                      placeholder="Salário"
                      value={newEmployee.salary}
                      onChange={(e) => setNewEmployee({...newEmployee, salary: e.target.value})}
                      className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (newEmployee.name && newEmployee.role && newEmployee.salary) {
                        setEmployees([...employees, {
                          id: employees.length + 1,
                          name: newEmployee.name,
                          role: newEmployee.role,
                          salary: parseInt(newEmployee.salary)
                        }]);
                        setNewEmployee({ name: '', role: '', salary: '' });
                      }
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Adicionar Funcionário
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-gray-700 rounded-lg">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="px-4 py-3 text-left text-blue-400">Nome</th>
                        <th className="px-4 py-3 text-left text-blue-400">Cargo</th>
                        <th className="px-4 py-3 text-left text-blue-400">Salário</th>
                        <th className="px-4 py-3 text-left text-blue-400">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => (
                        <tr key={employee.id} className="border-b border-gray-600">
                          <td className="px-4 py-3 text-gray-300">{employee.name}</td>
                          <td className="px-4 py-3 text-gray-300">{employee.role}</td>
                          <td className="px-4 py-3 text-gray-300">R$ {employee.salary.toLocaleString()}</td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => setEmployees(employees.filter(e => e.id !== employee.id))}
                              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'finance' && (
              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-400 mb-4">Controle Financeiro</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-green-400 mb-4">Receitas</h5>
                    <div className="space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Salários Recebidos</span>
                        <span className="text-green-400">R$ {(employees.reduce((sum, emp) => sum + emp.salary, 0) * 1.5).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Vendas</span>
                        <span className="text-green-400">R$ {(employees.length * 10000).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-bold border-t border-gray-600 pt-2">
                        <span className="text-gray-300">Total</span>
                        <span className="text-green-400">R$ {(employees.reduce((sum, emp) => sum + emp.salary, 0) * 1.5 + employees.length * 10000).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <h5 className="text-lg font-bold text-red-400 mb-4">Despesas</h5>
                    <div className="space-y-2 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Salários</span>
                        <span className="text-red-400">R$ {employees.reduce((sum, emp) => sum + emp.salary, 0).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Infraestrutura</span>
                        <span className="text-red-400">R$ {(employees.length * 2000).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-bold border-t border-gray-600 pt-2">
                        <span className="text-gray-300">Total</span>
                        <span className="text-red-400">R$ {(employees.reduce((sum, emp) => sum + emp.salary, 0) + employees.length * 2000).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-gray-700 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-300">Lucro Líquido</span>
                    <span className="text-2xl font-bold text-green-400">
                      R$ {((employees.reduce((sum, emp) => sum + emp.salary, 0) * 1.5 + employees.length * 10000) - (employees.reduce((sum, emp) => sum + emp.salary, 0) + employees.length * 2000)).toLocaleString()}
                    </span>
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
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
            >
              ← Voltar aos Demos
            </Link>
            <Link
              href="/projetos"
              className="inline-block px-6 py-3 border border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Explorar Projetos →
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
