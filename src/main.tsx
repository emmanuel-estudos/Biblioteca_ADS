import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Usamos HashRouter para o GitHub Pages
import App from './App';
import './index.css';
import * as c from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <c.Gabarito resposta="A">
        Explicação da Alternativa aqui... 
      </c.Gabarito>
    </HashRouter>
  </React.StrictMode>,
);
