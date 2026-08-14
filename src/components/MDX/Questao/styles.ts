import styled from 'styled-components';

export const QuestaoContainer = styled.div`
  /* Incrementa o contador para cada componente Questao renderizado */
  counter-increment: questao-counter;
  
  border: 1px solid #262626; /* neutral-800 */
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin: 1.5rem 0;
  background-color: #171717; /* neutral-900 */
  color: #ffffff;
`;

export const QuestaoHeader = styled.div`
  font-weight: 700;
  color: #22d3ee; /* cyan-400 */
  font-size: 1.125rem;
  margin-bottom: 0.5rem;

  /* Injeta automaticamente "Questão 01", "Questão 02", etc. */
  &::before {
    content: "Questão " counter(questao-counter, decimal-leading-zero);
  }
`;

export const QuestaoDivider = styled.hr`
  margin: 0.75rem 0;
  border-color: #262626;
`;

export const QuestaoConteudo = styled.div`
  margin: 1rem 0;
  color: #d4d4d4; /* neutral-300 */
  line-height: 1.625;
`;

export const QuestaoFooter = styled.div`
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(38, 38, 38, 0.5);
  display: flex;
`;

export const ListaWrapper = styled.div`
  counter-reset: questao-counter;
`;