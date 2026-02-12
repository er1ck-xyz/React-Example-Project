import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";
import Container from "./components/layouts/Container";
import NavBar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Container customClass="min_height" />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
