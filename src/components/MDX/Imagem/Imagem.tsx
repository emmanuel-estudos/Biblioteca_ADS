import React, { ImgHTMLAttributes, useState } from 'react';
import * as S from './styles';

export interface ImagemProps extends ImgHTMLAttributes<HTMLImageElement> {
  tipo?: 'referencia' | 'icone';
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
  tipo = 'referencia',
  onError,
  ...rest
}) => {
  const [temErro, setTemErro] = useState(false);

  const handleErro = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setTemErro(true);
    if (onError) onError(e);
  };

  // Na imagem de referência, o alt é usado como legenda caso a legenda não seja passada explicitamente
  const textoLegenda = legenda || alt || title;

  // Regras de exibição da legenda:
  // - Ícones NUNCA exibem legenda.
  // - Se a imagem falhar ao carregar (temErro), a legenda é oculta (pois o browser já exibe o alt nativo).
  const mostrarLegenda =
    tipo !== 'icone' &&
    !temErro &&
    (exibirLegenda !== undefined ? exibirLegenda : Boolean(textoLegenda));

  return (
    <S.BoxImage $temLegenda={mostrarLegenda} $tipo={tipo} role="figure">
      <S.ElementoImagem
        src={src}
        alt={alt}
        $corPrimaria={corPrimaria}
        $tipo={tipo}
        onError={handleErro}
        {...rest}
      />
      {mostrarLegenda && (
        <S.Legenda>{textoLegenda}</S.Legenda>
      )}
    </S.BoxImage>
  );
};

// Atalho para uso explícito de ícones em JSX
export const Icone: React.FC<ImagemProps> = (props) => (
  <Imagem {...props} tipo="icone" />
);