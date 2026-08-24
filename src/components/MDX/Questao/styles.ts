import styled from 'styled-components';

export const QuestaoContainer = styled.div`
  border: 1px solid #262626;
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin: 1.5rem 0;
  background-color: #171717;
  color: #ffffff;

  scroll-margin-top: 5rem;
`;

// Alterado para styled.h2 e ajustado o reset de margens de h2
export const QuestaoHeader = styled.h2`
  font-weight: 700;
  color: ${props => props.theme?.corPrimaria || '#22d3ee'}; 
  font-size: 1.125rem;
  margin: 0 0 0.5rem 0;
  padding: 0;
  border: none;
  background: transparent;
  transition: color 0.3s ease;

  /* &::before foi removido para eliminar a duplicação e usar texto real do DOM */
`;

export const QuestaoDivider = styled.hr`
  margin: 0.75rem 0;
  border-color: #262626;
`;

export const QuestaoConteudo = styled.div`
  margin: 1rem 0;
  color: #d4d4d4;
  line-height: 1.625;
`;

export const QuestaoFooter = styled.div`
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(38, 38, 38, 0.5);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const ListaWrapper = styled.div`
  counter-reset: questao-counter;
`;