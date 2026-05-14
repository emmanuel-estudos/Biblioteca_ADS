import styled from 'styled-components';

export const Box = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  background: hsla(160, 100%, 50%, 0.25); // Exemplo de cor dinâmica
  padding: 0.5rem 0.75rem 0;
`;

export const Tab = styled.div<{ active?: boolean }>`
  background: ${props => props.active ? '#151515' : '#83ffbf'};
  color: ${props => props.active ? 'white' : 'black'};
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem 0.5rem 0 0;
  cursor: pointer;
  font-weight: ${props => props.active ? 'bolder' : 'normal'};
`;

export const CodeBlock = styled.pre`
  background: #1e1e1e;
  color: #d1d5db;
  padding: 1rem;
  overflow-x: auto;
`;

export const Comment = styled.span`
  opacity: 0.75;
  filter: saturate(0);
`;