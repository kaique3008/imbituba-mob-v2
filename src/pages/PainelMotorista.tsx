import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PainelMotorista() {
  const [corrida, setCorrida] = useState<any>(null);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem('corrida');
    if (dados) {
      const parsed = JSON.parse(dados);
      setCorrida(parsed);
      setStatus(parsed.status);
    }
  }, []);

  const registrarNoHistorico = (corridaFinal: any) => {
    const historico = JSON.parse(localStorage.getItem('historicoCorridas') || '[]');
    historico.push({
      ...corridaFinal,
      data: new Date().toLocaleString(),
    });
    localStorage.setItem('historicoCorridas', JSON.stringify(historico));
  };

  const atualizarStatus = (novoStatus: string, delay = 0) => {
    setTimeout(() => {
      if (!corrida) return;
      const novaCorrida = { ...corrida, status: novoStatus };
      localStorage.setItem('corrida', JSON.stringify(novaCorrida));
      setCorrida(novaCorrida);
      setStatus(novoStatus);

      if (novoStatus === 'Corrida finalizada!') {
        registrarNoHistorico(novaCorrida);
      }
    }, delay);
  };

  const aceitarCorrida = () => {
    atualizarStatus('Corrida aceita!', 0);
    atualizarStatus('Indo buscar passageiro...', 2000);
    atualizarStatus('Corrida em andamento...', 4000);
    atualizarStatus('Corrida finalizada!', 6000);
  };

  const cancelarCorrida = () => {
    if (corrida) {
      const cancelada = { ...corrida, status: 'Corrida cancelada pelo motorista' };
      registrarNoHistorico(cancelada);
    }
    localStorage.removeItem('corrida');
    setCorrida(null);
    setStatus('');
  };

  if (!corrida) {
    return (
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <p>Nenhuma corrida disponível.</p>
        <button onClick={() => navigate('/motorista/historico')}>Ver Histórico</button>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '30px', maxWidth: '400px', margin: '0 auto',
      backgroundColor: '#fff7e6', borderRadius: '10px'
    }}>
      <h2>Corrida Recebida</h2>
      <p><strong>De:</strong> {corrida.origem}</p>
      <p><strong>Para:</strong> {corrida.destino}</p>
      <p><strong>Motorista:</strong> {corrida.motorista}</p>
      <hr />
      <p><strong>Status:</strong> {status}</p>
      {status !== 'Corrida finalizada!' && (
        <>
          <button onClick={aceitarCorrida} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', marginBottom: '10px' }}>Aceitar Corrida</button>
          <button onClick={cancelarCorrida} style={{ backgroundColor: '#dc3545', color: 'white', padding: '10px 20px' }}>Cancelar Corrida</button>
        </>
      )}
      <button onClick={() => navigate('/motorista/historico')} style={{ marginTop: '20px' }}>
        Ver Histórico
      </button>
    </div>
  );
}