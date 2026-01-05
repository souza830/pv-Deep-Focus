
import React from 'react';

const Curriculum: React.FC = () => {
  const items = [
    { title: "Identificação da TMI", desc: "Como identificar sua Tarefa Mais Importante todos os dias." },
    { title: "Blocos de 90 Minutos", desc: "O protocolo exato para entrar em estado de hiper-foco." },
    { title: "Blindagem Digital", desc: "Protocolo contra celular, abas infinitas e notificações." },
    { title: "Reset Mental 5x5", desc: "Exercício prático de 5 minutos para limpar o nevoeiro mental." },
    { title: "Rotina para Dias Caóticos", desc: "A estratégia mínima quando você não tem tempo para nada." },
    { title: "Planejamento Semanal", desc: "O sistema de visão aérea para não se perder no tático." },
    { title: "Erros Silenciosos", desc: "Os 3 hábitos que matam seu foco sem você perceber." },
    { title: "Plano de 7 Dias", desc: "O roadmap passo a passo para sua implementação imediata." }
  ];

  return (
    <section id="curriculum" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">O que você vai aprender</h2>
          <p className="text-zinc-400">Um roadmap completo do básico ao avançado em gestão de atenção.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {items.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 text-zinc-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-black transition-colors font-bold">
                {idx + 1}
              </div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border border-emerald-500/20 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Resultados em 7 Dias</h3>
          <p className="text-zinc-300 italic">"Menos ansiedade, mais clareza, redução da procrastinação e controle real sobre o tempo."</p>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
