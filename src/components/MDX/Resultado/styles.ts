import styled from 'styled-components';

// Variáveis de cores locais para fácil manutenção
const corTexto = '#d4d4d8';
const corPrefixo = '#a1a1aa'; // Um cinza ligeiramente mais claro/focado para o rótulo

export const ResultadoWrapper = styled.div`
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
  opacity: 0.9;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap; /* Garante quebra de linha correta se o resultado for longo */
`;

export const ResultadoPrefix = styled.span`
  color: ${corPrefixo};
  font-weight: 600;
  margin-right: 0.5px;
  user-select: none; /* Impede de copiar o prefixo */
`;

export const ResultadoContent = styled.span`
  color: ${corTexto};
`;