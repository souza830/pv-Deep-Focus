
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
          
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">Oferta de Lançamento</span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white leading-tight">Protocolo Deep Focus</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Como Recuperar o Foco Profundo na Era da IA. Guia Visual, objetivo e prático.
          </p>

          <div className="flex flex-col items-center mb-12">
            <span className="text-zinc-500 line-through text-lg">De R$ 97,00 por apenas</span>
            <div className="flex items-start justify-center gap-1">
              <span className="text-2xl font-bold text-emerald-500 mt-2">R$</span>
              <span className="text-7xl font-black text-white">27</span>
            </div>
            <p className="text-zinc-400 font-medium mt-2">Pagamento único. Acesso vitalício.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-12 text-left">
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              📘 PDF Visual e Objetivo
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              📱 Leitura Rápida (Mobile/Desktop)
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              ⚡ Aplicação Imediata
            </div>
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              ♻ Pode ser revisitado sempre
            </div>
          </div>

          <a href="https://pay.kiwify.com.br/lXkCtsv" className="block w-full max-w-md mx-auto py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xl rounded-2xl transition-all shadow-2xl shadow-emerald-600/40 transform hover:scale-[1.02] active:scale-95">
            ASSUMIR O CONTROLE AGORA
          </a>
          
          <div className="mt-8 flex items-center justify-center gap-6 opacity-50 grayscale">
            <span className="text-xs font-bold text-zinc-400">PAGAMENTO SEGURO</span>
            <span className="text-xs font-bold text-zinc-400">ACESSO IMEDIATO</span>
            <span className="text-xs font-bold text-zinc-400">GARANTIA DE 7 DIAS</span>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-zinc-500 text-sm leading-relaxed">
            Sua atenção está sendo drenada todos os dias. Você pode continuar reagindo, ou assumir o controle agora. Recupere seu foco. Sua clareza. Sua performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
