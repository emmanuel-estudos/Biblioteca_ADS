import styled from 'styled-components';

export const Box = styled.div`
  background-color: #09090b;
  border: 1px solid #27272a;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  /* Aplica o recuo de 1.5rem para todas as linhas de comando, comentários 
     e resultados internos, pulando apenas as abas do topo */
  & > *:not(nav):not(.tabs-container) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;