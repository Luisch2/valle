import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Lower from "./Lower";
import FlechaIntercambio from "../assets/FlechasIntercambio";
import LoginPopUp from "./PopUps/LoginPopUp";
import RegisterPopUp from "./PopUps/ResgiterPopUp";

const Principal = () => {
  const [isBuying, setIsBuying] = useState(true);
  const [exchangeRates, setExchangeRates] = useState({ compra: 0, venta: 0, fecha: "" });
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("0.00");
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(true);

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const API_URL = "/api";
  const API_KEY = import.meta.env.VITE_API_TOKEN_SUNAT;

  const fetchExchangeRates = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { Authorization: `Bearer ${API_KEY}` },
      });

      if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`);

      const data = await response.json();

      if (data?.precioCompra && data?.precioVenta && data?.fecha) {
        setExchangeRates({
          compra: parseFloat(data.precioCompra.toFixed(3)),
          venta: parseFloat(data.precioVenta.toFixed(3)),
          fecha: data.fecha,
        });
      }
    } catch (error) {
      console.error("Error al obtener los datos de tipo de cambio:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  useEffect(() => {
    if (!amount || isNaN(amount)) {
      setConvertedAmount("0.00");
      return;
    }

    const rate = isBuying ? exchangeRates.compra : exchangeRates.venta;
    const result =
      currency === "USD"
        ? isBuying
          ? amount * rate
          : amount / rate
        : isBuying
        ? amount / rate
        : amount * rate;

    setConvertedAmount(result.toFixed(2));
  }, [amount, isBuying, currency, exchangeRates]);

  const handleExchangeClick = () => {
    setIsBuying(!isBuying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 text-white flex flex-col">
      <Navbar setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} />

      {loginOpen && <LoginPopUp onClose={() => setLoginOpen(false)} />}
      {registerOpen && <RegisterPopUp onClose={() => setRegisterOpen(false)} />}

      <main className="flex flex-col items-center w-full text-center py-12 px-4 sm:px-6 lg:px-10 mt-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-6 sm:mt-10">
          Más que una plataforma digital
        </h2>
        <p className="text-lg sm:text-xl font-light mt-2 sm:mt-4">
          La mejor experiencia en tipo de cambio
        </p>

        {loading && <p className="text-white mt-5">Cargando tasas de cambio...</p>}

        {!loading && (
          <div className="bg-white text-black rounded-lg shadow-lg p-6 sm:p-8 mt-6 sm:mt-10 max-w-2xl sm:max-w-4xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-6">
              <div className="flex flex-col w-full">
                <p className="text-purple-700 font-semibold text-lg mb-2 text-left">
                  ¿Cuánto tienes?
                </p>

                {/* Contenedor relativo para posicionar bien los elementos */}
                <div className="relative flex items-center bg-purple-100 rounded-md p-3 w-full">
                  {/* Input con padding a la derecha para evitar que el select lo tape */}
                  <input
                      type="number"
                      value={amount}
                      onChange={(e) => {
                        let value = e.target.value;

                        // Permitir vacío
                        if (value === "") {
                          setAmount("");
                          return;
                        }

                        // Convertir a número y prevenir negativos
                        let numericValue = parseFloat(value);
                        if (numericValue < 0) {
                          numericValue = 0;
                        }

                        setAmount(numericValue);
                      }}
                      min="0"  // Bloquea negativos con el UI del input
                      className="bg-transparent outline-none flex-1 text-lg pr-16 w-full appearance-none"
                      placeholder="0.00"
                  />

                  {/* Select posicionado de forma independiente sin afectar el input */}
                  <select
                    className="absolute right-3 bg-transparent outline-none text-lg"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option value="USD">USD</option>
                    <option value="PEN">PEN</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className={`bg-purple-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transform transition duration-200 flex items-center justify-center ${
                    isBuying ? "rotate-0" : "rotate-180"
                  } transition-transform duration-500`}
                  onClick={handleExchangeClick}
                >
                  <FlechaIntercambio />
                </button>
              </div>

              <div className="flex flex-col">
                <p className="text-purple-700 font-semibold text-lg mb-2 text-left">
                  {isBuying ? "Entonces recibes" : "Entonces transfieres"}
                </p>
                <div className="flex items-center gap-2 bg-purple-100 rounded-md p-3 w-full">
                  <input type="text" value={convertedAmount} readOnly className="bg-transparent outline-none flex-1 text-lg" disabled />
                  <select className="bg-transparent outline-none text-lg -translate-x-6" value={currency === "USD" ? "PEN" : "USD"} disabled>
                    <option value="PEN">PEN</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-between text-sm text-center items-center">
              <p className={`font-bold ${isBuying ? "text-purple-700" : "text-gray-500"}`}>Compra S/ {exchangeRates.compra}</p>
              <p className="text-gray-600 font-semibold mx-4">{exchangeRates.fecha ? `Fecha: ${exchangeRates.fecha}` : ""}</p>
              <p className={`font-bold ${isBuying ? "text-gray-500" : "text-purple-700"}`}>Venta S/ {exchangeRates.venta}</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
              <p className="text-sm text-gray-500 mb-2 sm:mb-0">Bancos Afiliados</p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600">
                Realizar cambio
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              Un servicio de <span className="font-bold text-black">Bancom</span> supervisado por la SBS
            </p>
          </div>
        )}
      </main>

      <Lower/>
    </div>
  );
};

export default Principal;
