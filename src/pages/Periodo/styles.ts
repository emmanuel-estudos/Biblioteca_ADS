import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #09090b;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: gray;
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    width: 100%;
    max-width: 1200px;
  }
`;

export const MateriaGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  gap: 2rem;
  justify-content: center; /* Centraliza 1, 2 ou o 4º item sozinho */
  align-content: center;
`;

export const Sigla = styled.span<{ $corSecundaria: string }>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.$corSecundaria};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const MateriaCard = styled(Link)<{ $corPrimaria: string; $corSecundaria: string }>`
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;
  
  /* Flex basis define o tamanho alvo do card. O max-width impede que ele estique sozinho */
  flex: 0 1 350px; 
  /* max-width: 200px; Margem de folga para preenchimento visual elegante */
  
  text-decoration: none;
  box-sizing: border-box;

  background: #111111;
  border: 1px solid #27272a;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5);

  h2 {
    color: ${props => props.$corPrimaria};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${props => props.$corSecundaria};
    box-shadow: 0 10px 15px -5px ${props => props.$corSecundaria}40;

    h2 {
      color: ${props => props.$corPrimaria};
    }
  }
`;