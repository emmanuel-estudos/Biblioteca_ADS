import styled from 'styled-components';

export const StyledTituloTabela = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #18181b;
  color: #f4f4f5;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.025em;
  border: 1px solid #27272a;
  border-bottom: 1px solid #3f3f46;
  border-radius: 8px 8px 0 0;
  margin-top: 1.5rem;
  margin-bottom: 0;
  box-sizing: border-box;
  word-break: break-word;

  /* Remove a margem superior e integra o container da tabela que estiver logo abaixo */
  & + div {
    margin-top: 0 !important;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    border-top: none !important;
  }
`;

// Wrapper responsável por conter a tabela dentro dos limites do pai
export const TableWrapper = styled.div`
  width: 100%;
  max-width: 100%; /* Garante que não estoure os 800px do ArticleWrapper */
  margin: 1.5rem 0;
  border-radius: 8px;
  border: 1px solid #27272a;
  box-sizing: border-box;
  overflow-x: auto; /* Mantém um scroll de segurança APENAS em telas muito pequenas como mobile */
  background-color: #111111;
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.9375rem;
  background-color: #111111;
  color: #e4e4e7;
  
  /* Permite que o navegador redistribua o espaço e force a quebra de texto nas células */
  table-layout: auto; 

  thead {
    background-color: #141417;
    border-bottom: 2px solid #27272a;

    th {
      padding: 0.75rem 1rem;
      font-weight: 600;
      color: #f4f4f5;
      letter-spacing: 0.025em;
      text-align: center;
      border-right: 1px solid #3f3f46;

      /* Força a quebra de palavras/frases longas para não estourar a coluna */
      word-break: break-word;
      overflow-wrap: break-word;

      &:last-child {
        border-right: none;
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #27272a;
      transition: background-color 0.15s ease;

      &:nth-child(even) {
        background-color: #141417;
      }

      &:hover {
        background-color: #1f1f23;
      }

      &:last-child {
        border-bottom: none;
      }
    }

    td {
      padding: 0.75rem 1rem;
      line-height: 1.5;
      color: #a1a1aa;
      border-right: 1px solid #27272a;

      /* Permite que textos longos (ex: URLs, descrições extensas) quebrem em várias linhas */
      word-break: break-word;
      overflow-wrap: anywhere;
      white-space: normal; /* Garante que o texto se adapte à largura disponível */

      &:last-child {
        border-right: none;
      }
    }
  }
`;