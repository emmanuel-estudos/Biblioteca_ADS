import { Link, useLocation } from 'react-router-dom';
import * as s from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

// Definimos a interface para receber o nome vindo do config.ts via Conteudo.tsx
interface BreadcrumbsProps {
  aulaAtual?: string;
}

export const Breadcrumbs = ({ aulaAtual }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Função para formatar o texto (Ex: 5-periodo -> 5º Período)
  const formatarLabel = (texto: string) => {
    // 1. Verifica se é período
    if (texto.includes('-periodo')) {
      const numero = texto.split('-')[0];
      return `${numero}º Período`;
    }

    // 2. Verifica se existe tradução pré-definida no arquivo de traduções global
    if (TRADUCAO_NOMES[texto]) return TRADUCAO_NOMES[texto];

    // 3. Formatação geral (fallback)
    return texto
      .replace(/-/g, ' ')
      .replace(/([a-zA-Z])(\d)/g, '$1 $2')
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <s.Nav>
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;

        // Pular níveis de pasta puramente organizacionais
        const isFolderLevel = value === 'assuntos' || value === 'atividades';
        
        const to = isFolderLevel 
          ? `/${pathnames.slice(0, index).join('/')}` 
          : `/${pathnames.slice(0, index + 1).join('/')}`;

        // Se for o último item e tivermos o título amigável do config.ts, usamos ele.
        // Caso contrário, usamos a função de formatação padrão.
        const labelFinal = (last && aulaAtual) ? aulaAtual : formatarLabel(value);

        return (
          <div key={`${to}-${index}`} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span>/</span>
            {last ? (
              <strong className="current">{labelFinal}</strong>
            ) : (
              <Link to={to}>{labelFinal}</Link>
            )}
          </div>
        );
      })}
    </s.Nav>
  );
};