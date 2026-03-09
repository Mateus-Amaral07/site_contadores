import { Star, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#010518] pt-32 lg:pt-48 pb-16 lg:pb-32">
      {/* Background glow effect */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="mb-8 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-[#010518] bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-medium text-gray-400 mt-0.5">Mais de 500 clientes confiam</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Contabilidade de <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">alta performance.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transformamos dados complexos em decisões claras. Focamos na sua contabilidade estratégica para que você foque exclusivamente no crescimento do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#whatsapp" 
                className="flex items-center gap-2 w-full sm:w-auto justify-center rounded-lg bg-accent hover:bg-accent-hover text-[#010518] px-8 py-4 text-base font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Fale com um Especialista
              </a>
              <a 
                href="#servicos" 
                className="flex items-center gap-2 w-full sm:w-auto justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white px-8 py-4 text-base font-medium transition-all duration-200 border border-white/10"
              >
                Conheça as soluções
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe de contabilidade em escritório moderno" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010518] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-4 shadow-xl">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Auditoria Concluída</div>
                  <div className="text-gray-300 text-xs">Sem ressalvas em 2023</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
