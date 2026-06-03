import styled from 'styled-components';

export const Tab = styled.button<{ $active?: boolean }>`
  background: ${props => props.$active ? '#1a1b1e' : 'transparent'};
  color: ${props => props.$active ? props.theme.corPrimaria : '#909296'};
  padding: 8px 16px;
  border: 0.5 solid;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: ${props => props.$active ? '600' : '400'};
  border-bottom: 2px solid ${props => props.$active ? props.theme.corSecundaria : 'transparent'};
  transition: all 0.2s ease;

  &:hover {
    color: ${props => !props.$active && '#c1c2c5'};
  }
`;