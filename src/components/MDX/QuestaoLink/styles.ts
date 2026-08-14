import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background-color: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 0.375rem;
  color: #f8fafc;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #38bdf8;
    background-color: #1e293b;
  }
`;

export const StatusDot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #38bdf8; /* Ponto ciano */
`;

export const Seta = styled.span`
  color: #94a3b8;
  transition: transform 0.2s ease;

  ${LinkContainer}:hover & {
    transform: translateX(2px);
    color: #38bdf8;
  }
`;