import React from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from './img/logo.png';

const Header = () => {
  return (
    <header className="w-full">

      {/* Barra superior de arriba */}
      <div className="bg-teal-700 text-white text-sm">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-4">

          {/* Teléfono */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span className="font-semibold">912294034</span>
          </div>

          {/* Texto central */}
          <div className="hidden md:block font-semibold">
            ¡Realiza tu pedido aquí!
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
          </div>
        </div>
      </div>

      {/* Menú principal */}
      <nav className="bg-white shadow">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          </div>

          {/* Navegación */}
          <ul className="flex space-x-6 text-teal-800 font-medium text-sm">
            <li><a href="#" className="hover:text-orange-500">Inicio</a></li>
            <li><a href="#" className="hover:text-orange-500 font-semibold">Tienda</a></li>
            <li><a href="#" className="hover:text-orange-500">Recetas</a></li>
            <li><a href="#" className="hover:text-orange-500">Carrito</a></li>
            <li><a href="#" className="hover:text-orange-500">Finalizar compra</a></li>
          </ul>

          {/* Íconos */}
          <div className="flex items-center gap-5 text-teal-800 text-lg">
            <FaHeart />
            <FaUser />
            <div className="flex items-center gap-1 text-sm relative">
              <span>S/0,00</span>
              <div className="relative">
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
              </div>
            </div>
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;
