import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min(800px, 90%) 1fr;
  padding-top: 2rem;
  
  & > * { grid-column: 2; }
`;

export const MateriaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const MateriaCard = styled(Link)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  color: #1e293b;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;