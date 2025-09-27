import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Productos from "../views/Productos";
import Nosotros from "../views/Nosotros";
import Contacto from "../views/Contacto";
import NotFound from "../views/NotFound";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;