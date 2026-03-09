export default function LogoWall() {
  const logos = [
    { name: "Empresa 1", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Empresa 2", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Empresa 3", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Empresa 4", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Empresa 5", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-100 overflow-hidden">
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <p className="text-center text-sm font-medium text-gray-500 mb-8">
          Mais de 500 empresas de alto crescimento confiam na nossa gestão
        </p>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center min-w-[120px] opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-8 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
