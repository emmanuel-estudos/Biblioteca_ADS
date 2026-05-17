import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  background-color: #25262b;
  padding: 8px 12px 0;
  gap: 6px;
  border-bottom: 1px solid #2c2e33;
`;

export const Tab = styled.button<{ active?: boolean }>`
  background: ${props => props.active ? '#1a1b1e' : 'transparent'};
  color: ${props => props.active ? props.theme.corSecundaria : '#909296'};
  padding: 8px 16px;
  border: none;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: ${props => props.active ? '600' : '400'};
  border-bottom: 2px solid ${props => props.active ? props.theme.corSecundaria : 'transparent'};
  transition: all 0.2s ease;

  &:hover {
    color: ${props => !props.active && '#c1c2c5'};
  }
`;

/**
 * Bloco de Código: Texto levemente suavizado (80% de opacidade) 
 * baseado na cor primária da matéria.
 */
export const CodeArea = styled.div`
  margin: 0;
  padding: 1.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  background-color: #1a1b1e;
  color: ${props => props.theme.corPrimaria}cc;

  display: flex;
  flex-direction: column; /* Empilha os elementos verticalmente */
  gap: 4px; /* Controla a distância exata entre as linhas */
  
  /* Permite que o texto dentro dele ainda possa ser selecionado 
     e copiado como código, mas ignora os "Enters" do teclado no MDX */
`;

/**
 * Comentário: Mais escuro que a cor principal e em itálico.
 * Sem aspecto de "seleção" (fundo removido).
 */
export const Comment = styled.span`
  color: ${props => props.theme.corPrimaria};
  background-color: transparent;
  filter: brightness(0.6);
  font-style: italic;
  user-select: none;
  
  text-indent: 0;
  margin: 0;
  padding: 0;
  display: block;
`;

export const Prompt = styled.span`
  color: ${props => props.theme.corSecundaria}; 
  font-weight: bold;
  user-select: none;
  white-space: nowrap;

`;

export const Resultado = styled.span`
  color: ${props => props.theme.corPrimaria};
  filter: brightness(1);
  margin-left: 1rem;
`;

/**
 * Terminal-like Box: Centralizada e com largura controlada.
 * Atua como um "pop-up" de conteúdo técnico.
 */
export const Box = styled.div`
  align-self: center;
  min-width: 60%;
  max-width: 95%;
  background-color: #1a1b1e;
  border-radius: 10px;
  border: 1px solid #2c2e33;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-width: 100%;
  }

  ${Comment} {
    margin-left: 0.5rem;
  }

  ${Prompt} {
    margin-left: 0.5rem;
  }
`;