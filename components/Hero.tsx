
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Protocolo de 7 Dias para Performance Máxima
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]">
          Recupere o <span className="gradient-text">Foco Profundo</span> — Mesmo Vivendo Cercado por IA e Notificações
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Um sistema visual, simples e aplicável para eliminar a dispersão mental e voltar a produzir no seu máximo absoluto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://pay.kiwify.com.br/lXkCtsv" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-600/25 active:scale-95">
            Quero Começar Agora
          </a>
          <a href="#curriculum" className="w-full sm:w-auto px-8 py-4 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 rounded-xl font-medium transition-all border border-zinc-700">
            Saiba mais
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <h3 className="text-white font-semibold mb-1">Sem hacks milagrosos</h3>
            <p className="text-zinc-500 text-sm">Baseado em fisiologia da atenção, não em promessas vazias.</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <h3 className="text-white font-semibold mb-1">Aplicação imediata</h3>
            <p className="text-zinc-500 text-sm">Protocolos que você implementa em 5 minutos no seu dia.</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <h3 className="text-white font-semibold mb-1">Sistema Visual</h3>
            <p className="text-zinc-500 text-sm">Fácil de entender, mais fácil ainda de lembrar e executar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
