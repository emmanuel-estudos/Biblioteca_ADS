import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1110px;
  margin: 3rem auto 0 auto;
  
  background: #111111;
  border: 1px solid #27272a;
  border-radius: 16px;
  padding: 1.25rem 2rem;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5);
  transition: all 0.3s ease;

  &:hover {
    border-color: #3f3f46;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    /* Alinha o grupo da esquerda (Novidade + Texto) com o grupo da direita (DataHora) */
    align-items: center; 
    justify-content: space-between;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  /* Centraliza verticalmente o Badge "Novidade" em relação ao bloco de texto (mensagem + descrição) */
  align-items: center; 
  gap: 1rem;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  
  background-color: #18181b;
  border: 1px solid #3f3f46;
  color: #e4e4e7;
  
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

export const TextoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Mensagem = styled.p`
  margin: 0;
  color: #e4e4e7; 
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.4;
`;

export const Descricao = styled.p`
  margin: 0;
  color: #a1a1aa;
  font-size: 0.84375rem;
  font-weight: 400;
  line-height: 1;
  white-space: pre-line;
	word-break: break-word;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const DataHora = styled.time`
  color: #64748b;
  font-size: 0.8125rem;
  font-weight: 500;
  white-space: nowrap;
  letter-spacing: 0.025em;
`;

export const TempoDecorrido = styled.span`
  color: #52525b;
  font-size: 0.75rem;
  font-weight: 400;
  white-space: nowrap;
  margin-top: 0.125rem;
`;