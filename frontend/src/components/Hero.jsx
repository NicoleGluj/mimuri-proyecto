import { useState, useEffect } from "react";

// Importamos las imágenes directamente
import biblioteca from "../assets/images/carrousel/biblioteca.png";
import combo from "../assets/images/carrousel/combo.png";
import espacio from "../assets/images/carrousel/espacio.png";

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
    <section className="relative w-[98%] h-[80vh] mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Imagen de fondo con opacidad */}
      <img
        src={heroImages[currentIndex]}
        alt="Hero"
        className="w-full h-full object-cover opacity-80 transition-all duration-700 rounded-xl"
      />

      {/* Overlay para centrar texto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Bienvenidos a Mimuri
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
          Descubrí nuestros productos únicos
        </p>
        <a
          href="#productos"
          className="bg-[#eb9665] bg-opacity-90 px-6 py-3 rounded-full font-semibold hover:bg-[#d87c4a] transition"
        >
          Ver Productos
        </a>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
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
