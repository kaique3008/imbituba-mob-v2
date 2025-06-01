import React, { useEffect, useState } from 'react';

export default function HistoricoCorridas() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem('historicoCorridas');
    if (dados) {
      setHistorico(JSON.parse(dados));
    }
  }, []);

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Histórico de Corridas</h2>
      {historico.length === 0 ? (
        <p>Nenhuma corrida registrada ainda.</p>
      ) : (
        historico.map((corrida, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '15px' }}>
            <p><strong>Data:</strong> {corrida.data}</p>
            <p><strong>Motorista:</strong> {corrida.motorista}</p>
            <p><strong>Origem:</strong> {corrida.origem}</p>
            <p><strong>Destino:</strong> {corrida.destino}</p>
            <p><strong>Status:</strong> {corrida.status}</p>
          </div>
        ))
      )}
    </div>
  );
}