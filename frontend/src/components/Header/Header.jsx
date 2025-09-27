import { useState } from "react";
import TopBar from "./TopBar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <TopBar />

      <div className="relative flex items-center px-2 py-2 bg-white">
        {/* Logo a la izquierda */}
        <div className="flex-shrink-0">
          <img
            src="../src/assets/logo/logo-mimuri.png"
            alt="logo mimuri"
            className="w-40"
          />
        </div>

        {/* Navegación para pantallas grandes */}
        <nav className="hidden md:absolute md:flex md:left-1/2 md:transform md:-translate-x-1/2">
          <ul className="flex justify-center space-x-6 text-gray-500 font-medium text-sm uppercase">
            <li>
              <a href="#inicio" className="hover:text-[#eb9665]">
                Inicio
              </a>
            </li>
            <li>
              <a href="#productos" className="hover:text-[#eb9665]">
                Productos
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-[#eb9665]">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[#eb9665]">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón hamburguesa para móvil */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-[#eb9665] focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menú desplegable móvil con animación suave y fondo incluido */}
        <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden z-50 transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}>
          <ul className={`origin-top transform transition-all duration-300 ease-in-out bg-white shadow-md ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}>
            <li>
              <a href="#inicio" className="block py-4 text-center text-gray-500 font-medium text-sm uppercase hover:text-[#eb9665]" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#productos" className="block py-4 text-center text-gray-500 font-medium text-sm uppercase hover:text-[#eb9665]" onClick={toggleMenu}>
                Productos
              </a>
            </li>
            <li>
              <a href="#nosotros" className="block py-4 text-center text-gray-500 font-medium text-sm uppercase hover:text-[#eb9665]" onClick={toggleMenu}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="block py-4 pb-7 text-center text-gray-500 font-medium text-sm uppercase hover:text-[#eb9665]" onClick={toggleMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
