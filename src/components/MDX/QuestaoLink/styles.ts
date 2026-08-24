import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface ConfiguracaoLinguagem {
  chave: string;
  label: string;
  aliases?: string[]; // Para aceitar 'py' redirecionando para 'Python', por exemplo
}

// 1. Dicionário ÚNICO que define ORDEM e EXIBIÇÃO ao mesmo tempo
export const CONFIG_LINGUAGENS: ConfiguracaoLinguagem[] = [
  { chave: 'c', label: 'C' },
  { chave: 'sql', label: 'SQL' },
  { chave: 'python', label: 'Python', aliases: ['py'] },
  { chave: 'java', label: 'Java' },
  { chave: 'js', label: 'JavaScript' },
  { chave: 'ts', label: 'TypeScript' },
  { chave: 'c++', label: 'C++' },
];

// Exporta o array ordenado de chaves (substitui a ORDEM_LINGUAGENS antiga)
export const ORDEM_LINGUAGENS: string[] = CONFIG_LINGUAGENS.map(item => item.chave);

// Função auxiliar para buscar o nome de exibição
export const getNomeLinguagem = (lang?: string): string => {
  if (!lang) return '';
  const chaveBusca = lang.toLowerCase().trim();

  // Busca pela chave principal ou pelos aliases
  const encontrada = CONFIG_LINGUAGENS.find(
    item => item.chave === chaveBusca || item.aliases?.includes(chaveBusca)
  );

  if (encontrada) return encontrada.label;

  // Fallback para linguagens não cadastradas (ex: 'ruby' -> 'Ruby')
  return chaveBusca.charAt(0).toUpperCase() + chaveBusca.slice(1);
};

/* ==========================================================================
   CORES E ESTILOS
   ========================================================================== */

export interface CorLinguagem {
  cor: string;
  bg: string;
  border: string;
}

export const CORES_LINGUAGENS: Record<string, CorLinguagem> = {
  default: { 
		cor: '#38bdf8', 
		bg: 'rgba(56, 189, 248, 0.1)', 
		border: 'rgba(56, 189, 248, 0.2)' 
	},
  c: { 
		cor: '#60a5fa', 
		bg: 'rgba(96, 165, 250, 0.1)', 
		border: 'rgba(96, 165, 250, 0.3)' 
	},
  'c++': { 
		cor: '#0284c7', 
		bg: 'rgba(2, 132, 199, 0.15)', 
		border: 'rgba(2, 132, 199, 0.35)' 
	},
  python: { 
		cor: '#facc15', 
		bg: 'rgba(250, 204, 21, 0.1)', 
		border: 'rgba(250, 204, 21, 0.3)' 
	},
  py: { 
		cor: '#facc15', 
		bg: 'rgba(250, 204, 21, 0.1)', 
		border: 'rgba(250, 204, 21, 0.3)' 
	},
  java: { 
		cor: '#f97316', 
		bg: 'rgba(249, 115, 22, 0.1)', 
		border: 'rgba(249, 115, 22, 0.3)' 
	},
  js: { 
		cor: '#fde047', 
		bg: 'rgba(253, 224, 71, 0.1)', 
		border: 'rgba(253, 224, 71, 0.3)' 
	},
  ts: { 
		cor: '#3b82f6', 
		bg: 'rgba(59, 130, 246, 0.1)', 
		border: 'rgba(59, 130, 246, 0.3)' 
	},
  sql: { 
		cor: '#38bdf8', 
		bg: 'rgba(51, 103, 145, 0.1)', 
		border: 'rgba(51, 103, 145, 0.3)' 
	},
};

const getTemaLinguagem = (lang?: string): CorLinguagem => {
  const chave = lang ? lang.toLowerCase().trim() : '';
  return CORES_LINGUAGENS[chave] || CORES_LINGUAGENS.default;
};

export const LinkContainer = styled(Link)<{ $linguagem?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background-color: ${props => getTemaLinguagem(props.$linguagem).bg};
  border: 1px solid ${props => getTemaLinguagem(props.$linguagem).border};
  border-radius: 0.375rem;
  color: #f8fafc;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${props => getTemaLinguagem(props.$linguagem).cor};
    background-color: ${props => getTemaLinguagem(props.$linguagem).bg};
  }
`;

export const StatusDot = styled.span<{ $linguagem?: string }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => getTemaLinguagem(props.$linguagem).cor};
`;

export const Seta = styled.span<{ $linguagem?: string }>`
  color: #94a3b8;
  transition: transform 0.2s ease, color 0.2s ease;

  ${LinkContainer}:hover & {
    transform: translateX(2px);
    color: ${props => getTemaLinguagem(props.$linguagem).cor};
  }
`;