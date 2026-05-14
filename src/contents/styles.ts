import styled from 'styled-components';

export const colors = {
  verdeEscuro1: '#246348',
  whiteSmoke: '#F5F5F5',
  ghostWhite: '#F8F8FF',
  antiqueWhite: '#FAEBD7',
  azulEscuro: '#2c3e50',
  verdeEscuro2: '#075c34',
  verdeEscuro3: '#49a862',
  destaque: '#00ff44',
  secundaria: '#83ffbf',
  fundoCodigo: '#e0e0d0',
};

// Container principal que injeta a classe .ldr-page
export const PageContainer = styled.div`
  counter-reset: h1counter;
  font-size: 18px;
  background-color: var(--cor-verde-escuro-1); // Ajuste conforme necessário
  padding: 2rem;
`;

// Estilização de Textos e Títulos
export const H1 = styled.h1`
  counter-increment: h1counter;
  counter-reset: h2counter;
  color: ${colors.azulEscuro};
  background: linear-gradient(90deg, ${colors.secundaria} 30%, transparent 90%);
  border-left: 4px solid ${colors.destaque};
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  align-items: center;

  &::before, &::after { content: "📊 "; }
`;

export const H2 = styled.h2`
  counter-increment: h2counter;
  counter-reset: h3counter;
  color: ${colors.azulEscuro};
  background: linear-gradient(90deg, ${colors.secundaria} 30%, transparent 90%);
  border-left: 4px solid ${colors.destaque};
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  &::before { content: counter(h1counter) "." counter(h2counter) ". » "; }
`;

export const P = styled.p`
  margin-block: 0.5rem;
  text-indent: 2rem;
  color: #333; // Ajuste conforme seu contraste
`;

export const Strong = styled.strong`
  background-color: ${colors.verdeEscuro2};
  padding: 3px;
  border-radius: 0.1rem;
  border: 1px solid #0a0a0a;
  color: white;
`;