import React from 'react';
import * as S from './styles';

export const TituloH4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <S.H4 {...props}>{children}</S.H4>;
};