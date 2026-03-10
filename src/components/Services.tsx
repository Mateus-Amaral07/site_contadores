import { ArrowRight, BarChart3, Calculator, Building2, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Gestão Tributária",
      desc: "Planejamento inteligente para reduzir sua carga tributária com total segurança jurídica.",
      icon: <Calculator className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "BPO Financeiro",
      desc: "Terceirização completa do seu financeiro. Faturamento, contas a pagar e receber no piloto automático.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Abertura de Empresas",
      desc: "Processo ágil e sem burocracia para você começar seu negócio com a estrutura societária ideal.",
      icon: <Building2 className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Auditoria e Compliance",
      desc: "Garantimos que sua empresa esteja 100% em conformidade com a legislação vigente.",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="solucoes" className="bg-[#fafafa] py-28 lg:py-40 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs font-sans font-bold text-accent uppercase tracking-[0.2em] mb-4">Nossas Soluções</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-primary tracking-tight mb-8 leading-[1.1]">
            Muito além do básico.
          </h3>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
            Substitua a contabilidade tradicional por uma parceria estratégica. Entregamos dados, análises e segurança para você escalar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <a key={index} href="#contato" className="group flex flex-col justify-between rounded-[2rem] bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:border-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
              <div className="p-8 lg:p-10 flex-grow">
                <div className="h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/20">
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-semibold text-primary mb-4 leading-tight">{service.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  Saiba mais 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
              <div className="h-56 w-full relative overflow-hidden mt-auto">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
