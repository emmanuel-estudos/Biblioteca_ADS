import styled from 'styled-components';

export const StyledAnchor = styled.a`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px dashed #3b82f6;
  transition: all 0.2s ease;

  &:hover {
    color: #60a5fa;
    border-bottom-style: solid;
  }
`;