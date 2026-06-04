import React from 'react';
import * as S from './styles';

export interface ResultadoProps {
  children: React.ReactNode;
}

export const Resultado: React.FC<ResultadoProps> = ({ children }) => {
  return (
    <S.ResultadoWrapper>
      <S.ResultadoPrefix>Resultado esperado: </S.ResultadoPrefix>
      <S.ResultadoContent>{children}</S.ResultadoContent>
    </S.ResultadoWrapper>
  );
};