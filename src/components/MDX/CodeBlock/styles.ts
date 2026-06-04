import styled from 'styled-components';

export const CodeBlock = styled.code`
  background-color: #27272a;
  color: ${props => props.theme.corPrimaria};
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 0.95em;
  font-weight: 500;

  pre & {
    display: block;
    background-color: #1e293b;
    color: #f8fafc;
    padding: 1.5rem;
    overflow-x: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }
`;