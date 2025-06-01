import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.includes("motorista")) {
      navigate("/painelmotorista");
    } else if (email.includes("mototaxi")) {
      navigate("/painelmototaxi");
    } else {
      navigate("/painelpassageiro");
    }
  };

  return (
    <>
      <Header />
      <div style={{ padding: 30 }}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 20 }}
        />

        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#00796B",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: 4,
          }}
        >
          Entrar
        </button>
      </div>
    </>
  );
}
