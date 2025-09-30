import Header from "../components/header/Header";
import Footer from "../components/Footer";
import tallerImage from "../assets/images/carrousel/biblioteca.png";
import productosImage from "../assets/images/carrousel/combo.png";
import familiaImage from "../assets/images/carrousel/espacio.png";

const Nosotros = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-[#fceee6] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d97345] mb-4">
          Sobre Nosotros
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Muebles de diseño para la infancia
        </p>
      </section>

      {/* HISTORIA */}
      <section className="w-[98%] mx-auto py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#d97345] mb-4">
              Nuestra historia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En Mimuri diseñamos más que muebles: creamos espacios que acompañan la infancia con amor, seguridad y estilo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo comenzó cuando nos convertimos en padres primerizos. Con la llegada de nuestra hija <span className="font-semibold">Milena</span>, descubrimos la importancia de un entorno que fomente la creatividad, el juego y el crecimiento.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Desde esa experiencia, decidimos ayudar a la infancia de otros niños, creando muebles únicos que reflejan nuestra visión como familia para otras familias.
            </p>
          </div>
          <div>
            <img
              src={familiaImage}
              alt="Familia fundadora"
              className="rounded-2xl shadow-lg object-cover w-full h-80 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ARTESANAL */}
      <section className="bg-[#fceee6] py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={tallerImage}
              alt="Taller artesanal"
              className="rounded-2xl shadow-lg object-cover w-full h-80 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#d97345] mb-4">
              Hecho a mano, pensado con amor
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cada pieza está hecha de forma artesanal, con materias nobles y líneas suaves que invitan a jugar, explorar y crecer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nuestros muebles no son solo objetos, son parte de la infancia: resistentes, seguros y diseñados para acompañar los momentos más importantes de los más chicos.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="w-[98%] mx-auto py-16 max-w-5xl">
        <h2 className="text-2xl font-bold text-[#d97345] mb-6 text-center">
          Nuestros productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diseñamos muebles de diseño para la infancia, pensados en cada detalle para brindar comodidad y estilo a los espacios de juego y descanso.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cada producto refleja nuestra filosofía: funcionalidad, estética y cariño en cada terminación.
            </p>
          </div>
          <div>
            <img
              src={productosImage}
              alt="Muebles de Mimuri"
              className="rounded-2xl shadow-lg object-cover w-full h-80 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* FRASE DESTACADA */}
      <section className="bg-[#eb9665] py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          “Desde nuestra experiencia como familia, para otras familias”
        </h2>
        <p className="text-white text-lg">
          Hecho a mano, pensado con amor
        </p>
      </section>

      {/* INSTAGRAM */}
      <section className="w-[98%] mx-auto py-12 flex justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Seguinos en nuestro Instagram @mimuriok
        </h2>
      </section>

      <Footer />
    </>
  );
};

export default Nosotros;
