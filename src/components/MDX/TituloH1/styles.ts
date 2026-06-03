import styled from 'styled-components';

export const H1 = styled.h1`
  /* Reinicia os contadores para as sub-seções */
  counter-increment: h1counter;
  counter-reset: h2counter;
	
  /* Estilização de Cores */
  color: #ffffff; /* Texto branco para dar contraste com o fundo sólido */
  background-color: ${props => props.theme.corPrimaria}; /* Cor sólida sem degradê */
  
  /* Bordas e Espaçamento */
  border-bottom: 4px solid ${props => props.theme.corSecundaria}; /* Destaque na base */
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 0.5rem;

  /* Centralização */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Sombreamento para dar profundidade e destacar do H2/H3 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  /* Opcional: Transformar em Caps para diferenciar mais */
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;