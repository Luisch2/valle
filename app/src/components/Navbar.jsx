import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white/10 text-white py-4 px-8 flex items-center justify-between shadow-lg backdrop-blur-2xl border-b border-white/20">      {/* Logo a la izquierda */}
      <div className="text-3xl font-bold">Luchito</div>

      {/* Contenedor del menú central */}
      <div className="hidden md:flex flex-grow justify-center gap-6">
        {["Persona", "Empresa", "Nosotros", "Ayuda", "Blog"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white font-medium hover:text-purple-300 hover:underline hover:decoration-2 hover:underline-offset-8 transition duration-200 px-3"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Botones a la derecha */}
      <div className="hidden md:flex gap-4">
        {isAuthenticated ? (
          <>
            {/* Imagen de perfil */}
            <div className="flex items-center gap-2">
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-white"
              />
              <span className="text-sm">{user.name}</span>
            </div>

            {/* Botón de Cerrar sesión */}
            <button
              className="border border-white rounded px-4 py-1 hover:bg-white hover:text-purple-600 transition duration-200"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <button
              className="border border-white rounded px-4 py-1 hover:bg-white hover:text-purple-600 transition duration-200"
              onClick={() => loginWithRedirect()}
            >
              Iniciar sesión
            </button>
            <button
              className="bg-red-500 rounded px-4 py-1 hover:bg-red-600 transition duration-200"
              onClick={() => loginWithRedirect()}
            >
              Regístrate
            </button>
          </>
        )}
      </div>

      {/* Menú hamburguesa para móviles */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-lg flex flex-col items-center space-y-4 py-6 text-lg md:hidden">
          {["Persona", "Empresa", "Nosotros", "Ayuda", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white font-medium hover:text-purple-300 hover:underline hover:decoration-2 hover:underline-offset-8 transition duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {isAuthenticated ? (
            <>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border border-white"
                />
                <span className="text-white text-sm">{user.name}</span>
              </div>
              <button
                className="border border-white rounded px-6 py-2 hover:bg-white hover:text-purple-600 transition duration-200"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <button
                className="border border-white rounded px-6 py-2 hover:bg-white hover:text-purple-600 transition duration-200"
                onClick={() => loginWithRedirect()}
              >
                Iniciar sesión
              </button>
              <button
                className="bg-red-500 rounded px-6 py-2 hover:bg-red-600 transition duration-200"
                onClick={() => loginWithRedirect()}
              >
                Regístrate
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
