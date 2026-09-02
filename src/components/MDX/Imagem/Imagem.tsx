import React, { ImgHTMLAttributes } from 'react';
import * as S from './styles';

export interface ImagemProps extends ImgHTMLAttributes<HTMLImageElement> {
  legenda?: string;
  exibirLegenda?: boolean;
  corPrimaria?: string;
}

export const Imagem: React.FC<ImagemProps> = ({
  src,
  alt,
  title,
  legenda,
  exibirLegenda,
  corPrimaria,
  ...rest
}) => {
  const textoLegenda = legenda || title;
  const mostrarLegenda = exibirLegenda !== undefined ? exibirLegenda : Boolean(textoLegenda);
  const temLegendaVisivel = Boolean(mostrarLegenda && textoLegenda);

  return (
    <S.BoxImage $temLegenda={temLegendaVisivel}>
      <S.ElementoImagem 
        src={src} 
        alt={alt} 
        $corPrimaria={corPrimaria} 
        {...rest} 
      />
      {temLegendaVisivel && (
        <S.Legenda>{textoLegenda}</S.Legenda>
      )}
    </S.BoxImage>
  );
};