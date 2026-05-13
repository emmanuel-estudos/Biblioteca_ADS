import { Link, useLocation } from 'react-router-dom';
import * as s from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Função para formatar o texto (Ex: 5-periodo -> 5º Período)
  const formatarLabel = (texto: string) => {
    // 1. Verifica se é período
    if (texto.includes('-periodo')) {
      const numero = texto.split('-')[0];
      return `${numero}º Período`;
    }

    // 2. Verifica se existe tradução pré-definida
    if (TRADUCAO_NOMES[texto]) return TRADUCAO_NOMES[texto];

    // 3. Formatação geral: 
    // - Substitui hífens por espaços
    // - Adiciona espaço entre letras e números (Ex: Aula01 -> Aula 01)
    // - Capitaliza a primeira letra de cada palavra
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

        // Problema 1: Se clicar em 'assuntos' ou 'atividades', volta para a Matéria
        const isFolderLevel = value === 'assuntos' || value === 'atividades';
        
        const to = isFolderLevel 
          ? `/${pathnames.slice(0, index).join('/')}` 
          : `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <div key={`${to}-${index}`} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span>/</span>
            {last ? (
              <strong className="current">{formatarLabel(value)}</strong>
            ) : (
              <Link to={to}>{formatarLabel(value)}</Link>
            )}
          </div>
        );
      })}
    </s.Nav>
  );
};