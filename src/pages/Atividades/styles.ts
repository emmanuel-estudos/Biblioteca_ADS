import styled from 'styled-components';

// 1. O fundo "por trás" que envelopa a tela toda
export const PageWrapper = styled.div`
  background-color: #09090b; /* Fundo escuro nativo global */
  min-height: 100vh;
  width: 100%;
  color: #f4f4f5;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 2. O Header onde fica o título H1 da atividade e a descrição
export const Header = styled.header`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  text-align: left;

  h1 {
    /* O título principal brilha com a corPrimaria da matéria */
    color: ${props => props.theme.corPrimaria};
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    color: #64748b;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

// 3. O Bloco Central/Card que lista os arquivos daquela atividade
export const ContentList = styled.ul`
  list-style: none;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  
  /* Fundo escuro idêntico ao bloco de Assuntos (#111111) */
  background-color: #111111; 
  border-radius: 8px;
  
  /* Leve borda ao redor do bloco usando a corSecundaria para dar o contraste dark */
  border: 1px solid ${props => props.theme.corSecundaria}50; /* 50 adiciona opacidade sutil */
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// 4. Cada item/linha com o link do arquivo (.mdx, .pdf, etc.)
export const ListItem = styled.li`
  a {
    display: block;
    color: #e2e8f0; /* Texto claro */
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem;
    border-radius: 4px;
    transition: all 0.2s ease;

    /* Ao passar o mouse no item, o fundo ganha um destaque 
       com a corSecundaria bem suave e o texto muda para a corPrimaria */
    &:hover {
      background-color: ${props => props.theme.corSecundaria}20; /* 20 = bem transparente */
      color: ${props => props.theme.corPrimaria};
      transform: translateX(5px); /* Efeito sutil de mover para o lado */
    }
  }
`;