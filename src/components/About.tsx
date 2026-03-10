import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "R$ 2B+", label: "Auditados anualmente" },
    { value: "15+", label: "Anos de mercado" },
    { value: "99%", label: "Taxa de retenção" },
  ];

  const benefits = [
    "Inteligência tributária avançada",
    "Tecnologia e automação de processos",
    "Atendimento consultivo e proativo",
    "Foco exclusivo no seu crescimento"
  ];

  return (
    <section id="sobre" className="bg-primary py-28 lg:py-40 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_70%)] blur-[120px] rounded-full"></div>
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1 perspective-1000">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-x-1 hover:rotate-x-0 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1632&auto=format&fit=crop" 
                alt="Reunião estratégica e análise de dados" 
                className="w-full h-full object-cover opacity-90 scale-105 hover:scale-100 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10"></div>
            </div>

            {/* Premium Stats Overlay */}
            <div className="absolute -bottom-10 -right-4 sm:-right-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 sm:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] max-w-xs z-20 animate-float">
              <div className="space-y-8 relative">
                <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50 pointer-events-none"></div>
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col relative z-10">
                    <span className="text-4xl font-display font-bold text-white tracking-tight mb-1">{stat.value}</span>
                    <span className="text-sm text-hushed font-medium tracking-wide uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 lg:pl-12">
            <h2 className="text-xs font-sans font-bold text-accent uppercase tracking-[0.2em] mb-4">Nossa Essência</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight mb-8 leading-[1.1]">
              Não somos apenas contadores.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Somos parceiros estratégicos.</span>
            </h3>
            
            <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed mb-12">
              <p>
                A Capital Partners nasceu da necessidade de entregar mais do que guias de impostos e burocracia. Nós combinamos tecnologia de ponta com inteligência tributária e financeira para empresas que não têm tempo a perder.
              </p>
              <p>
                Nosso time de especialistas trabalha lado a lado com CEOs e diretores para garantir conformidade absoluta, eficiência operacional e crescimento previsível. Assumimos a complexidade dos seus números para que você foque exclusivamente em expandir o seu negócio.
              </p>
            </div>

            <ul className="space-y-5 mb-12">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 text-gray-300 font-medium text-lg">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <a 
              href="#servicos" 
              className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 text-sm font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Conheça nossa metodologia
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
