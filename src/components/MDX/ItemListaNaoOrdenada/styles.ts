import styled from 'styled-components';
import { CorTexto } from '../EstilosGerais'; 

export const ItemListaNaoOrdenada = styled.li`
  color: ${CorTexto}; 
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.6;

  margin-bottom: 1px;
	position: relative;
	padding-left: 1rem;

	/* Injeta o hífen manualmente */
  &::before {
    /* Para usar HÍFEN, mantenha a linha abaixo: */
    /* content: "—";  */
    
    /* SE PREFERIR BOLINHA: Comente a linha de cima e descomente a de baixo: */
    content: "•";
    
    position: absolute;
    left: 0;
    color: ${CorTexto}; /* Mantém a cor padrão definida em EstilosGerais */
    opacity: 0.7; /* Deixa o marcador sutilmente mais suave que o texto */
  }

  /* Garante que o hífen/marcador também herde a cor padrão do texto */
  &:last-child {
    margin-bottom: 0;
  }
`;