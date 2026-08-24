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
  background: ${props => props.theme.corPrimaria || '#38bdf8'};
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
    background: ${props => props.theme.corSecundaria || '#0284c7'};
  }
`;

export const TocWrapper = styled.nav<TocProps>`
  background: #121212;
  border: 1px solid #262626;
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

  /* ==========================================================================
     CUSTOM SCROLLBAR (Chrome, Safari, Edge, Firefox)
     ========================================================================== */

  /* Largura da barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Trilho (fundo) da barra */
  &::-webkit-scrollbar-track {
    background: #171717;
    border-radius: 0 8px 8px 0;
  }

  /* Indicador de rolagem (Thumb) com a cor primária */
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.corPrimaria || '#38bdf8'};
    border-radius: 4px;
    transition: background 0.2s ease;
  }

  /* Hover do indicador com a cor secundária */
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.corSecundaria || '#0284c7'};
  }

  /* Suporte nativo para Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${props => `${props.theme.corPrimaria || '#38bdf8'} #171717`};
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
  width: fit-content;

  color: ${props => (props.$level === 1 ? '#ffffff' : '#888888')};
  font-weight: ${props => (props.$level === 1 ? '600' : '400')};

  padding-left: ${props => {
    if (props.$level === 3) return '1.25rem';
    if (props.$level === 2) return '0.6rem';
    return '0';
  }};

  ${props => props.$level === 1 && `
    border-bottom: 2px solid ${props.theme.corSecundaria || '#38bdf8'};
    padding-bottom: 0.15rem;
    margin-top: 0.4rem;
    margin-bottom: 0.15rem;
  `}

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${props => props.theme.corSecundaria || '#38bdf8'};
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