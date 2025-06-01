import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';

import PainelPassageiro from './pages/PainelPassageiro';
import PainelMotorista from './pages/PainelMotorista';
import PainelMototaxi from './pages/PainelMototaxi';
import LoginMotorista from './pages/LoginMotorista';
import PedirCorrida from './pages/PedirCorrida';
import HistoricoPassageiro from './pages/HistoricoPassageiro';
import HistoricoMotorista from './pages/HistoricoMotorista';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex items-center justify-center h-[80vh]">
                <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-green-700 mb-2">🚖 Imbituba Mobilidade</h2>
                  <p className="text-gray-600">Bem-vindo! Escolha uma opção no menu acima.</p>
                </div>
              </div>
            }
          />
          <Route path="/painel-passageiro" element={<PainelPassageiro />} />
          <Route path="/motorista" element={<PainelMotorista />} />
          <Route path="/painel-mototaxi" element={<PainelMototaxi />} />
          <Route path="/login-passageiro" element={<PainelPassageiro />} />
          <Route path="/login-motorista" element={<LoginMotorista />} />
          <Route path="/pedir-corrida" element={<PedirCorrida />} />
          <Route path="/historico-passageiro" element={<HistoricoPassageiro />} />
          <Route path="/historico-motorista" element={<HistoricoMotorista />} />
          <Route
            path="/ajuda"
            element={
              <div className="text-center mt-10 text-gray-600 text-lg">Página de Ajuda</div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
