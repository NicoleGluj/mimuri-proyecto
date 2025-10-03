import { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const Productos = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Combo Helena",
      price: "$2500",
      images: ["/path/to/image1.jpg", "/path/to/image1-2.jpg"],
      description: `Un set versátil, pensado para acompañar la infancia con estilo.

Incluye 1 mesa y 2 sillas de madera Kiri en base de MDF…
¡Y cada una se puede usar como silla o como mesa!

Silla Helena: 28 x 30 x 26 cm
Mesa Helena: 33 x 37 x 43 cm

Diseño funcional, líneas simples y livianas. Ideal para jugar, dibujar y descubrir el mundo a su medida.`
    },
    {
      id: 2,
      name: "Combo Milena",
      price: "$4500",
      images: ["/path/to/image2.jpg"],
      description: `Espacioso, funcional y lleno de encanto.

Incluye 1 mesa y 2 sillas de madera Kiri en base de MDF, con un diseño pensado para que tu peque juegue, dibuje y explore con total comodidad.

Silla: 43 x 35 x 34 cm
Mesa: 43 x 81 x 50 cm

Ideal para quienes buscan un rincón amplio, lindo y duradero.`
    },
    {
      id: 3,
      name: "Combo Sara",
      price: "$6800",
      images: ["/path/to/image3.jpg"],
      description: `Líneas simples, nobleza en los materiales y una estética que acompaña cada etapa.

Más amplio, más cómodo, más funcional… sin dejar de ser Mimuri.

Silla Sara: 35 x 45 x 33 cm, Madera Kiri con base en MDF 19 mm
Mesa Sara: 43 x 53 x 45 cm, Madera Kiri con base en MDF 19 mm

Diseño atemporal, resistente y lleno de identidad.`
    },
    {
      id: 4,
      name: "Pack de Jugueteros",
      price: "$3200",
      images: ["/path/to/image4.jpg"],
      description: `Crear un espacio ordenado no tiene por qué ser aburrido.

Nuestros Pack de Jugueteros combinan diseño simple, materiales nobles y funcionalidad real para acompañar la rutina diaria con estilo.

Hechos para guardar juguetes, libros, mantas o pequeños tesoros.
Livianos, resistentes y tan lindos que también decoran.

Medidas: 30 x 35,5 x 32 cm
Material: MDF de 12 mm
Terminaciones suaves y combinables con el universo Mimuri

Usalos solos o en conjunto.
Ideales para cuartos infantiles, playrooms o cualquier rincón que merezca orden con calidez.`
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex(
      currentImageIndex === selectedProduct.images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const prevImage = () => {
    if (!selectedProduct) return;
    setCurrentImageIndex(
      currentImageIndex === 0 ? selectedProduct.images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <>
      <Header />

      <section className="w-full py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#d97345] text-center mb-12">
            Nuestros Productos
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(product);
                    setCurrentImageIndex(0);
                  }}
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-4">{product.price}</p>
                  <button
                    className="mt-auto bg-[#d97345] text-white py-2 rounded-full hover:bg-[#eb9665] transition"
                    onClick={() => {
                      setSelectedProduct(product);
                      setCurrentImageIndex(0);
                    }}
                  >
                    Ver Producto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal con imagen a un costado */}
      {selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center z-50 p-2 pointer-events-none">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl h-[80vh] flex flex-col md:flex-row pointer-events-auto relative">

            {/* Botón de cerrar */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            {/* Imagen con flechas */}
            <div className="relative md:w-1/2 h-64 md:h-auto">
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                className="w-full h-full object-cover rounded-l-2xl md:rounded-l-2xl md:rounded-r-none"
              />
              {selectedProduct.images.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 z-10"
                    onClick={prevImage}
                  >
                    &#10094;
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 z-10"
                    onClick={nextImage}
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>

            {/* Información del producto centrada */}
            <div className="md:w-1/2 md:pl-6 p-4 flex flex-col justify-center">
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-3xl font-bold text-center">{selectedProduct.name}</h2>
                <p className="text-gray-700 mt-4 text-center whitespace-pre-line">{selectedProduct.description}</p>
                <p className="text-gray-800 font-semibold mt-4 text-center">{selectedProduct.price}</p>
              </div>
              <button className="mt-6 bg-[#d97345] text-white py-3 px-6 rounded-full hover:bg-[#eb9665] transition self-center text-lg">
                Consultar
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Productos;
