import styled from 'styled-components';

export const TerminalRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

export const PromptText = styled.span`
  color: ${props => props.theme.corSecundaria}; 
  font-weight: bold;
  user-select: none;
  white-space: nowrap;
  margin-right: 0.75rem;
  bottom: 20px;
`;

export const CommandText = styled.span`
  color: ${props => props.theme.corPrimaria};
  bottom: 20px;
`;
