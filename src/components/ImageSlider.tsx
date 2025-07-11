import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ImageSlider = () => {
  const images = [
    "/lovable-uploads/1.png",
    "/lovable-uploads/2.png",
    "/lovable-uploads/3.png",
    "/lovable-uploads/4.png",
    "/lovable-uploads/A.png",
    "/lovable-uploads/B.png",
    "/lovable-uploads/C.png",
    "/lovable-uploads/D.png"
  ];

  const [emblaApi, setEmblaApi] = useState<any>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="w-full max-w-full h-56 sm:h-64 md:h-80 lg:h-96 pt-20 md:pt-24 overflow-hidden">
      <Carousel className="w-full h-full" setApi={setEmblaApi}>
        <CarouselContent className="flex h-full w-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full h-full flex-shrink-0">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={image}
                  alt={`Confeitaria artesanal ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center center' }}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ImageSlider;