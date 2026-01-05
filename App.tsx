
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Audience from './components/Audience';
import Curriculum from './components/Curriculum';
import Diagnostic from './components/Diagnostic';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-black shadow-lg shadow-emerald-500/20">DF</div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Deep Focus</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#pricing" className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-600/20">
              Quero Acessar
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Problem />
        <Diagnostic />
        <Solution />
        <Audience />
        <Curriculum />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default App;
