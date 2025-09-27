import TopBar from "./TopBar";

const Header = () => {
  return (
    <header>
      <TopBar />

      <div className="relative flex items-center px-2 py-2 bg-white">
        {/* Logo a la izquierda */}
        <div className="flex-shrink-0">
          <img
            src="../src/assets/images/logo-png.png"
            alt="logo mimuri"
            className="w-40"
          />
        </div>

        {/* Navegación centrada */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex justify-center space-x-6 text-gray-500 font-medium text-sm uppercase">
            <li><a href="#inicio" className="hover:text-[#eb9665]">Inicio</a></li>
            <li><a href="#productos" className="hover:text-[#eb9665]">Productos</a></li>
            <li><a href="#acerca" className="hover:text-[#eb9665]">Acerca de nosotros</a></li>
            <li><a href="#contacto" className="hover:text-[#eb9665]">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
