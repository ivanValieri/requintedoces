import React from "react";

const partners = [
  {
    name: "MP Locações para festa",
    url: "https://www.instagram.com/mp_locacoes_personalizada/?hl=pt",
    handle: "@mp_locacoes_personalizada",
    logo: "/lovable-uploads/mplocacoes.png"
  },
  {
    name: "Mikal Soluções digitais",
    url: "https://www.instagram.com/mikal_designs/?hl=pt",
    handle: "@mikal_designs",
    logo: "/lovable-uploads/mikal.png"
  }
];

const PartnersSection = () => {
  return (
    <section className="w-full py-12 gradient-primary border-t border-purple-300">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8 font-playfair">Parceiros</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.url} className="flex items-center gap-4">
              <img src={partner.logo} alt={partner.name + ' logo'} className="h-10 w-10 object-contain rounded-full bg-white border border-purple-200" />
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-semibold text-purple-800">{partner.name}</span>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline text-xs md:text-sm mt-1"
                >
                  {partner.handle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 