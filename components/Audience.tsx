
import React from 'react';

const Audience: React.FC = () => {
  return (
    <section className="py-24 border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Para Quem É */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/20">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500 text-black flex items-center justify-center text-lg">✔</span>
              Para Quem É
            </h3>
            <ul className="space-y-4">
              {[
                "Estudantes que precisam de foco em provas",
                "Criadores de conteúdo sobrecarregados",
                "Programadores que perdem o fluxo",
                "Profissionais que trabalham no computador",
                "Pessoas cansadas de se sentirem dispersas"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Para Quem NÃO É */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-zinc-900 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6 text-zinc-400 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-zinc-800 text-zinc-500 flex items-center justify-center text-lg">✖</span>
              Para Quem NÃO É
            </h3>
            <ul className="space-y-4">
              {[
                "Quem busca atalhos milagrosos",
                "Quem não está disposto a executar passos simples",
                "Quem acha que foco é apenas força de vontade"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-500 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
