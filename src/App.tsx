import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Periodo, Materia, Atividades } from './pages';
import { Conteudo } from './components';
import 'highlight.js/styles/vs2015.css';

function App() {
  return (
    <BrowserRouter basename="/Biblioteca_ADS"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:periodo" element={<Periodo />} />
        <Route path="/:periodo/:materia" element={<Materia />} />
        <Route path="/:periodo/:materia/assuntos/:slug" element={<Conteudo />} />
        <Route path="/:periodo/:materia/atividades/:atividade" element={<Atividades />} />
        <Route path="/:periodo/:materia/atividades/:atividade/:slug" element={<Conteudo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;