import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Gradiente suave que segue o mouse apenas em dispositivos com cursor preciso (desktop)
if (window.matchMedia("(pointer: fine)").matches) {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor-gradient");
  document.body.appendChild(cursor);

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }, { passive: true });
}
