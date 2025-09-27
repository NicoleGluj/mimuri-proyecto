const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-[98%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Mimuri</h2>
          <p className="text-gray-400 text-sm">
            Muebles únicos para niños, hechos con amor y atención a cada detalle.
          </p>
        </div>

        {/* Navegación rápida */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Navegación</h3>
          <a href="/" className="text-gray-400 hover:text-white transition">Inicio</a>
          <a href="/sets" className="text-gray-400 hover:text-white transition">Sets</a>
          <a href="/bibliotecas" className="text-gray-400 hover:text-white transition">Bibliotecas</a>
          <a href="/productos" className="text-gray-400 hover:text-white transition">Todos los Productos</a>
        </div>

        {/* Contacto */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Contacto</h3>
          <p className="text-gray-400 text-sm">📍 CABA, Argentina</p>
          <p className="text-gray-400 text-sm">📞 +54 11 1234 5678</p>
          <p className="text-gray-400 text-sm">✉️ contacto@mimuri.com</p>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Redes Sociales</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#eb9665] transition">
              Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#eb9665] transition">
              Instagram
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#eb9665] transition">
              TikTok
            </a>
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
