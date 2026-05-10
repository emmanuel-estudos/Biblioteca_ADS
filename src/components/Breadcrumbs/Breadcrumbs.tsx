import { Link, useLocation } from 'react-router-dom';
import * as s from './styles';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <s.Nav>
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <div key={to} style={{ display: 'flex', gap: '0.5rem' }}>
            <span>/</span>
            {last ? (
              <strong style={{ color: '#1e293b' }}>{value.replace(/-/g, ' ')}</strong>
            ) : (
              <Link to={to}>{value.replace(/-/g, ' ')}</Link>
            )}
          </div>
        );
      })}
    </s.Nav>
  );
};