import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-20 border-b border-white/10 bg-[#010518]/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-[#010518] font-bold text-xl">
            C
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">
            Capital<span className="font-light opacity-70">Partners</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#solucoes" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Soluções</a>
          <a href="#clientes" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Clientes</a>
          <a href="#sobre" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sobre Nós</a>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contato" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Entrar
          </a>
          <a href="#whatsapp" className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-[#010518] transition-colors hover:bg-accent-hover">
            Fale Conosco
          </a>
        </div>

        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#010518] border-b border-white/10 p-4 flex flex-col gap-4 lg:hidden">
          <a href="#solucoes" className="text-sm font-medium text-gray-300 hover:text-white p-2">Soluções</a>
          <a href="#clientes" className="text-sm font-medium text-gray-300 hover:text-white p-2">Clientes</a>
          <a href="#sobre" className="text-sm font-medium text-gray-300 hover:text-white p-2">Sobre Nós</a>
          <div className="h-px bg-white/10 my-2"></div>
          <a href="#contato" className="text-sm font-medium text-white p-2">Entrar</a>
          <a href="#whatsapp" className="rounded-md bg-accent px-5 py-3 text-center text-sm font-medium text-[#010518]">
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
