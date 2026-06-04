import React from 'react';
import * as S from './styles';

export interface CommentProps {
  children: React.ReactNode;
}

export const Comment: React.FC<CommentProps> = ({ children }) => {
  return (
    <S.CommentWrapper>
      <S.CommentPrefix>// </S.CommentPrefix>
      <S.CommentText>{children}</S.CommentText>
    </S.CommentWrapper>
  );
};