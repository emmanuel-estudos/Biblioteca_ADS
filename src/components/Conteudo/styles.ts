import styled from 'styled-components';

// Container para toda a página exibida
export const PageContainer = styled.main`
  background-color: #09090b;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%; /* Evita estouro horizontal */
  box-sizing: border-box; /* Garante que padding não aumente o tamanho da tela */
  
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  gap: 4rem; /* Espaço seguro entre o Sumário flutuante e o Artigo */
  padding: 2rem;
  position: relative;
  
  /* Substituímos o zoom por transform scale se você realmente quiser encolher a página,
    mas o ideal para não quebrar o layout é apenas ajustar as fontes. 
    Se não for estritamente obrigatório, remova a linha abaixo.
  */
  /* transform: scale(1); */
`;

// Conteúdo dos Arquivos Renderizados
export const ArticleWrapper = styled.article`
  width: 100%;
  max-width: 800px; /* limitação horizontal */
  margin: 0 auto; /* garante a centralização */
  box-sizing: border-box;
  
  background: #111111; /* Cor de fundo interna do bloco de leitura */
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  
  /* Garante que códigos muito longos dentro do MDX não quebrem o artigo para os lados */
  overflow-x: auto; 
`;