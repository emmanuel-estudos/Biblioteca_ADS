import styled from 'styled-components';

export const CodeBlock = styled.code`
  color: ${props => props.theme.corPrimaria};
  padding: 0.2rem 0.1rem;
  border-radius: 2px;
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  font-weight: 500;

  pre & {
    display: block;
    color: ${props => props.theme.corPrimaria};
    padding: 1.5rem;
    overflow-x: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }
`;