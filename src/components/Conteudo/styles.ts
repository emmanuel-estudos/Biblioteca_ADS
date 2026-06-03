import styled from 'styled-components';

// Container para toda a página exibida
export const PageContainer = styled.main`
  background-color: #09090b;
  min-height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  gap: 4rem; /* Espaço seguro entre o Sumário flutuante e o Artigo */
  padding: 2rem;
  position: relative;
`;

// Conteúdo dos Arquivos Renderizados
export const ArticleWrapper = styled.article`
  width: 100%;
  max-width: 800px; /* limitação horizontal */
  margin: 0 auto; /* garante a centralização */
  
  background: #111111; /* Cor de fundo interna do bloco de leitura */
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
`;