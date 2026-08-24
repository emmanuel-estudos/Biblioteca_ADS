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

  scroll-behavior: smooth;
	overflow-x: hidden;

  /* ==========================================================================
     CUSTOM SCROLLBAR VERTICAL DA PÁGINA
     ========================================================================== */

  /* Largura da barra de rolagem vertical */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Trilho (fundo) combinando com o fundo da página #09090b */
  &::-webkit-scrollbar-track {
    background: #09090b;
  }

  /* Indicador de rolagem com a cor primária dinâmica ou azul default */
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.corPrimaria || '#38bdf8'};
    border-radius: 4px;
    transition: background 0.2s ease;
  }

  /* Hover do indicador com a cor secundária dinâmica */
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.corSecundaria || '#0284c7'};
  }

  /* Suporte nativo para Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${props => `${props.theme.corPrimaria || '#38bdf8'} #09090b`};
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

	overflow-x: hidden;

  h1, h2, h3, h4, h5, h6 {
    scroll-margin-top: 5rem; /* ~80px de distância do topo da tela ao ser focalizado */
  }

  /* ==========================================================================
     CUSTOM SCROLLBAR VERTICAL DO ARTIGO
     ========================================================================== */

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #171717;
    border-radius: 0 8px 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.corPrimaria || '#38bdf8'};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.corSecundaria || '#0284c7'};
  }

  scrollbar-width: thin;
  scrollbar-color: ${props => `${props.theme.corPrimaria || '#38bdf8'} #171717`};
`;