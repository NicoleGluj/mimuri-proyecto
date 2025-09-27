import { useState } from "react";
import { Link } from "react-router-dom";
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
              <Link to="/" className="hover:text-[#eb9665]">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="hover:text-[#eb9665]">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-[#eb9665]">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-[#eb9665]">
                Contacto
              </Link>
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

        {/* Menú desplegable móvil */}
        <div
          className={`md:hidden absolute top-full left-0 w-full overflow-hidden z-50 transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <ul
            className={`origin-top transform transition-all duration-300 ease-in-out bg-white shadow-md ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              }`}
          >
            <li>
              <Link
                to="/"
                className="block py-4 text-center text-gray-500 font-medium text-sm uppercase hover:text-[#eb9665]"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/productos"
                className="block py-4 text-center text-gray-500 font-medium text-sm uppercase hover:text-[#eb9665]"
                onClick={toggleMenu}
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/nosotros"
                className="block py-4 text-center text-gray-500 font-medium text-sm uppercase hover:text-[#eb9665]"
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="block py-4 pb-7 text-center text-gray-500 font-medium text-sm uppercase hover:text-[#eb9665]"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
