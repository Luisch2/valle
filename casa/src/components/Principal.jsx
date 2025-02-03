import React, { useState, useEffect } from "react";

const Principal = () => {
  const [isBuying, setIsBuying] = useState(true);
  const [exchangeRates, setExchangeRates] = useState({
    compra: 3.72,
    venta: 3.76,
  });

  const handleExchangeClick = () => {
    setIsBuying(!isBuying);
  };

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch("https://api.apis.net.pe/v2/sunat/tipo-cambio", {
        method: "GET",
        headers: {
          Authorization: "Bearer apis-token-12888.0BPOJId7WAtlZ3vWlGRMvOeUuJvW1w0a",
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();

      if (data && data.compra && data.venta) {
        setExchangeRates({
          compra: data.compra.toFixed(3),
          venta: data.venta.toFixed(3),
        });
      }
    } catch (error) {
      console.error("Error al obtener los datos de tipo de cambio:", error);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 text-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-6 flex justify-between items-center px-10">
        <h1 className="text-3xl font-bold">Luchito</h1>
        <nav className="flex gap-6">
          <a href="#persona" className="text-white font-medium hover:text-purple-300 transition duration-200">
            Persona
          </a>
          <a href="#empresa" className="text-white font-medium hover:text-purple-300 transition duration-200">
            Empresa
          </a>
          <a href="#nosotros" className="text-white font-medium hover:text-purple-300 transition duration-200">
            Nosotros
          </a>
          <a href="#ayuda" className="text-white font-medium hover:text-purple-300 transition duration-200">
            Ayuda
          </a>
          <a href="#blog" className="text-white font-medium hover:text-purple-300 transition duration-200">
            Blog
          </a>
        </nav>
        <div className="flex gap-4">
          <button className="border border-white rounded px-4 py-1 hover:bg-white hover:text-purple-600">
            Iniciar sesión
          </button>
          <button className="bg-red-500 rounded px-4 py-1 hover:bg-red-600">Regístrate</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full text-center px-6">
        <h2 className="text-4xl font-extrabold mt-10">Más que una plataforma digital</h2>
        <p className="text-xl font-light mt-4">La mejor experiencia en tipo de cambio</p>

        {/* Exchange Box */}
        <div className="bg-white text-black rounded-lg shadow-lg p-8 mt-10 max-w-4xl w-full">
          <div className="grid grid-cols-3 items-center gap-6">
            {/* Input Section */}
            <div className="flex flex-col">
              <p className="text-purple-700 font-semibold text-lg mb-2 text-left">¿Cuánto tienes?</p>
              <div className="flex items-center gap-2 bg-purple-100 rounded-md p-3 w-full">
                <input type="text" defaultValue="200" className="bg-transparent outline-none flex-1 text-lg" />
                <select className="bg-transparent outline-none text-lg -translate-x-6">
                  <option>USD</option>
                  <option>PEN</option>
                </select>
              </div>
            </div>

            {/* Exchange Icon */}
            <div className="flex justify-center items-center mt-8">
              <button
                className={`bg-purple-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transform transition duration-200 flex items-center justify-center ${
                  isBuying ? "rotate-0" : "rotate-180"
                } transition-transform duration-500`}
                onClick={handleExchangeClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </button>
            </div>

            {/* Output Section */}
            <div className="flex flex-col">
              <p className="text-purple-700 font-semibold text-lg mb-2 text-left">
                {isBuying ? "Entonces recibes" : "Entonces transfieres"}
              </p>
              <div className="flex items-center gap-2 bg-purple-100 rounded-md p-3 w-full">
                <input type="text" defaultValue="372.00" className="bg-transparent outline-none flex-1 text-lg" />
                <select className="bg-transparent outline-none text-lg -translate-x-6">
                  <option>PEN</option>
                  <option>USD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Div para Compra/Venta */}
          <div className="mt-4 flex justify-between text-sm text-center">
            <p className={`font-bold ${isBuying ? "text-purple-700" : "text-gray-500"}`}>
              Compra S/ {exchangeRates.compra}
            </p>
            <p className={`font-bold ${isBuying ? "text-gray-500" : "text-purple-700"}`}>
              Venta S/ {exchangeRates.venta}
            </p>
          </div>

          {/* Footer Info */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">Bancos Afiliados</p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600">
              Realizar cambio
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Un servicio de <span className="font-bold text-black">Bancom</span> supervisado por la SBS
          </p>
        </div>
      </main>
    </div>
  );
};

export default Principal;
