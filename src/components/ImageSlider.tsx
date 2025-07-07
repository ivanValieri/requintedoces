import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ImageSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=600&fit=crop&crop=center", // Elegant cake
    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1200&h=600&fit=crop&crop=center", // Pastries
    "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&h=600&fit=crop&crop=center", // Colorful macarons
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&h=600&fit=crop&crop=center", // Wedding cake
    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1200&h=600&fit=crop&crop=center", // Cupcakes
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&h=600&fit=crop&crop=center", // Chocolate desserts
  ];

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: false
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="-ml-0 h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 basis-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Confeitaria artesanal ${index + 1}`}
                  className="w-full h-full object-cover"
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