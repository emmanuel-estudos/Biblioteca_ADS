import { Link, useLocation } from 'react-router-dom';
import * as s from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

interface BreadcrumbsProps {
  aulaAtual?: string;
  abaAtiva?: 'assuntos' | 'atividades'; // Nova propriedade para saber qual aba está aberta na Matéria
}

export const Breadcrumbs = ({ aulaAtual, abaAtiva }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatarLabel = (texto: string) => {
    if (texto.includes('-periodo')) {
      const numero = texto.split('-')[0];
      return `${numero}º Período`;
    }

    if (TRADUCAO_NOMES[texto]) return TRADUCAO_NOMES[texto];

    return texto
      .replace(/-/g, ' ')
      .replace(/([a-zA-Z])(\d)/g, '$1 $2')
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  // 1. Mapeia os caminhos reais da URL
  const items = pathnames.map((value, index) => {
    const isFolderLevel = value === 'assuntos' || value === 'atividades';
    
    // Se for 'assuntos' ou 'atividades', corta a URL para apontar de volta para a matéria
    const to = isFolderLevel 
      ? `/${pathnames.slice(0, index).join('/')}` 
      : `/${pathnames.slice(0, index + 1).join('/')}`;

    return {
      value,
      to,
      isFolderLevel,
    };
  });

  // REQUISITO: Se estivermos na página raiz da matéria (ex: /5-periodo/seguranca-de-dados)
  // e houver uma aba ativa informada, injetamos ela virtualmente como o último item (texto estático)
  if (pathnames.length === 2 && abaAtiva) {
    items.push({
      value: abaAtiva,
      to: location.pathname, // Aponta para ela mesma
      isFolderLevel: false,
    });
  }

  return (
    <s.Nav>
      <Link to="/">Home</Link>
      {items.map((item, index) => {
        const last = index === items.length - 1;
        const labelFinal = (last && aulaAtual) ? aulaAtual : formatarLabel(item.value);

        return (
          <div key={`${item.to}-${index}-${item.value}`} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span>/</span>
            {last ? (
              <strong className="current">{labelFinal}</strong>
            ) : (
              // REQUISITO: Passamos a propriedade state informando qual aba o destino deve abrir
              <Link 
                to={item.to} 
                state={item.isFolderLevel ? { tab: item.value } : undefined}
              >
                {labelFinal}
              </Link>
            )}
          </div>
        );
      })}
    </s.Nav>
  );
};