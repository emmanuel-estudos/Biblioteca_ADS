import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Necessário já que o MateriaCard usa a propriedade 'to'

// 1. O fundo global da página (Substitui o PageWrapper pelo nome correto do seu componente)
export const Container = styled.div`
  background-color: #09090b; /* Fundo escuro nativo global */
  min-height: 100vh;
  width: 100%;
  color: gray; /* REQUISITO: Textos padrão em cinza neutro */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    max-width: 800px;
    margin-bottom: 2.5rem;
    text-align: left;
    border-bottom: 1px solid #27272a; /* Linha divisória escura e sutil */
    padding-bottom: 1rem;
    color: gray; /* REQUISITO: Título em cinza neutro */
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

// 2. O Bloco Central que lista as matérias (Substitui o GridMaterias)
export const MateriaGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 800px;
  
  /* REQUISITO: Fundo idêntico ao container do artigo (#111111) */
  background-color: #111111; 
  
  padding: 2.5rem;
  border-radius: 8px;
  
  /* Borda escura sutil para o container em modo escuro */
  border: 1px solid #27272a; 
`;

// 3. Cada card ou linha que representa uma matéria na lista (Substitui o CardMateria)
// Nota: Como o seu componente usa "to={...}", ele precisa herdar o comportamento do Link do react-router-dom
export const MateriaCard = styled(Link)`
  display: block;
  
  /* REQUISITO: Nome das matérias em cinza neutro */
  color: gray; 
  
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #1e1e24; /* Leve contorno nos itens */
  background-color: #16161a; /* Fundo ligeiramente mais claro que o container principal */
  transition: all 0.2s ease-in-out;

  /* Efeito ao passar o mouse por cima da matéria */
  &:hover {
    background-color: #1f1f24; /* Clareia o fundo do item discretamente */
    color: #e2e8f0;            /* O texto ganha brilho (quase branco) apenas no hover */
    border-color: #3f3f46;     /* A borda do item fica mais visível */
    transform: translateX(5px); /* Deslocamento suave para a direita */
  }
`;