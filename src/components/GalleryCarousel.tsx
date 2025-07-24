import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const galleryItems = [
  { id: 1, image: "/lovable-uploads/1.png", title: "CUPCAKE" },
  { id: 2, image: "/lovable-uploads/2.png", title: "BOLOS" },
  { id: 3, image: "/lovable-uploads/3.png", title: "DOCES" },
  { id: 4, image: "/lovable-uploads/4.png", title: "TORTAS" },
  { id: 5, image: "/lovable-uploads/5.png", title: "SALGADOS" },
  { id: 6, image: "/lovable-uploads/6.png", title: "BRIGADEIROS" },
  { id: 7, image: "/lovable-uploads/7.png", title: "DOCES FINOS" },
  { id: 8, image: "/lovable-uploads/8.png", title: "BOLOS DECORADOS" },
  { id: 9, image: "/lovable-uploads/9.png", title: "DOCES ESPECIAIS" },
  { id: 10, image: "/lovable-uploads/10.png", title: "BOLOS FESTIVOS" },
  { id: 11, image: "/lovable-uploads/11.png", title: "DOCES GOURMET" },
  { id: 12, image: "/lovable-uploads/12.png", title: "BOLOS ARTESANAIS" },
];

const GalleryCarousel = () => {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="w-full py-8 bg-gradient-to-br from-purple-950 to-purple-900 mt-[70px]">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 3,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {galleryItems.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-1/3 sm:basis-1/2 md:basis-1/3">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity hover:opacity-0"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/20 hover:bg-white/30" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/20 hover:bg-white/30" />
        </Carousel>
      </div>
    </section>
  );
};

export default GalleryCarousel; 