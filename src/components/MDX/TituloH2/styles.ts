import styled from 'styled-components';
import { BaseTitulo } from '../EstilosGerais';

export const H2 = styled.h2`
	/* Injetando regras gerais para títulos do arquivo 'EstilosGerais.ts' */
	${BaseTitulo}

	/* Configurações para Contadores das Sub-Seções */
  counter-increment: h2counter;
  counter-reset: h3counter;
  
	gap: 7px;
  color: ${props => props.theme.corPrimaria};
  background: linear-gradient(90deg, ${props => props.theme.corSecundaria} 30%, transparent 90%);
  border-left: 4px solid ${props => props.theme.corPrimaria};
  padding: 0.5rem;
  margin: 1.5rem 0 1rem 0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
	
  &::before { content: counter(h1counter) "." counter(h2counter) ". » "; }
`;