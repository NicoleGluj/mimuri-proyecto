import Header from "../components/header/Header.jsx";
import Hero from "../components/Hero";
import { TruckIcon, UserIcon, ShieldCheckIcon, GiftIcon } from "@heroicons/react/24/outline";

import setsImage from "../assets/images/carrousel/biblioteca.png";
import bibliotecasImage from "../assets/images/carrousel/combo.png";
import todosImage from "../assets/images/carrousel/espacio.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />

      {/* SECCION ICONOS */}
      <section className="container mx-auto px-4 py-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center items-stretch">
          <div className="flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 p-4">
            <TruckIcon className="size-14 text-[#eb9665] mb-4 transition-colors duration-300 hover:text-[#d97345]" />
            <h3 className="font-semibold text-lg uppercase mb-2">Envío gratis a CABA</h3>
            <p className="text-gray-600 text-sm">Rápido y sin costo adicional.</p>
          </div>

          <div className="flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 p-4">
            <UserIcon className="size-14 text-[#eb9665] mb-4 transition-colors duration-300 hover:text-[#d97345]" />
            <h3 className="font-semibold text-lg uppercase mb-2">Atención personalizada</h3>
            <p className="text-gray-600 text-sm">
              Contactanos a través de Whatsapp, Instagram o correo electrónico!
            </p>
          </div>

          <div className="flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 p-4">
            <ShieldCheckIcon className="size-14 text-[#eb9665] mb-4 transition-colors duration-300 hover:text-[#d97345]" />
            <h3 className="font-semibold text-lg uppercase mb-2">Resultados rápidos</h3>
            <p className="text-gray-600 text-sm">El tiempo de entrega es de 3 a 5 días hábiles.</p>
          </div>

          <div className="flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 p-4">
            <GiftIcon className="size-14 text-[#eb9665] mb-4 transition-colors duration-300 hover:text-[#d97345]" />
            <h3 className="font-semibold text-lg uppercase mb-2">Garantía por defectos o roturas</h3>
            <p className="text-gray-600 text-sm">
              Tenés 10 días desde que recibís tu pedido para revisarlo.
            </p>
          </div>
        </div>
      </section>

      {/* SECCION BANNERS */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Banner Sets */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img src={setsImage} alt="Sets" className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 w-full bg-white/60 bg-opacity-70 px-4 py-3 flex justify-center items-center">
              <h3 className="text-xl font-bold uppercase text-[#d97345]">Combos</h3>
            </div>
            <Link
              to="/productos"
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out bg-[#EEB749] bg-opacity-30 text-white text-lg font-semibold"
            >
              Ver Combos
            </Link>
          </div>

          {/* Banner Jugueteros */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img src={bibliotecasImage} alt="Bibliotecas" className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 w-full bg-white/60 bg-opacity-70 px-4 py-3 flex justify-center items-center">
              <h3 className="text-xl font-bold uppercase text-[#d97345]">Jugueteros</h3>
            </div>
            <Link
              to="/productos"
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out bg-[#A4CBC7] bg-opacity-30 text-white text-lg font-semibold"
            >
              Ver Jugueteros
            </Link>
          </div>

          {/* Banner Productos */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img src={todosImage} alt="Todos los productos" className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 w-full bg-white/60 bg-opacity-70 px-4 py-3 flex justify-center items-center">
              <h3 className="text-xl font-bold uppercase text-[#d97345]">Productos</h3>
            </div>
            <Link
              to="/productos"
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out bg-[#F0655E] bg-opacity-30 text-white text-lg font-semibold"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      {/* SECCION SEGUIR EN INSTAGRAM */}
      <section className="container mx-auto px-4 py-12 flex justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Seguinos en nuestro Instagram @mimuriok
        </h2>
      </section>

      <Footer />
    </>
  );
};

export default Home;
