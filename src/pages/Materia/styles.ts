import styled from 'styled-components';

// 1. O fundo "por trás" que envelopa a tela toda (igual ao Conteudo)
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

// 2. O Header onde fica o título H1 da matéria
export const Header = styled.header`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  text-align: left;

  h1 {
    /* REQUISITO: O título principal brilha com a corPrimaria da matéria */
    color: ${props => props.theme.corPrimaria};
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

// 3. Container das abas (Assuntos / Atividades)
export const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  border-bottom: 1px solid #27272a; /* Linha sutil divisória */
  margin-bottom: 1.5rem;
`;

// 4. Os botões de alternar Abas (Assuntos / Atividades)
export const TabButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  /* REQUISITO: Se ativo, texto fica claro e ganha borda inferior com a corPrimaria. 
     Se inativo, fica cinza apagado. */
  color: ${props => props.$active ? '#f4f4f5' : '#71717a'};
  border-bottom: 2px solid ${props => props.$active ? props.theme.corPrimaria : 'transparent'};

  &:hover {
    color: #f4f4f5;
  }
`;

// 5. O Bloco Central/Card que lista os links (O equivalente ao ArticleWrapper)
export const ContentList = styled.ul`
  list-style: none;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  
  /* REQUISITO: Fundo idêntico ao container do artigo (#111111) */
  background-color: #111111; 
  border-radius: 8px;
  
  /* REQUISITO: Leve borda ao redor do bloco usando a corSecundaria para dar o contraste dark */
  border: 1px solid ${props => props.theme.corSecundaria}50; /* 50 adiciona opacidade sutil */
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// 6. Cada item/linha da lista de aulas
export const ListItem = styled.li`
  a {
    display: block;
    color: #e2e8f0; /* Texto claro */
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem;
    border-radius: 4px;
    transition: all 0.2s ease;

    /* REQUISITO: Ao passar o mouse no item, o fundo ganha um destaque 
       com a corSecundaria bem suave e o texto muda para a corPrimaria */
    &:hover {
      background-color: ${props => props.theme.corSecundaria}20; /* 20 = bem transparente */
      color: ${props => props.theme.corPrimaria};
      transform: translateX(5px); /* Efeito sutil de mover para o lado */
    }
  }
`;