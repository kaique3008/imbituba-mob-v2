import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-700 flex items-center justify-center gap-2">
          🚖 Imbituba Mobilidade
        </h1>
        <p className="mt-2 text-gray-600">Bem-vindo! O que você deseja fazer?</p>

        <div className="mt-6 grid gap-4">
          <button className="bg-green-600 text-white py-2 rounded-lg shadow hover:bg-green-700 transition">
            Pedir Corrida
          </button>
          <button className="bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Ver Histórico
          </button>
          <button className="bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition">
            Configurações
          </button>
        </div>

        <footer className="mt-6 text-xs text-gray-400">Versão 1.0 - 2025</footer>
      </div>
    </div>
  );
};

export default Home;
