import styled from 'styled-components';
import { CorTexto } from '../EstilosGerais';

// Container da Imagem
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: 2.5rem auto;
  width: 100%;
  max-width: 100%;
`;

// Elemento da Imagem
export const ElementoImagem = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  
  border: 1px solid ${props => props.theme.corPrimaria || '#27272a'};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

// Legenda
export const Legenda = styled.p`
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: ${CorTexto};
  opacity: 0.6;
  text-align: center;
  font-style: italic;
  line-height: 1.4;
  max-width: 80%;
`;