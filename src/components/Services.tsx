import { ArrowRight, BarChart3, Calculator, Building2, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Gestão Tributária",
      desc: "Planejamento inteligente para reduzir sua carga tributária com total segurança jurídica.",
      icon: <Calculator className="w-6 h-6 text-gray-900" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "BPO Financeiro",
      desc: "Terceirização completa do seu financeiro. Faturamento, contas a pagar e receber no piloto automático.",
      icon: <BarChart3 className="w-6 h-6 text-gray-900" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Abertura de Empresas",
      desc: "Processo ágil e sem burocracia para você começar seu negócio com a estrutura societária ideal.",
      icon: <Building2 className="w-6 h-6 text-gray-900" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Auditoria e Compliance",
      desc: "Garantimos que sua empresa esteja 100% em conformidade com a legislação vigente.",
      icon: <ShieldCheck className="w-6 h-6 text-gray-900" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="solucoes" className="bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Nossas Soluções</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Muito além do básico.
          </h3>
          <p className="text-lg text-gray-600">
            Substitua a contabilidade tradicional por uma parceria estratégica. Entregamos dados, análises e segurança para você escalar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a key={index} href="#contato" className="group block rounded-2xl bg-gray-50 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="p-8">
                <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-accent-hover transition-colors">
                  Saiba mais 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="h-48 w-full relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
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
