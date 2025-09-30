import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-full px-4 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold uppercase">Mimuri</h2>
          <p className="text-gray-400 text-sm">
            Muebles únicos para niños, hechos a mano y pensados con amor.
          </p>
        </div>

        {/* Navegación rápida */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Navegación</h3>
          <Link to="/" className="text-gray-400 hover:text-white transition">Inicio</Link>
          <Link to="/productos" className="text-gray-400 hover:text-white transition">Productos</Link>
          <Link to="/nosotros" className="text-gray-400 hover:text-white transition">Nosotros</Link>
          <Link to="/contacto" className="text-gray-400 hover:text-white transition">Contacto</Link>
        </div>

        {/* Contacto */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Contacto</h3>
          <p className="text-gray-400 text-sm">CABA, Argentina</p>
          <p className="text-gray-400 text-sm">+54 9 11 7238 1990</p>
          <p className="text-gray-400 text-sm">mimuriok@gmail.com</p>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Redes Sociales</h3>
          <div className="flex space-x-4">
            <Link
              to="https://www.instagram.com/mimuriok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#eb9665] transition"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mimuri. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
