import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-primary py-28 lg:py-40 relative overflow-hidden">
      {/* Sophisticated Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_70%)] rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.6),transparent_70%)] rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
      </div>

      <div className="mx-auto w-full max-w-screen-md px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6 tracking-tight leading-[1.1]">
          Pronto para elevar o nível <br className="hidden sm:block" /> da sua gestão?
        </h2>
        <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          Agende uma consultoria gratuita e descubra como podemos otimizar seus resultados e proteger seu patrimônio com inteligência aplicada.
        </p>
        
        <a 
          href="#whatsapp" 
          className="inline-flex items-center gap-3 rounded-full bg-accent hover:bg-accent-hover text-primary px-10 py-5 text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
        >
          <MessageCircle size={24} className="group-hover:animate-pulse" />
          Falar com Especialista
        </a>
      </div>
    </section>
  );
}
