import { useState, useEffect } from "react";

// Importamos las imágenes directamente
import biblioteca from "../assets/images/carrousel/biblioteca.png";
import combo from "../assets/images/carrousel/combo.png";
import espacio from "../assets/images/carrousel/espacio.png";
import { Link } from "react-router-dom";

const heroImages = [biblioteca, combo, espacio];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === heroImages.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? heroImages.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === heroImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section className="relative container mx-auto px-4 h-[85vh] max-w-full mt-3">
      <img
        src={heroImages[currentIndex]}
        alt="Hero"
        className="w-full h-full object-cover transition-all duration-700 rounded-xl"
      />

      {/* Overlay para centrar texto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 uppercase">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Bienvenidos a Mimuri
        </h1>
        <p className="text-base md:text-2xl mb-6 drop-shadow-md">
          Diseño que acompaña la infancia
        </p>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={goToPrev}
        className="absolute left-2 sm:left-6 md:left-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-6 md:right-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
      >
        &#10095;
      </button>


      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-[#eb9665]" : "bg-white bg-opacity-50"
              }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
