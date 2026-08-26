import styled from 'styled-components';
import { CorTexto } from '../EstilosGerais';

export const ListaOrdenada = styled.ol`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  padding-left: 0;
  color: ${CorTexto};
  list-style: none;
  counter-reset: item-contador;

  /* Aplica a numeração na cor primaria nos itens filhos */
  > li {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 4px;
    counter-increment: item-contador;

    &::before {
      content: counter(item-contador) ".";
      position: absolute;
      left: 0;
      color: ${props => props.theme.corPrimaria || '#38bdf8'};
      font-weight: 600;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;