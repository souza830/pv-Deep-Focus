
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O Problema Não é Você.</h2>
            <p className="text-xl text-zinc-400 font-medium">Você está distraído por <span className="text-red-500">design</span>.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Economia da Atenção</h4>
                  <p className="text-zinc-400 text-sm">Algoritmos bilionários são treinados 24h por dia para manter você deslizando a tela.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Notificações Invasivas</h4>
                  <p className="text-zinc-400 text-sm">Cada alerta treina seu cérebro para a superficialidade e reatividade constante.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">O Mito da Multitarefa</h4>
                  <p className="text-zinc-400 text-sm">Saltar entre tarefas destrói sua capacidade de entrar em estado de fluxo.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-zinc-100 italic">O Resultado?</h3>
              <ul className="space-y-4">
                {[
                  "Começa tarefas e não termina",
                  "Trabalha o dia inteiro e rende pouco",
                  "Sente cansaço mental constante",
                  "Vive em modo reativo"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300">
                    <span className="w-5 h-5 flex-shrink-0 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center text-xs">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-emerald-400 font-bold">O Protocolo Deep Focus foi criado para quebrar esse ciclo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
