import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
<<<<<<< HEAD
=======
import useEmblaCarousel from "embla-carousel-react";
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
import Autoplay from "embla-carousel-autoplay";

const ImageSlider = () => {
  const images = [
<<<<<<< HEAD
    "/lovable-uploads/1.png",
    "/lovable-uploads/2.png",
    "/lovable-uploads/3.png",
    "/lovable-uploads/4.png"
  ];

=======
    "/lovable-uploads/a27f51d8-669f-4b01-ac2b-d98ace8fe2b2.png", // Bolos personalizados embalados
    "/lovable-uploads/c5b24d86-f7e0-4cf7-9c9a-57e166a29360.png", // Cupcake unicórnio com moldura dourada
    "/lovable-uploads/1bbb056a-38c9-48b5-89ce-9d4a0b768d70.png", // Doces gourmet em potes com laço azul
    "/lovable-uploads/a844a419-e872-46e3-8a13-110fca5fd776.png", // Bolo recheado com uvas
    "/lovable-uploads/94c8bca9-44f6-46fd-be60-1893e56ce44d.png", // Bolo de aniversário infantil com personagens
    "/lovable-uploads/e8e99d0a-8b66-423a-ab7c-eea1f49c7c10.png", // Bolo com decoração em chocolate e dourado
  ];

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: false
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
  return (
    <section className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
<<<<<<< HEAD
          Autoplay({ delay: 6000 })
=======
          Autoplay({
            delay: 5000,
          }),
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="-ml-0 h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 basis-full h-full">
<<<<<<< HEAD
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={image}
                  alt={`Confeitaria artesanal ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center center' }}
=======
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Confeitaria artesanal ${index + 1}`}
                  className="w-full h-full object-scale-down object-center"
                  style={{ objectPosition: 'center' }}
>>>>>>> 1c97cefcab474811bd77b1786096a1bc74c5e491
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