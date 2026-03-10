import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

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
    },
    {
      quote: "A visibilidade financeira que ganhamos foi transformadora. Recomendo fortemente para qualquer empresa buscando crescimento sólido e previsível.",
      author: "Juliana Costa",
      role: "Fundadora, InovaTech",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px tolerance
      
      // Calculate active index based on scroll position
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      if (cardWidth > 0) {
        const index = Math.round(scrollLeft / (cardWidth + 24)); // 24 is the gap (gap-6)
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth > 768 ? 400 : scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0;
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + 24),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="clientes" className="relative bg-white py-28 lg:py-40 overflow-hidden border-t border-gray-100">
      {/* Decorative Background mimicking the image's software/wave vibe but keeping brand colors subtle */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        
        {/* Header Section from Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-primary mb-6 tracking-tight leading-[1.1]">
              O Que <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Nossos Clientes</span> Dizem
            </h2>
            <p className="text-gray-500 text-xl font-light">
              Ouça Diretamente Nossos Parceiros Satisfeitos.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                canScrollLeft 
                  ? 'border-gray-200 text-primary hover:bg-gray-50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] hover:-translate-x-1' 
                  : 'border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                canScrollRight 
                  ? 'bg-primary text-white hover:bg-gray-800 shadow-[0_8px_25px_rgba(3,7,18,0.2)] hover:shadow-[0_12px_30px_rgba(3,7,18,0.3)] hover:translate-x-1' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 lg:gap-8 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="snap-start shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white rounded-[2rem] p-10 xl:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 flex flex-col h-auto relative group"
            >
              {/* Quote Icon & Stars */}
              <div className="flex justify-between items-start mb-8 -mt-2">
                <Quote className="text-gray-100 w-16 h-16 -ml-4 -mt-4 transition-colors duration-500 group-hover:text-accent/10" fill="currentColor" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-10 flex-grow relative z-10">
                "{t.quote}"
              </p>
              
              {/* User Profile */}
              <div className="flex items-center gap-5 mt-auto relative z-10 pt-6 border-t border-gray-100">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-display font-semibold text-primary text-base leading-tight mb-1">
                    {t.author}
                  </h4>
                  <p className="text-sm font-medium text-accent">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                i === activeIndex ? 'bg-primary w-8' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
      
      {/* Hide native scrollbar via style */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
