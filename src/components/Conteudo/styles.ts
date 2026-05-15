import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #09090b; /* Cinza quase preto para o fundo global da página */
  min-height: 100vh;
  width: 100%;
  
  /* Se você quiser centralizar o conteúdo ou alinhar os itens: */
  display: flex;
  justify-content: center; 
  gap: 2rem;
  padding: 2rem;

  /* Centralizando o conteúdo renderizado */
  max-width: 800px; /* Limita a largura do conteúdo para ele ficar centralizado */
  margin: 0 auto; /* Centraliza o conteúdo na tela */
`;

export const ArticleWrapper = styled.article`
  width: 100%;
  background: #111; /* Cor de fundo do conteúdo */
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
`;