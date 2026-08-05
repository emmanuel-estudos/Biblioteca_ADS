import styled from 'styled-components';

export const TerminalRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
	line-height: 1.5;
`;

export const CommandText = styled.span`
  color: ${props => props.theme.corPrimaria};
	line-height: 1.5;

	flex: 1;
	min-width: 0;
	word-break: break-all;
	overflow-wrap: anywhere;
	white-space: pre-wrap;
`;
