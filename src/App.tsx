import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Periodo, Materia } from './pages';
import { Conteudo, AtividadeDetalhe } from './components';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:periodo" element={<Periodo />} />
        <Route path="/:periodo/:materia" element={<Materia />} />
        <Route path="/:periodo/:materia/assuntos/:slug" element={<Conteudo />} />
        <Route path="/:periodo/:materia/atividades/:pasta" element={<AtividadeDetalhe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;