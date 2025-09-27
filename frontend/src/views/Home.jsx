import Header from "../components/header/Header";
import Hero from "../components/Hero";
import { TruckIcon, UserIcon, ShieldCheckIcon, GiftIcon } from "@heroicons/react/24/outline";

// reemplazá estas imágenes por las que vos quieras
import setsImage from "../assets/images/carrousel/biblioteca.png";
import bibliotecasImage from "../assets/images/carrousel/combo.png";
import todosImage from "../assets/images/carrousel/espacio.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />

      {/* SECCION BENEFICIOS */}
      <section className="w-[98%] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <TruckIcon className="h-12 w-12 text-[#eb9665] mb-4" />
            <h3 className="font-semibold text-lg">Envío gratis a CABA</h3>
            <p className="text-gray-600 text-sm">Rápido y sin costo adicional</p>
          </div>

          <div className="flex flex-col items-center">
            <UserIcon className="h-12 w-12 text-[#eb9665] mb-4" />
            <h3 className="font-semibold text-lg">Atención personalizada</h3>
            <p className="text-gray-600 text-sm">Estamos para ayudarte siempre</p>
          </div>

          <div className="flex flex-col items-center">
            <ShieldCheckIcon className="h-12 w-12 text-[#eb9665] mb-4" />
            <h3 className="font-semibold text-lg">Compra segura</h3>
            <p className="text-gray-600 text-sm">Pagos protegidos y confiables</p>
          </div>

          <div className="flex flex-col items-center">
            <GiftIcon className="h-12 w-12 text-[#eb9665] mb-4" />
            <h3 className="font-semibold text-lg">Regalos y promos</h3>
            <p className="text-gray-600 text-sm">Beneficios exclusivos para vos</p>
          </div>
        </div>
      </section>

      {/* SECCION BANNERS */}
      <section className="w-[98%] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Banner Sets */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={setsImage} alt="Sets" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
              <h3 className="text-2xl font-bold mb-2">Sets</h3>
              <a
                href="/sets"
                className="bg-[#eb9665] px-4 py-2 rounded-full font-semibold hover:bg-[#d87c4a] transition"
              >
                Ver Sets
              </a>
            </div>
          </div>

          {/* Banner Bibliotecas */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={bibliotecasImage} alt="Bibliotecas" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
              <h3 className="text-2xl font-bold mb-2">Bibliotecas</h3>
              <a
                href="/bibliotecas"
                className="bg-[#eb9665] px-4 py-2 rounded-full font-semibold hover:bg-[#d87c4a] transition"
              >
                Ver Bibliotecas
              </a>
            </div>
          </div>

          {/* Banner Todos los productos */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={todosImage} alt="Todos los productos" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
              <h3 className="text-2xl font-bold mb-2">Todos los productos</h3>
              <a
                href="/productos"
                className="bg-[#eb9665] px-4 py-2 rounded-full font-semibold hover:bg-[#d87c4a] transition"
              >
                Ver Productos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
