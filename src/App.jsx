import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Techs from "./components/Techs";
import Marketing from "./components/Marketing";
import Projects from "./components/Projects";
import Curriculo from "./components/Curriculo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleSelectTech = (techName) => {
    setSelectedTech(techName);
    if (techName) {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Header />
      <Hero />
      <Sobre />
      <Techs selectedTech={selectedTech} onSelectTech={handleSelectTech} />
      <Marketing />
      <Projects selectedTech={selectedTech} onSelectTech={setSelectedTech} />
      <Curriculo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
