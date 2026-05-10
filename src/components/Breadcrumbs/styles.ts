import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.9rem;

  a {
    color: #64748b;
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
      color: #3b82f6;
    }
  }

  span {
    color: #cbd5e1;
  }
`;