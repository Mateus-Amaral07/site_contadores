import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-[#010518] py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto w-full max-w-screen-md px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Pronto para elevar o nível da sua gestão?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Agende uma consultoria gratuita e descubra como podemos otimizar seus resultados e proteger seu patrimônio.
        </p>
        
        <a 
          href="#whatsapp" 
          className="inline-flex items-center gap-2 rounded-lg bg-accent hover:bg-accent-hover text-[#010518] px-8 py-4 text-lg font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-0.5"
        >
          <MessageCircle size={24} />
          Falar com Especialista
        </a>
      </div>
    </section>
  );
}
