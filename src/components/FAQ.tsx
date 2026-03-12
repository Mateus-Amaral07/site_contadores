import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUp, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    question: "Como funciona a transição da minha contabilidade atual?",
    answer: "Cuidamos de 100% do processo de migração. Entramos em contato com seu contador anterior, solicitamos todo o histórico e documentação, e realizamos a transição sem que você precise se envolver com burocracia ou ter qualquer interrupção nas suas operações."
  },
  {
    question: "Vocês atendem empresas de qual porte e segmento?",
    answer: "Nossa expertise é voltada para empresas prestadoras de serviços nos regimes do Simples Nacional e Lucro Presumido, com foco especial em profissionais da saúde, tecnologia, agências e consultorias que buscam crescimento acelerado."
  },
  {
    question: "Vou ter acesso fácil aos meus relatórios e guias?",
    answer: "Sim. Disponibilizamos uma plataforma exclusiva e intuitiva onde todos os seus documentos, guias de impostos, certidões e relatórios financeiros ficam organizados e acessíveis 24/7 na palma da sua mão através do celular ou computador."
  },
  {
    question: "Como o BPO Financeiro ajuda na prática?",
    answer: "Terceirizando o financeiro conosco, você não precisa mais se preocupar em agendar contas, emitir boletos ou conferir extratos. Nós estruturamos seu fluxo de caixa, garantimos os pagamentos em dia e enviamos relatórios gerenciais claros para suas decisões."
  },
  {
    question: "O atendimento é automatizado ou humanizado?",
    answer: "Unimos o melhor dos dois mundos. Utilizamos tecnologia e automação para os processos repetitivos, mas seu atendimento será sempre humanizado com um contador parceiro dedicado disponível para reuniões estratégicas e tirar dúvidas pelo WhatsApp."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const revealRef = useScrollReveal();

  return (
    <section id="faq" ref={revealRef} className="bg-[#fafafa] py-28 lg:py-40 relative">
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          
          {/* Header Area */}
          <div className="flex flex-col pt-4 animate-hidden fade-up">
            <div className="flex items-center gap-2 mb-6 text-accent font-semibold tracking-wide uppercase text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              FAQs
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-medium text-[#111111] tracking-tight leading-[1.1] mb-12">
              Ainda tem<br />alguma dúvida?
            </h2>
          </div>

          {/* Accordion Area */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index}
                  className={`bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] animate-hidden fade-up delay-${(index % 4 + 1) * 100}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full text-left px-8 py-8 flex items-center justify-between gap-6 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span className="text-gray-400 font-light text-xl hidden sm:block">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg md:text-xl font-medium text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className={`transform transition-transform duration-300 text-gray-500`}>
                      {isOpen ? (
                        <ArrowUp size={20} strokeWidth={1.5} />
                      ) : (
                        <ArrowDown size={20} strokeWidth={1.5} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 pl-[4.5rem] md:pl-[6.5rem]">
                          <p className="text-gray-500 font-light leading-relaxed max-w-2xl text-[1rem]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
