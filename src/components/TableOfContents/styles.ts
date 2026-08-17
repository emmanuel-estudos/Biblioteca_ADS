import styled from 'styled-components';

interface TocProps {
  $isOpen: boolean;
}

// Container que segura o sumário e o botão
export const TocContainer = styled.div<TocProps>`
  position: fixed;
  left: 1rem;
  top: 150px;
  z-index: 100;
  display: flex;
  align-items: flex-start;
`;

export const ToggleButton = styled.button`
  background: ${props => props.theme.corPrimaria};
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  z-index: 101;

  &:hover {
    background: ${props => props.theme.corSecundaria};
  }
`;

export const TocWrapper = styled.nav<TocProps>`
  background: #121212;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1.5rem;
  margin-left: 10px;
  width: 250px;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);

  /* Transição de visibilidade */
  transition: all 0.3s ease-in-out;
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  transform: ${props => (props.$isOpen ? 'translateX(0)' : 'translateX(-20px)')};
  pointer-events: ${props => (props.$isOpen ? 'all' : 'none')};
`;

export const TocTitle = styled.p`
  font-weight: bold;
  font-size: 0.75rem;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 1rem;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
`;

export const TocList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const TocLink = styled.a<{ $level: number }>`
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.2s ease-in-out;
  width: fit-content; /* Garante que o sublinhado do H1 ocupe apenas o tamanho do texto */

  // 1. Definição de Cores e Pesos baseado no nível do título
  color: ${props => (props.$level === 1 ? '#ffffff' : '#888888')};
  font-weight: ${props => (props.$level === 1 ? '600' : '400')};

  // 2. Hierarquia de Recuo (H1 encostado na esquerda, H2 um pouco pra frente, H3 mais recuado)
  padding-left: ${props => {
    if (props.$level === 3) return '1.25rem';
    if (props.$level === 2) return '0.6rem';
    return '0'; // Para o H1
  }};

  // 3. Estilização exclusiva para os títulos principais (H1)
  ${props => props.$level === 1 && `
    border-bottom: 2px solid ${props.theme.corSecundaria};
    padding-bottom: 0.15rem;
    margin-top: 0.4rem;
    margin-bottom: 0.15rem;
  `}

  /* Remove o espaçamento do topo se o primeiro item da lista for um H1 */
  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${props => props.theme.corSecundaria};
  }
`;

export const BotaoVoltarContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  background-color: transparent;
  color: ${props => props.theme.corPrimaria || '#38bdf8'};
  border: 1px solid ${props => props.theme.corPrimaria || '#38bdf8'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.corPrimaria || '#38bdf8'};
    color: #111111;
  }
`;