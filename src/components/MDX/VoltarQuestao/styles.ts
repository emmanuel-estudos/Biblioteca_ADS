import styled from 'styled-components';

export const BotaoVoltar = styled.button<{ $corPrimaria?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.25rem;
  background-color: #0f172a; /* neutral-900 / slate-900 */
  border: 1px solid #1e293b;
  border-radius: 0.375rem;
  color: #f8fafc;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${props => props.$corPrimaria || '#38bdf8'};
    background-color: #1e293b;
    color: ${props => props.$corPrimaria || '#38bdf8'};
  }
`;

export const SetaVoltar = styled.span`
  font-size: 1rem;
  transition: transform 0.2s ease;

  ${BotaoVoltar}:hover & {
    transform: translateX(-3px);
  }
`;