// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Periodo, Materia } from './pages';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:periodo" element={<Periodo />} />
        <Route path="/:periodo/:materia" element={<Materia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;