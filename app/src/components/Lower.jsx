import React, { useState } from "react";

const Lower = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <footer className="bg-gray-50 text-gray-600 py-12 rounded-t-lg shadow-lg backdrop-blur-2xl border-t border-white/20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">

        {/* Contenedor principal con 4 columnas bien alineadas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-10 items-start">

          {/* Columna 1: Logo y Empresa */}
          <div className="self-start">
            <img src="/ruta-del-logo.png" alt="Rextie Logo" className="mb-4 w-24" />
            <p>Rextie S.A.C.<br />RUC 20601030013</p>
          </div>

          {/* Columna 2: Servicios */}
          <div className="self-start">
            <h5 className="font-bold text-lg border-t border-gray-300 pt-6 lg:border-none lg:pt-0">Servicios</h5>
            <ul className="space-y-3 mt-2">
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Rextie Business</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Rextie Factoring</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Confirming</a></li>
              <li className="hover:text-blue-500 cursor-pointer flex items-center">
                <a href="#">Visa</a> 
                <span className="ml-2 bg-orange-400 text-white text-xs px-2 py-1 rounded">Nuevo</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div className="self-start">
            <h5 className="font-bold text-lg border-t border-gray-300 pt-6 lg:border-none lg:pt-0">Recursos</h5>
            <ul className="space-y-3 mt-2">
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Blog</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Tipo de cambio</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">App para cambiar dólares</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Cambio de Dólar a Soles</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Precio del Dólar</a></li>
            </ul>
          </div>

          {/* Columna 4: Soporte */}
          <div className="self-start">
            <h5 className="font-bold text-lg border-t border-gray-300 pt-6 lg:border-none lg:pt-0">Soporte</h5>
            <ul className="space-y-3 mt-2">
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Preguntas frecuentes</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Cómo cambiar dólares con Rextie</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Términos y Condiciones</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Política de Cookies</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Política de Privacidad</a></li>
              <li className="hover:text-blue-500 cursor-pointer"><a href="#">Mapa del sitio</a></li>
            </ul>
          </div>

        </div>

        {/* Segunda fila: Contacto y Redes Sociales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-y-10 items-start">

          {/* Información de contacto */}
          <div className="self-start">
            <h5 className="font-bold text-lg">Contacto</h5>
            <p className="py-1">📧 <a href="mailto:info@rextie.com" className="hover:text-blue-500 cursor-pointer">info@rextie.com</a></p>
            <p className="py-1">📞 T. 01 700 3301</p>
            <p className="py-1">📱 C. 963 896 793</p>
            <p className="py-2">🕒 Lunes a Viernes: 8:00 am - 8:00 pm</p>
            <p className="py-2">🕒 Sábados: 9:00 am - 3:00 pm</p>
            <p className="py-2">📍 Av. José Gálvez Barrenechea 566, Of. 101, Urb. Corpac, San Isidro, Lima.</p>
          </div>

          {/* Redes sociales y libro de reclamaciones */}
          <div className="self-start flex flex-col items-center lg:items-end">
            <div className="flex space-x-10">
              <a href="#" className="hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-youtube"></i></a>
              <a href="#" className="hover:text-blue-500"><i className="fab fa-tiktok"></i></a>
            </div>
            <a href="#" className="mt-6 w-64 bg-gray-200 text-gray-700 py-3 px-6 text-center rounded hover:bg-gray-300">
              📖 Libro de Reclamaciones
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Lower;
