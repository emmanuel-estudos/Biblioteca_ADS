import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  min-height: 100vh;
`;

export const ArticleWrapper = styled.article`
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

// Estilo para o H1 (S.Title)
export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 1rem;
  line-height: 1.2;
`;

// Estilo para o P (S.Paragraph)
export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #334155;
  margin-bottom: 1.25rem;
`;

// Estilo para o Code (S.CodeBlock)
export const CodeBlock = styled.code`
  background-color: #f1f5f9;
  color: #e11d48; /* Cor de destaque para código inline */
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 0.95em;
  font-weight: 500;

  /* Se o código estiver dentro de um <pre> (bloco de código grande) */
  pre & {
    display: block;
    background-color: #1e293b;
    color: #f8fafc;
    padding: 1.5rem;
    overflow-x: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  margin-top: 3rem;
`;