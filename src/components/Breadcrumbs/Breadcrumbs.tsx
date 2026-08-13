import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

interface AtividadeItem {
  nome?: string;
  [key: string]: unknown;
}

interface ConfigMateria {
  config: {
    assuntos?: Record<string, string>;
    atividades?: Record<string, string | AtividadeItem>;
    [key: string]: unknown;
  };
}

// Subpastas intermediárias que devem redirecionar para a página principal da matéria
const SUBPASTAS_INTERMEDIARIAS = ['assuntos', 'atividades'];

export const Breadcrumbs = () => {
  const location = useLocation();
  const params = useParams();

  const pathnames = location.pathname.split('/').filter(Boolean);
  const materiaParam = params.materia || '';

  const [dicionarioMateria, setDicionarioMateria] = useState<Record<string, string>>({});

  useEffect(() => {
    const carregarConfigMateria = async () => {
      if (!materiaParam) {
        setDicionarioMateria({});
        return;
      }

      try {
        const todasConfigs = import.meta.glob('/src/contents/**/config.ts');
        const materiaLower = materiaParam.toLowerCase();

        const caminhoConfig = Object.keys(todasConfigs).find((path) =>
          path.toLowerCase().includes(`/${materiaLower}/config.ts`)
        );

        if (caminhoConfig) {
          const modConfig = (await todasConfigs[caminhoConfig]()) as ConfigMateria;
          const config = modConfig.config;

          const mapaCompleto: Record<string, string> = {
            ...(config.assuntos || {}),
          };

          if (config.atividades) {
            Object.entries(config.atividades).forEach(([key, val]: [string, string | AtividadeItem]) => {
              if (typeof val === 'string') {
                mapaCompleto[key] = val;
              } else if (val && typeof val === 'object' && val.nome) {
                mapaCompleto[key] = val.nome;
              }
            });
          }

          setDicionarioMateria(mapaCompleto);
        } else {
          setDicionarioMateria({});
        }
      } catch (error) {
        console.error('Erro ao carregar configurações no Breadcrumbs:', error);
        setDicionarioMateria({});
      }
    };

    carregarConfigMateria();
  }, [materiaParam]);

  if (pathnames.length === 0) return null;

  const obterNomeExibicao = (value: string): string => {
    const slugLower = value.toLowerCase();

    if (dicionarioMateria[slugLower]) return dicionarioMateria[slugLower];
    if (dicionarioMateria[value]) return dicionarioMateria[value];

    if (TRADUCAO_NOMES[slugLower]) return TRADUCAO_NOMES[slugLower];
    if (TRADUCAO_NOMES[value]) return TRADUCAO_NOMES[value];

    const textoFormatado = value.replace(/[-_]/g, ' ');
    return textoFormatado.charAt(0).toUpperCase() + textoFormatado.slice(1);
  };

  return (
    <S.Container aria-label="breadcrumb">
      <S.Item>
        <Link to="/">Início</Link>
      </S.Item>

      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const nomeExibicao = obterNomeExibicao(value);
        const slugLower = value.toLowerCase();

        // Determina o destino correto do clique
        let targetUrl = `/${pathnames.slice(0, index + 1).join('/')}`;

        // Se o item for 'assuntos' ou 'atividades', redireciona para /:periodo/:materia (índice 0 e 1 do caminho)
        if (SUBPASTAS_INTERMEDIARIAS.includes(slugLower)) {
          targetUrl = `/${pathnames.slice(0, 2).join('/')}`;
        }

        return (
          <S.Item key={`${targetUrl}-${index}`}>
            <S.Separator>/</S.Separator>

            {isLast ? (
              <span className="current">{nomeExibicao}</span>
            ) : (
              <Link to={targetUrl}>{nomeExibicao}</Link>
            )}
          </S.Item>
        );
      })}
    </S.Container>
  );
};