import styled, { css } from 'styled-components';

interface BoxImageProps {
  $temLegenda?: boolean;
}

interface ElementoImagemProps {
  $corPrimaria?: string;
}

export const BoxImage = styled.figure<BoxImageProps>`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: fit-content;
  max-width: 100%;

  ${({ $temLegenda }) =>
    $temLegenda
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1.5rem auto;
        `
      : css`
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          margin: 0.5rem;
          vertical-align: top;
        `}
`;

export const ElementoImagem = styled.img<ElementoImagemProps>`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-sizing: border-box;

  /* A borda envolve exclusivamente a imagem */
  border: 2px solid ${({ theme, $corPrimaria }) =>
    $corPrimaria || theme.corPrimaria || '#3f3f46'};
`;

export const Legenda = styled.figcaption`
  margin: 0;
  margin-top: 6px; /* Distanciamento sutil estilo referência de artigo */
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