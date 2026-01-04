
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-xs font-bold text-zinc-400">DF</div>
            <span className="font-bold text-zinc-400">Protocolo Deep Focus</span>
          </div>
          
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
          
          <div className="text-sm text-zinc-600">
            © {new Date().getFullYear()} - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
