
import React, { useState } from 'react';
import { getFocusDiagnostic } from '../services/geminiService';
import { DiagnosticResult } from '../types';

const Diagnostic: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState('');
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answers.trim()) return;
    setLoading(true);
    try {
      const data = await getFocusDiagnostic(answers);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-zinc-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Descubra seu Perfil de Foco</h2>
            <p className="text-zinc-400">Nossa IA analisa sua situação atual e recomenda a melhor abordagem do protocolo.</p>
          </div>

          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Descreva brevemente sua maior dificuldade em focar hoje:</label>
                <textarea
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-2xl p-4 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all min-h-[120px]"
                  placeholder="Ex: Não consigo parar de olhar o Instagram enquanto trabalho, me sinto culpado ao final do dia..."
                  value={answers}
                  onChange={(e) => setAnswers(e.target.value)}
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                disabled={loading || !answers}
                className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analisando hábitos...
                  </>
                ) : 'Gerar Diagnóstico Grátis'}
              </button>
            </form>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">Seu Perfil:</span>
                <h3 className="text-2xl font-bold text-white mb-2">{result.archetype}</h3>
                <p className="text-zinc-300 leading-relaxed mb-4">{result.description}</p>
                <div className="pt-4 border-t border-emerald-500/10">
                  <span className="text-white font-bold text-sm block mb-1">Como o Protocolo te ajuda:</span>
                  <p className="text-zinc-400 italic text-sm">"{result.advice}"</p>
                </div>
              </div>
              <button 
                onClick={() => setResult(null)}
                className="text-zinc-500 hover:text-white transition-colors text-sm"
              >
                Fazer nova análise
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;
