import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginInicial() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to bottom right, #006400, #00A859)',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>IM</h1>
      <p style={{ fontSize: '22px', marginTop: '10px' }}>Imbituba Mobilidade</p>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '30px',
        width: '80%',
        maxWidth: '320px',
        textAlign: 'center'
      }}>
        <p style={{ color: 'black', marginBottom: '10px' }}>Começar</p>
        <input
          placeholder="E-mail ou Telefone"
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px'
          }}
        />
        <button
          style={{
            backgroundColor: '#00A859',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            width: '100%'
          }}
          onClick={() => navigate('/passageiro')}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
