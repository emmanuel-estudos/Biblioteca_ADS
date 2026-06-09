import styled from 'styled-components';
import { CorTexto } from '../EstilosGerais';

export const ListaNaoOrdenada = styled.ul`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
	color: ${CorTexto};
  
  list-style-type: none; 

  /* Se o MDX por acaso estiver gerando uma tag <ol>, isso remove os números forçadamente: */
  &, ol, ul {
    list-style-type: none;
  }
`;