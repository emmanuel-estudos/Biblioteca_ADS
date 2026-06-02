import React from 'react';
import * as S from './styles';

interface LinhaProps {
  texto: string;
  children: React.ReactNode;
}

export const LinhaTerminal: React.FC<LinhaProps> = ({ texto, children }) => {
  return (
    <S.TerminalRow>
      <S.PromptText>{texto}</S.PromptText>
      <S.CommandText>{children}</S.CommandText>
    </S.TerminalRow>
  );
};
