import React from 'react';

export default function PainelMototaxi() {
  function aceitarCorrida() {
    alert('Corrida aceita!');
  }

  function verCorridas() {
    alert('Visualizando corridas disponíveis...');
  }

  function sair() {
    alert('Você saiu do painel.');
    window.location.href = '/';
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Painel do Mototáxi</h1>
      <p>
        Bem-vindo ao painel do mototaxista! Aqui você poderá gerenciar suas corridas,
        visualizar passageiros próximos e acompanhar seus ganhos.
      </p>

      <div style={{ marginTop: '20px' }}>
        <button onClick={aceitarCorrida} style={botaoEstilo}>Aceitar Corrida</button>
        <button onClick={verCorridas} style={botaoEstilo}>Ver Corridas</button>
        <button onClick={sair} style={{ ...botaoEstilo, backgroundColor: 'red' }}>Sair</button>
      </div>
    </div>
  );
}

const botaoEstilo: React.CSSProperties = {
  marginRight: '10px',
  padding: '10px 20px',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};
