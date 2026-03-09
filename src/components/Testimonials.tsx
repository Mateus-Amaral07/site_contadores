export default function Testimonials() {
  const testimonials = [
    {
      quote: "A Capital Partners não apenas organiza nossos números, eles nos dão a clareza necessária para tomar decisões de investimento milionárias. É uma parceria indispensável.",
      author: "Roberto Almeida",
      role: "CEO, TechGrowth",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
      quote: "Desde que migramos nossa contabilidade, reduzimos nossa carga tributária em 18% de forma totalmente legal. O nível de expertise do time é impressionante.",
      author: "Carla Mendes",
      role: "Diretora Financeira, VarejoPrime",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section id="clientes" className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 tracking-tight">
          Não acredite apenas na nossa palavra.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between">
              <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-10 relative">
                <span className="text-gray-300 text-4xl absolute -top-4 -left-2">"</span>
                {t.quote}
                <span className="text-gray-300 text-4xl absolute -bottom-4 ml-1">"</span>
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-semibold text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
