import React from 'react';
import * as S from './styles';

export const TituloH1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <S.H1 {...props}>{children}</S.H1>;
};