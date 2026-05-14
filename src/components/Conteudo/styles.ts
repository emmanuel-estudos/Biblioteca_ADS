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
  counter-reset: h1counter; // Inicia o contador aqui
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;