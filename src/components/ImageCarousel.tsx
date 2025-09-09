import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lab1 from '@/assets/lab/lab1.jpg';
import lab2 from '@/assets/lab/lab2.jpg';
import machine from '@/assets/lab/machine.jpg';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - in a real app, these would be actual research images
  const slides = [
    {
      id: 1,
      title: "Advanced Microscopy Lab",
      description: "State-of-the-art electron microscopy for bacteriophage visualization",
      image: lab1
    },
    {
      id: 2,
      title: "Bacterial Culture Research",
      description: "Studying bacterial resistance patterns in controlled environments",
      image: lab2
    },
    {
      id: 3,
      title: "Phage Therapy Development",
      description: "Developing targeted phage treatments for antibiotic-resistant infections",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 4,
      title: "Clinical Research Facility",
      description: "Translating laboratory discoveries into clinical applications",
      image: machine
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-xl shadow-card">
      {/* Slides */}
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative flex-shrink-0 w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {slide.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="sm"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;