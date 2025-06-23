import { Link } from "react-router-dom";

export default function Sidebar({ onClose = () => {} }) {
  const menuItems = [
    { label: "Mi Cuenta", path: "" },
    { label: "Mis datos", path: "mis-datos" },
    { label: "Mis direcciones", path: "direcciones" },
    { label: "Mis pedidos", path: "pedidos" },
    { label: "Mis favoritos", path: "favoritos" },
    { label: "Giftcard", path: "giftcard" },
  ];

  return (
    <aside className="h-full w-full md:w-[280px] p-6 bg-white">
      {/** Botón para cerrar sidebar en modo móvil */}
      <h2 className="text-lg font-bold mb-1">Hola,</h2>
      <p className="text-sm mb-4 text-gray-600 break-all">camposluis2722@gmail.com</p>

      <nav className="flex flex-col space-y-3">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            to={`/usuario/${item.path}`}
            onClick={onClose}
            className="text-sm text-gray-700 pl-2 border-l-4 border-transparent hover:border-black hover:font-semibold transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-10">
        <button className="text-sm font-bold text-gray-700">Cerrar Sesión</button>
      </div>
    </aside>
  );
}
