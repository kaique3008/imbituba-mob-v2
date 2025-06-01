// src/components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#00796B", color: "#fff", padding: "10px 20px", display: "flex", justifyContent: "space-between" }}>
      <h2>Imbituba Mobilidade</h2>
      <button style={{ backgroundColor: "#d32f2f", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 4 }}>
        Sair
      </button>
    </header>
  );
}
