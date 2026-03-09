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
    <section id="sobre" className="bg-[#010518] py-24 lg:py-32 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent blur-[100px] rounded-full"></div>
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1632&auto=format&fit=crop" 
                alt="Reunião estratégica de diretoria" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010518] via-[#010518]/20 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-4 sm:right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-xs">
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                    <span className="text-sm text-gray-400 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Nossa Essência</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Não somos apenas contadores. Somos seus parceiros estratégicos.
            </h3>
            
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed mb-10">
              <p>
                A Capital Partners nasceu da necessidade de entregar mais do que guias de impostos e burocracia. Nós combinamos tecnologia de ponta com inteligência tributária e financeira para empresas que não têm tempo a perder.
              </p>
              <p>
                Nosso time de especialistas trabalha lado a lado com CEOs e diretores para garantir conformidade absoluta, eficiência operacional e crescimento previsível. Assumimos a complexidade dos seus números para que você foque exclusivamente em expandir o seu negócio.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <a 
              href="#servicos" 
              className="inline-flex items-center justify-center rounded-lg bg-white text-[#010518] px-8 py-4 text-base font-semibold transition-all duration-200 hover:bg-gray-200"
            >
              Conheça nossa metodologia
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
