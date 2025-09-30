import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Contacto = () => {
  return (
    <>
      <Header />

      {/* HERO CONTACTO */}
      <section className="bg-[#fceee6] py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d97345] mb-4">
          Contactanos
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          ¿Tenés dudas, consultas o necesitas asesoramiento?
          Completá el formulario o escribinos directamente, ¡te vamos a responder lo antes posible!
        </p>
      </section>

      {/* INFORMACIÓN DE CONTACTO */}
      <section className="w-[98%] mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105">
          <PhoneIcon className="size-14 text-[#eb9665] mb-4 transition-colors duration-300 hover:text-[#d97345]" />
          <h3 className="font-semibold text-lg uppercase mb-2">Teléfono</h3>
          <p className="text-gray-600">+54 9 11 7238 1990</p>
        </div>

        <div className="flex flex-col items-center p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105">
          <EnvelopeIcon className="size-14 text-[#eb9665] mb-4 transition-colors duration-300 hover:text-[#d97345]" />
          <h3 className="font-semibold text-lg uppercase mb-2">Email</h3>
          <p className="text-gray-600">mimuriok@gmail.com</p>
        </div>

        <div className="flex flex-col items-center p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105">
          <MapPinIcon className="size-14 text-[#eb9665] mb-4 transition-colors duration-300 hover:text-[#d97345]" />
          <h3 className="font-semibold text-lg uppercase mb-2">Ubicación</h3>
          <p className="text-gray-600">CABA, Buenos Aires, Argentina</p>
        </div>
      </section>

      {/* FORMULARIO DE CONTACTO */}
      <section className="w-[98%] mx-auto py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#d97345] mb-6 text-center">
            Escribinos un mensaje
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                required
                placeholder="Tu nombre"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eb9665] transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="tunombre@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eb9665] transition"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows="4"
                required
                placeholder="Escribí tu consulta..."
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#eb9665] transition"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#eb9665] text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:bg-[#d97345] hover:scale-105"
              >
                Enviar mensaje.
              </button>
            </div>
          </form>
        </div>
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

export default Contacto;
