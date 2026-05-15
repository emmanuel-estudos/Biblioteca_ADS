import styled from 'styled-components';

export const Nav = styled.nav`
  /* Fixando no topo da página */
  position: sticky;
  top: 0;
  z-index: 50;

  display: flex;
  gap: 0.5rem;
  padding: 1rem 2rem;

  /* REQUISITO: Mesma cor de background do conteúdo exibido no Conteudo.tsx */
  background-color: #111111; 
  backdrop-filter: blur(8px);

  /* REQUISITO: Borda de 1px usando a cor usada no H1 (corPrimaria da matéria) */
  border-bottom: 1px solid ${props => props.theme.corPrimaria};
  
  font-size: 0.9rem;
  align-items: center;

  a, .current {
    text-transform: capitalize;
  }
  
  /* REQUISITO: A cor das palavras que formam o caminho devem ser 'gray' */
  a {
    color: gray; 
    text-decoration: none;
    font-weight: 500;
    transition: filter 0.2s ease;
    
    /* Efeito sutil ao passar o mouse nos links anteriores */
    &:hover {
      filter: brightness(1.2);
    }
  }

  /* REQUISITO: A última palavra deve ser 'gray' mas sublinhada com a cor secundária */
  .current {
    color: gray;
    font-weight: 600;
    position: relative;
    display: inline-block;
    
    /* Criação do sublinhado customizado usando a cor secundária da matéria */
    border-bottom: 2px solid ${props => props.theme.corSecundaria};
    padding-bottom: 2px;
  }

  /* REQUISITO: As barras ( / ) devem ser da cor secundária da matéria */
  span {
    color: ${props => props.theme.corSecundaria};
    font-weight: bold;
    user-select: none;
  }
`;