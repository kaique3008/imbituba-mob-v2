import React, { useState } from 'react';

const PedirCorrida = () => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  const handleChamarCorrida = () => {
    alert(`Corrida solicitada de "${origem}" para "${destino}".`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          🛺 Pedir Corrida
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Origem:</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Digite o local de origem"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Destino:</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Digite o destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>

        <button
          onClick={handleChamarCorrida}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Chamar Corrida
        </button>
      </div>
    </div>
  );
};

export default PedirCorrida;
