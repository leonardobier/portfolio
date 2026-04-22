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

// 🔵 Criar o elemento da bola gradiente
const cursor = document.createElement("div");
cursor.classList.add("cursor-gradient");
document.body.appendChild(cursor);

// 🔄 Atualizar posição conforme o mouse se move
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
