import React from 'react';
import * as S from './styles';

export const TituloH3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <S.H3 {...props}>{children}</S.H3>;
};