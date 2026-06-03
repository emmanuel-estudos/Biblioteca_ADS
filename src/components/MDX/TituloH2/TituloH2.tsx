import React from 'react';
import * as S from './styles';

export const TituloH2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <S.H2 {...props}>{children}</S.H2>;
};