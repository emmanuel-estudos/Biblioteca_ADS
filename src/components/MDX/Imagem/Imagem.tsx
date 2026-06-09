import * as S from './styles';

export interface ImagemProps {
  src: string;
  alt?: string;
}

export function Imagem({ src, alt }: ImagemProps) {
  return (
    <S.Container>
      <S.ElementoImagem src={src} alt={alt || 'Imagem'} />
      {alt && <S.Legenda>{alt}</S.Legenda>}
    </S.Container>
  );
}