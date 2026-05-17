import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  /* MODIFICADO: Fundo escuro nativo global para preencher a Home de canto a canto */
  background-color: #09090b; 
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  
  /* Mantendo seu espaçamento */
  padding: 4rem 2rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  
  /* MODIFICADO: Cor em cinza neutro */
  color: gray; 
  
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 800;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  gap: 2rem;
  justify-content: center; /* Centraliza 1, 2 ou o 4º item sozinho */
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  flex: 0 1 350px; /* Largura base do card */
  min-width: 300px;
`;

export const PeriodCard = styled.div`
  /* ESTRUTURA PRESERVADA: O formato de "carta" continua exatamente igual */
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  /* MODIFICADO: Fundo escuro do card (#111111) e borda escura sutil */
  background: #111111;
  border: 1px solid #27272a;
  
  /* MODIFICADO: Sombra adaptada para fundos escuros (mais suave) */
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5);

  &:hover {
    transform: translateY(-8px);
    
    /* MODIFICADO: No hover, a borda acende em um tom cinza mais claro */
    border-color: #4b5563;
    
    /* MODIFICADO: Sombra de hover adaptada para o tema escuro */
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.6), 0 8px 10px -6px rgb(0 0 0 / 0.6);
  }

  h2 {
    /* MODIFICADO: Título interno do card em cinza neutro */
    color: gray;
    font-size: 1.5rem;
    margin: 0;
  }

  span {
    font-size: 0.875rem;
    
    /* MODIFICADO: Um cinza levemente mais escuro para o subtítulo "Semestre Acadêmico" */
    color: #64748b; 
    
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;