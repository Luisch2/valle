import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";
import { PiChatTeardropDotsBold } from "react-icons/pi";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 md:px-20 py-12 text-sm ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Columna 1 */}
        <div>
          <h3 className="font-semibold mb-3">Experiencia del cliente</h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">📄</span>
            <span className="font-bold">Contáctanos</span>
          </div>
          <p className="ml-6 text-gray-600">Hacenos tu consulta</p>

          <div className="flex items-center gap-2 mt-3">
            <FaWhatsapp className="text-green-500 text-lg" />
            <span className="font-bold">+51 999999999</span>
          </div>
          <p className="ml-6 text-gray-600">Mensaje de Whatsapp</p>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="font-semibold mb-3">Tienda online</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Cambios y devoluciones</li>
            <li>Medios de pago</li>
            <li>Información de envíos</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="font-semibold mb-3">Huerto del Valle</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Sobre Huerto del Valle</li>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
            <li>Política de Cookies</li>
            <li>Expansión</li>
            <li>Proveedores</li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div>
          <h3 className="font-semibold mb-3">Compra 100% segura</h3>
          <p className="text-gray-600 mb-2">
            Nuestro sitio tiene toda la seguridad para tu compra
          </p>
          <img
            src="https://letsencrypt.org/images/letsencrypt-logo-horizontal.svg"
            alt="Let's Encrypt"
            className="h-8 mb-4"
          />
          <button className="border px-4 py-2 text-sm font-medium">
            SI ERES KBRO AQUI RECLAMA
          </button>
        </div>

        {/* Columna 5 */}
        <div>
          <h3 className="font-semibold mb-3">Síguenos</h3>
          <div className="flex gap-4 text-xl">
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
            <FaSpotify />
          </div>
          <p className="mt-4">Comprando desde tu casa</p>
        </div>
      </div>

      {/* Botones flotantes */}
      <div className="fixed bottom-4 left-4 z-50">
        <PiChatTeardropDotsBold className="text-purple-500 text-5xl drop-shadow" />
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <IoIosArrowDropupCircle className="text-purple-400 text-5xl drop-shadow" />
      </div>
    </footer>
  );
}
