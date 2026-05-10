import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  border: 5px solid blue;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1e293b;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 800;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center; /* Centraliza 1, 2 ou o 4º item sozinho */
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  flex: 0 1 350px; /* Largura base do card */
  min-width: 300px;
`;

export const PeriodCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-8px);
    border-color: #3b82f6;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  h2 {
    color: #334155;
    font-size: 1.5rem;
    margin: 0;
  }

  span {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;