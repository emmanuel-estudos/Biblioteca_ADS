import styled from 'styled-components';

export const Container = styled.details`
  margin: 1.5rem 0;
  border-left: 4px solid #3b82f6;
  background-color: rgba(59, 130, 246, 0.05);
  border-radius: 0 0.5rem 0.5rem 0;

  &[open] summary span {
    transform: rotate(90deg);
  }
`;

export const Summary = styled.summary`
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  color: #3b82f6;
  list-style: none;
  display: flex;
  align-items: center;

  &::-webkit-details-marker {
    display: none;
  }
`;

export const Icon = styled.span`
  transition: transform 0.2s ease;
  margin-right: 0.5rem;
`;

export const ContentWrapper = styled.div`
  padding: 0 2rem 1rem 2rem;
`;

export const AnswerBox = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;