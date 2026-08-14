import styled from 'styled-components';

export const BreadcrumbsContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem; /* Garante o mesmo espaçamento entre TODOS os elementos */
  padding: 1rem 2rem;
  font-size: 0.9rem;
  width: 100%;

  background-color: #111111; 
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${props => props.theme?.corPrimaria || '#27272a'};
`;

export const BreadcrumbsItem = styled.li<{
		$isLast?: boolean;
		$corPrimaria?: string;
		$isDentroDaMateria?: boolean;
	}>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  a {
		// Se a navegação estiver acontecendo dentro da matéria, os links usam a corPrimaria (ou a cor de hover)
    color: ${props => 
			props.$isDentroDaMateria && props.$corPrimaria
			? props.$corPrimaria
			: '#94a3b8'
		};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #38bdf8; /* ciano no hover */
      text-decoration: underline;
    }
  }

  span {
		// O item ativo (último do Breadcrumbs) fica na corPrimaria ou branco
    color: ${props => props.$corPrimaria || '#f8fafc'};
    font-weight: ${props => (props.$isLast ? '600' : '400')};
  }
`;

export const Separator = styled.span<{ 
		$corSecundaria?: string;
		$isDentroDaMateria?: boolean;
	}>`
	// Se a navegação estiver acontecendo dentro de uma matéria, a barra assume a corSecundaria
  color: ${props => 
    	props.$isDentroDaMateria && props.$corSecundaria 
      	? props.$corSecundaria 
      	: '#475569'
		};
	user-select: none;
  font-weight: bold;
	transition: color 0.2s ease;
`;

export const BreadcrumbsList = styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;