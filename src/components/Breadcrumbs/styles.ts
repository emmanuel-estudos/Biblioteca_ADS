import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #f8fafc;
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