import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: grid;
  /* Cria 3 colunas: uma flexível, uma fixa/maximizada para leitura, uma flexível */
  grid-template-columns: 1fr min(800px, 90%) 1fr;
  min-height: 100vh;
  background-color: #f8fafc;
  padding-top: 2rem;

  & > * {
    grid-column: 2; /* Garante que todo filho direto fique na coluna central */
  }
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #0f172a;
    text-transform: capitalize;
    margin-bottom: 1.5rem;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 2rem;
`;

interface TabButtonProps {
  $active?: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.$active ? '#3b82f6' : '#64748b'};
  border-bottom: 3px solid ${props => props.$active ? '#3b82f6' : 'transparent'};
  transition: all 0.2s;
  margin-bottom: -2px; /* Alinha com a borda do container */

  &:hover {
    background-color: ${(props) => (props.$active ? '#2563eb' : '#e2e8f0')};
  }
`;

export const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItem = styled.li`
  background: white;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(5px);
    border-color: #3b82f6;
  }

  a {
    text-decoration: none;
    color: #334155;
    font-weight: 500;
    display: block;
    width: 100%;
  }
`;