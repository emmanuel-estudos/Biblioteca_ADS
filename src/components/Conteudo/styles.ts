import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 750px; /* Limita a largura do conteúdo para ele ficar centralizado */
  margin: 0 auto;    /* Centraliza o conteúdo na tela */
  padding: 2rem;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ArticleWrapper = styled.article`
  width: 100%;
  background: #111; /* Cor de fundo do conteúdo */
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
`;