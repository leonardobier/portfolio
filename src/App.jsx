import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Techs from "./components/Techs";
import Marketing from "./components/Marketing";
import Projects from "./components/Projects";
import Curriculo from "./components/Curriculo"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Sobre />
      <Techs />
      <Marketing />
      <Projects />
      <Curriculo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
