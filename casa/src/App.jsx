import { Routes, Route } from "react-router-dom";
import CentralUsuario from "./components/usuario/Centralusuario";

export default function App() {
  return (
    <Routes>
      <Route path="/usuario/*" element={<CentralUsuario />} />
    </Routes>
  );
}
