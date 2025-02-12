import React, { useState } from "react";

const RegisterPopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative transform scale-100 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ❌
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Regístrate
        </h2>

        {/* Campo de Nombre */}
        <div className="mb-3">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Nombre:
          </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 outline-none transition"
          />
        </div>

        {/* Campo de Email */}
        <div className="mb-3">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Correo Electrónico:
          </label>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 outline-none transition"
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="mb-3 relative">
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Contraseña:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Crea una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-red-500 outline-none transition pr-10"
          />
          {/* Botón para ver contraseña */}
          <button
            onClick={togglePasswordVisibility}
            className="absolute top-9 right-3 text-gray-600 hover:text-gray-900"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Botón de registro */}
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default RegisterPopup;
