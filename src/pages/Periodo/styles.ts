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
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem; /* Espaçamento seguro entre os cards */
  width: 100%;
  max-width: 615px; /* LIMITADOR: (3 colunas * 175px) + (2 gaps * 24px/1.5rem) = ~615px */
  justify-content: center; /* Centraliza horizontalmente os cards de cada linha de forma independente */
  margin: 0 auto;
`;

export const MateriaCard = styled(Link)<{ $corPrimaria: string; $corSecundaria: string }>`
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  
  /* Flex basis define o tamanho alvo do card. O max-width impede que ele estique sozinho */
  flex: 1 1 175px; 
  max-width: 200px; /* Margem de folga para preenchimento visual elegante */
  
  text-decoration: none;
  transition: all 0.3s ease;
  box-sizing: border-box;

  background: #111111;
  border: 1px solid #27272a;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5);

  h2 {
    color: #e2e8f0;
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${props => props.$corPrimaria};
    box-shadow: 0 10px 15px -5px ${props => props.$corSecundaria}40;

    h2 {
      color: ${props => props.$corPrimaria};
    }
  }
`;