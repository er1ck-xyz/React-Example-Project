import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";

export default function App() {
  return (
    <BrowserRouter>
      {/* Menu de navegação */}
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
    </BrowserRouter>
  );
}
