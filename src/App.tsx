// src/App.tsx
import * as c from './components';
import * as aulas from './contents';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-slate-800">Minha Biblioteca ADS</h1>
      </header>

      <main className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-10">
        {/* Renderizando uma aula específica do objeto 'aulas' */}
        <aulas.Aula01SO />
        
        {/* Se você precisar usar um componente solto aqui: */}
        <c.Gabarito resposta="Exemplo">Teste</c.Gabarito>
      </main>
    </div>
  );
}

export default App;