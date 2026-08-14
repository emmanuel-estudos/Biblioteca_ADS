import styled from 'styled-components';

export const BreadcrumbsContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem; /* Garante o mesmo espaçamento entre TODOS os elementos */
  padding: 1rem 2rem;
  font-size: 0.9rem;
  width: 100%;

  background-color: #111111; 
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${props => props.theme?.corPrimaria || '#27272a'};
`;

export const BreadcrumbsItem = styled.li<{ $isLast?: boolean; $corPrimaria?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #38bdf8; /* ciano no hover */
      text-decoration: underline;
    }
  }

  span {
    color: ${props => (props.$isLast ? '#f8fafc' : '#94a3b8')};
    font-weight: ${props => (props.$isLast ? '600' : '400')};
  }
`;

export const Separator = styled.span`
  color: ${props => props.theme?.corSecundaria || '#64748b'};
  font-weight: bold;
  user-select: none;
`;

export const BreadcrumbsList = styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;