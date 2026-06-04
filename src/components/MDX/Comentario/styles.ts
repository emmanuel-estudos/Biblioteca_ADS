import styled from 'styled-components';

const corComentario = '#71717a'

export const Comment = styled.span`
  color: ${corComentario};
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-style: italic;
  display: block;
  margin-top: 0.5rem;
	user-select: none; // Impede que seja selecionado
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: 'Fira Code', monospace;
  font-size: 0.90rem;
  color: ${corComentario};
  font-style: italic;
  margin: 0.3rem 0;
  line-height: 1.5;
`;

export const CommentPrefix = styled.span`
  color: ${corComentario};
  margin-right: 0.5rem;
  user-select: none;
`;

export const CommentText = styled.span`
  word-break: break-word;
`;