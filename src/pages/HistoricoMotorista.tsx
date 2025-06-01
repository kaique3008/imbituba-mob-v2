import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Corrida {
  data: string;
  passageiro: string;
  origem: string;
  destino: string;
  status: string;
}

export default function HistoricoMotorista() {
  const [historico, setHistorico] = useState<Corrida[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const corridasSalvas = localStorage.getItem("corridas_motorista");
    if (corridasSalvas) {
      const corridas: Corrida[] = JSON.parse(corridasSalvas);
      const ordenadas = corridas.sort(
        (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
      );
      setHistorico(ordenadas);
    }
  }, []);

  const corStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "finalizada":
        return "#28a745";
      case "cancelada":
        return "#dc3545";
      default:
        return "#ffc107";
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#222" }}>Histórico do Motorista</h1>

      {historico.length === 0 ? (
        <p>Nenhuma corrida encontrada.</p>
      ) : (
        historico.map((corrida, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "15px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <p><strong>🕒 Data:</strong> {new Date(corrida.data).toLocaleString()}</p>
            <p><strong>🧑‍🚍 Passageiro:</strong> {corrida.passageiro}</p>
            <p><strong>📍 Origem:</strong> {corrida.origem}</p>
            <p><strong>📌 Destino:</strong> {corrida.destino}</p>
            <p>
              <strong>✅ Status:</strong> <span style={{ color: corStatus(corrida.status), fontWeight: "bold" }}>{corrida.status}</span>
            </p>
          </div>
        ))
      )}

      <button
        onClick={() => navigate("/motorista")}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Voltar ao Painel
      </button>
    </div>
  );
}
