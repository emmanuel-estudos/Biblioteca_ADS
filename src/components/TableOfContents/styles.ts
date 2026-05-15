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
  /* O container não tem largura fixa para não bloquear cliques no fundo */
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
  color: #888;
  text-decoration: none;
  font-size: 0.85rem;
  padding-left: ${props => (props.$level > 2 ? '1rem' : '0')};
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.corSecundaria};
  }
`;