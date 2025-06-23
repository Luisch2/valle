import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Datos from "./Datos";
import MisDirecciones from "./MisDirecciones";
import MisPedidos from "./MisPedidos";
import MisFavoritos from "./MisFavoritos";
import Giftcard from "./Giftcard";

export default function CentralUsuario() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen bg-[#f9f9f9]">
      {/* Sidebar siempre visible en desktop y tipo dropdown en móvil */}
      <Sidebar onClose={() => setSidebarOpen(false)} />

      {/* Contenido */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="mis-datos" element={<Datos />} />
          <Route path="direcciones" element={<MisDirecciones />} />
          <Route path="pedidos" element={<MisPedidos />} />
          <Route path="favoritos" element={<MisFavoritos />} />
          <Route path="giftcard" element={<Giftcard />} />
        </Routes>
      </div>
    </div>
  );
}
