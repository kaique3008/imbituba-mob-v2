import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <nav className="menu">
      <h1 className="menu-title">Imbituba Mobilidade</h1>
      <ul className="menu-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/painel-passageiro">Painel Passageiro</Link></li>
        <li><Link to="/motorista">Painel Motorista</Link></li>
        <li><Link to="/painel-mototaxi">Painel Mototáxi</Link></li>
        <li><Link to="/login-passageiro">Login Passageiro</Link></li>
        <li><Link to="/login-motorista">Login Motorista</Link></li>
        <li><Link to="/pedir-corrida">Pedir Corrida</Link></li>
        <li><Link to="/historico-passageiro">Histórico Passageiro</Link></li>
        <li><Link to="/historico-motorista">Histórico Motorista</Link></li>
        <li><Link to="/ajuda">Ajuda</Link></li>
      </ul>
    </nav>
  );
}
