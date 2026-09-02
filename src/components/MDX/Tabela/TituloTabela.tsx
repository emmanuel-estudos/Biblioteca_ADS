import React from 'react';
import * as S from './styles';

export interface TituloTabelaProps {
  children: React.ReactNode;
}

export const TituloTabela: React.FC<TituloTabelaProps> = ({ children }) => {
  return <S.StyledTituloTabela>{children}</S.StyledTituloTabela>;
};
