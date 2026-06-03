import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: gray;
  margin-bottom: 1.25rem;
  text-indent: 2rem;
	
  a {
    color: #38bdf8;
    text-decoration: underline;
		
    &:hover {
      color: #7dd3fc;
    }
  }
`;