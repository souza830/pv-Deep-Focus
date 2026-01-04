
import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-zinc-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">O Que é o Protocolo Deep Focus</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Um guia visual e direto ao ponto que ensina você a trabalhar <span className="text-white font-semibold">menos tempo com mais qualidade</span>, blindando sua atenção contra as armadilhas modernas.
              </p>
              
              <div className="space-y-4">
                {[
                  "Blindar sua atenção contra distrações digitais",
                  "Entrar em estado de foco profundo sob demanda",
                  "Recuperar clareza mental e energia cognitiva",
                  "Usar rituais simples e blocos de foco estrategicamente"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1 w-5 h-5 bg-emerald-500/10 text-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    <span className="text-zinc-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 aspect-square flex flex-col justify-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-black mb-6 shadow-xl shadow-emerald-500/20">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">Foco é uma Habilidade</h3>
                  <p className="text-zinc-400">E como qualquer habilidade, ela pode ser treinada com os estímulos corretos.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%] rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 font-bold uppercase tracking-wider">
                    <span>Performance Atual</span>
                    <span className="text-emerald-500">Com o Protocolo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
