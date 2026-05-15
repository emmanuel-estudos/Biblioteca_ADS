import styled from 'styled-components';

export const Nav = styled.nav`
  /* Fixando no topo da página */
  position: sticky;
  top: 0;
  z-index: 50;

  display: flex;
  gap: 0.5rem;
  padding: 1rem 2rem;

  /* Fundo com leve transparência */
  background: rgba(248, 250, 252, 0.9);
  backdrop-filter: blur(8px);

  border-bottom: 1px solid #e2e8f0;
  font-size: 0.9rem;
  align-items: center;

  a, .current {
    text-transform: capitalize;
  }
  
  a {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      color: #3b82f6;
    }
  }

  .current {
    color: #1e293b;
    font-weight: 600;
  }

  span {
    color: #cbd5e1;
    user-select: none;
  }
`;