import { Link, useLocation } from 'react-router-dom';
import * as s from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Função para formatar o texto (Ex: 5-periodo -> 5º Período)
  const formatarLabel = (texto: string) => {
    if (texto.includes('-periodo')) {
      const numero = texto.split('-')[0];
      return `${numero}º Período`;
    }
    // Para matérias: substitui hífens por espaços
    return TRADUCAO_NOMES[texto] || texto.replace(/-/g, ' ');
  };

  return (
    <s.Nav>
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        
        return (
          <div key={to} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
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