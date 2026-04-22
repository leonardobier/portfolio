import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Marketing from "./components/Marketing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Sobre />
      <Marketing />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
