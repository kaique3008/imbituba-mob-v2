import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function PainelPassageiro() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [motoristaSelecionado, setMotoristaSelecionado] = useState('');
  const [etapa, setEtapa] = useState<'form' | 'status'>('form');
  const [status, setStatus] = useState('Corrida solicitada...');
  const [mapaVisivel, setMapaVisivel] = useState(false);

  const motoristasDisponiveis = ['João', 'Maria', 'Carlos', 'Ana'];

  const iniciarStatus = () => {
    setEtapa('status');
    setStatus('Aguardando confirmação do motorista...');
    setTimeout(() => setStatus('Motorista aceitou a corrida!'), 2000);
    setTimeout(() => {
      setStatus('Motorista a caminho...');
      setMapaVisivel(true);
    }, 4000);
    setTimeout(() => setStatus('Corrida em andamento...'), 6000);
    setTimeout(() => {
      setStatus('Corrida finalizada!');
      salvarHistorico();
    }, 8000);
  };

  const salvarHistorico = () => {
    const historico = JSON.parse(localStorage.getItem('historicoPassageiro') || '[]');
    historico.push({
      origem,
      destino,
      motorista: motoristaSelecionado,
      status: 'Corrida finalizada!',
      data: new Date().toLocaleString(),
    });
    localStorage.setItem('historicoPassageiro', JSON.stringify(historico));
  };

  const solicitarCorrida = () => {
    if (origem && destino && motoristaSelecionado) {
      iniciarStatus();
    } else {
      alert('Preencha todos os campos antes de solicitar a corrida.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      maxWidth: '500px',
      margin: '0 auto',
      backgroundColor: '#f7f7f7',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      {etapa === 'form' ? (
        <>
          <h1 style={{ color: '#333' }}>Pedir Corrida</h1>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <label>Origem:</label><br />
            <input
              type="text"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
              placeholder="Digite o local de partida"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <label>Destino:</label><br />
            <input
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              placeholder="Digite o destino"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <label>Motorista disponível:</label><br />
            <select
              value={motoristaSelecionado}
              onChange={(e) => setMotoristaSelecionado(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              <option value="">Selecione um motorista</option>
              {motoristasDisponiveis.map((nome, index) => (
                <option key={index} value={nome}>{nome}</option>
              ))}
            </select>
          </div>
          <button
            onClick={solicitarCorrida}
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Confirmar Corrida
          </button>
        </>
      ) : (
        <>
          <h2>Status da Corrida</h2>
          <p><strong>Motorista:</strong> {motoristaSelecionado}</p>
          <p><strong>De:</strong> {origem}</p>
          <p><strong>Para:</strong> {destino}</p>
          <hr />
          <p>{status}</p>
          {mapaVisivel && (
            <div style={{ height: '300px', width: '100%', marginTop: '20px' }}>
              <MapContainer center={[-28.2284, -48.6659]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-28.2284, -48.6659]}>
                  <Popup>Motorista a caminho</Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </>
      )}
    </div>
  );
}