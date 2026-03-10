export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Very faint background pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-20">
          <div className="md:col-span-1 border-r border-transparent md:border-white/5 pr-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary font-display font-bold text-xl shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                C
              </div>
              <span className="text-xl font-display font-semibold tracking-tight text-white flex gap-1">
                Capital<span className="font-light opacity-60">Partners</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Contabilidade consultiva e estratégica para empresas que buscam crescimento com segurança e alta performance no mercado atual.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-display font-medium text-lg mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li><a href="#" className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Gestão Tributária</a></li>
              <li><a href="#" className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">BPO Financeiro</a></li>
              <li><a href="#" className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Abertura de Empresas</a></li>
              <li><a href="#" className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Auditoria e Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-medium text-lg mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Sobre Nós</a></li>
              <li><a href="#" className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Clientes</a></li>
              <li><a href="#" className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Carreiras</a></li>
              <li><a href="#" className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-medium text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">contato@capitalpartners.com.br</li>
              <li className="hover:text-white transition-colors cursor-pointer">+55 (11) 99999-9999</li>
              <li className="hover:text-white transition-colors cursor-pointer">Av. Faria Lima, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} Capital Partners. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-wider">Termos de Uso</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-wider">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
