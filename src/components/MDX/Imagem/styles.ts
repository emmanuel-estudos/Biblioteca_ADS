import styled, { css } from 'styled-components';

interface BoxImageProps {
  $temLegenda?: boolean;
  $tipo?: 'referencia' | 'icone';
}

interface ElementoImagemProps {
  $corPrimaria?: string;
  $tipo?: 'referencia' | 'icone';
}

/* O uso de 'span' permite renderizar imagens sem quebrar validações HTML dentro de <p> do MDX */
export const BoxImage = styled.span<BoxImageProps>`
  box-sizing: border-box;
  max-width: 100%;

  ${({ $tipo, $temLegenda }) =>
    $tipo === 'icone'
      ? css`
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 0.25rem;
          vertical-align: middle;
        `
      : $temLegenda
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1.5rem auto;
          width: fit-content;
        `
      : css`
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          margin: 0.5rem;
          vertical-align: top;
          width: fit-content;
        `}
`;

export const ElementoImagem = styled.img<ElementoImagemProps>`
  box-sizing: border-box;
  border-radius: 8px;
  display: block;

  /* Borda padronizada com a corPrimaria do tema ou passada via prop */
  border: 2px solid ${({ theme, $corPrimaria }) =>
    $corPrimaria || theme?.corPrimaria || '#3f3f46'};

  ${({ $tipo }) =>
    $tipo === 'icone'
      ? css`
          /* Força imagens grandes a ficarem limitadas ao tamanho de ícone */
          width: 120px;
					height: 60px;
          object-fit: contain;
					background-color: #ffffff
        `
      : css`
          max-width: 100%;
          height: auto;
          margin: 0 auto;
        `}
`;

export const Legenda = styled.span`
  display: block;
  margin: 0;
  margin-top: 6px;
  width: 100%;
  padding: 0 4px;
  font-size: 0.875rem;
  text-align: center;
  box-sizing: border-box;
  color: gray;
  text-indent: 0;

  p {
    margin: 0;
    padding: 0;
    text-indent: 0;
    text-align: center;
  }
`;