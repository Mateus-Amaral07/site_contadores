import { Star, MessageCircle, ShieldCheck } from 'lucide-react';
import SlidingToggleCTA from './ui/SlidingToggleCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="relative overflow-hidden bg-primary pt-32 lg:pt-48 pb-16 lg:pb-32 flex min-h-screen items-center">
      {/* Premium Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[600px] opacity-30 pointer-events-none animate-pulse-glow">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-blue-900/10 to-transparent blur-[100px] rounded-full"></div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 animate-hidden fade-up">
            <div className="mb-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-10 text-xs rounded-full border-[3px] border-primary bg-gray-800 overflow-hidden shadow-lg transition-all duration-300 hover:border-accent hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:z-10 cursor-pointer">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Client" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-yellow-500 gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-semibold tracking-wide text-hushed uppercase">500+ clientes confiam</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl text-balance lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.05] mb-6">
              Contabilidade de <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">alta performance.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Transformamos dados complexos em decisões claras. Focamos na sua contabilidade estratégica para que você foque exclusivamente no crescimento do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center w-full gap-6 justify-center lg:justify-start">
              <div className="transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] rounded-2xl w-full sm:w-auto flex justify-center lg:justify-start animate-hidden fade-bounce delay-300">
                <SlidingToggleCTA />
              </div>
              <a 
                href="#servicos" 
                className="flex items-center gap-2 w-full sm:w-auto justify-center rounded-full bg-white/5 hover:bg-white/10 text-white px-8 py-4 text-sm font-semibold transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] animate-hidden fade-bounce delay-400"
              >
                Conheça as soluções
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none animate-hidden fade-scale delay-200">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group">
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe de contabilidade em escritório moderno" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80 z-10"></div>
              
              {/* Premium Floating badge */}
              <div className="absolute bottom-8 left-8 right-8 sm:right-auto animate-hidden fade-up delay-500 z-20">
                <div className="bg-primary/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center gap-5 shadow-2xl animate-float transform transition-transform hover:scale-105">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-primary shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <ShieldCheck size={28} strokeWidth={2.5} />
                  </div>
                <div>
                  <div className="text-white font-display font-semibold text-base mb-0.5">Auditoria Concluída</div>
                    <div className="text-gray-400 text-sm font-medium">Sem ressalvas em 2023</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full opacity-[0.15] blur-3xl pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
