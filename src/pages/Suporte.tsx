// src/pages/Suporte.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Suporte() {
  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded-xl shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Ajuda e Suporte</h1>
      <ul className="space-y-4">
        <li>
          <strong>Como pedir uma corrida?</strong>
          <p>Clique na aba Passageiro, preencha origem e destino, escolha o motorista e clique em "Confirmar Corrida".</p>
        </li>
        <li>
          <strong>Esqueci minha senha. E agora?</strong>
          <p>Como ainda estamos em fase inicial, use um nome de motorista válido ou fale com o suporte local.</p>
        </li>
        <li>
          <strong>Como ver o histórico?</strong>
          <p>No menu superior, clique em "Histórico Passageiro" ou "Histórico Motorista" conforme seu perfil.</p>
        </li>
        <li>
          <strong>Como mudar para modo escuro?</strong>
          <p>Em breve vamos adicionar a opção de tema no canto superior direito.</p>
        </li>
        <li>
          <strong>Precisa de ajuda urgente?</strong>
          <p>Entre em contato com nosso suporte: <a href="tel:+554899999999" className="text-blue-600 underline">(48) 99999-9999</a></p>
        </li>
      </ul>
      <div className="text-center mt-6">
        <Link to="/" className="text-green-700 underline">Voltar ao início</Link>
      </div>
    </div>
  );
}
