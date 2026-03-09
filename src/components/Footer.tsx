export default function Footer() {
  return (
    <footer className="bg-[#010518] pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-[#010518] font-bold text-xl">
                C
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Capital<span className="font-light opacity-70">Partners</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Contabilidade consultiva e estratégica para empresas que buscam crescimento com segurança e alta performance.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Gestão Tributária</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">BPO Financeiro</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Abertura de Empresas</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Auditoria e Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Clientes</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>contato@capitalpartners.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>Av. Faria Lima, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Capital Partners. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
