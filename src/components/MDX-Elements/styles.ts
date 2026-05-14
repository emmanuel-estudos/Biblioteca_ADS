import styled from 'styled-components';

export const H1 = styled.h1`
  counter-increment: h1counter;
  counter-reset: h2counter;

  color: ${props => props.theme.corPrimaria};
  background: linear-gradient(90deg, ${props => props.theme.corSecundaria} 30%, transparent 90%);
  border-left: 4px solid ${props => props.theme.corPrimaria};
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  align-items: center
`;

export const H2 = styled.h2`
  counter-increment: h2counter;
  counter-reset: h3counter;
  gap: 7px;

  color: ${props => props.theme.corPrimaria};
  background: linear-gradient(90deg, ${props => props.theme.corSecundaria} 30%, transparent 90%);
  border-left: 4px solid ${props => props.theme.corPrimaria};
  padding: 0.5rem;
  margin: 1.5rem 0 1rem 0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;

  &::before { content: counter(h1counter) "." counter(h2counter) ". » "; }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #334155;
  margin-bottom: 1.25rem;
  text-indent: 2rem;
`;

export const Strong = styled.strong`
  background-color: ${props => props.theme.corSecundaria};
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
`;

export const CodeBlock = styled.code`
  background-color: #f1f5f9;
  color: #e11d48;
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