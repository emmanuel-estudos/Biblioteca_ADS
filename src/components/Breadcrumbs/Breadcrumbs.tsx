import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

export const Breadcrumbs = () => {
  const location = useLocation();
  const { periodo, materia, atividade, slug } = useParams<{
    periodo?: string;
    materia?: string;
    atividade?: string;
    slug?: string;
  }>();

  const [traducoesCustom, setTraducoesCustom] = useState<Record<string, string>>({});
  const [corPrimaria, setCorPrimaria] = useState<string | undefined>(undefined);

  const pathnames = location.pathname.split('/').filter((x) => x);

  useEffect(() => {
    let cancelado = false;

    const carregarConfig = async () => {
      if (!materia) {
        setTraducoesCustom({});
        setCorPrimaria(undefined);
        return;
      }

      const todasConfigs = import.meta.glob('/src/contents/**/config.ts');
      const materiaLower = materia.toLowerCase();

      const caminhoConfig = Object.keys(todasConfigs).find((path) =>
        path.toLowerCase().includes(`/${materiaLower}/config.ts`)
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as {
          config: {
            corPrimaria?: string;
            atividades?: Record<string, { nome: string; arquivos?: Record<string, string> }>;
            assuntos?: Record<string, string>;
          };
        };

        const configData = modConfig.config;
        const novasTraducoes: Record<string, string> = {};

        // 1. Obtém a cor primária da matéria
        if (configData.corPrimaria) {
          setCorPrimaria(configData.corPrimaria);
        }

        // 2. ROTA DE ATIVIDADES
        if (atividade && configData.atividades) {
          const chaveAtividade = Object.keys(configData.atividades).find(
            (k) => k.toLowerCase() === atividade.toLowerCase()
          );

          if (chaveAtividade) {
            const atividadeObj = configData.atividades[chaveAtividade];
            novasTraducoes[atividade.toLowerCase()] = atividadeObj.nome;

            if (slug && atividadeObj.arquivos) {
              const chaveArquivo = Object.keys(atividadeObj.arquivos).find(
                (k) => k.toLowerCase() === slug.toLowerCase()
              );

              if (chaveArquivo) {
                novasTraducoes[slug.toLowerCase()] = atividadeObj.arquivos[chaveArquivo];
              }
            }
          }
        } 
        // 3. ROTA DE ASSUNTOS
        else if (slug && configData.assuntos) {
          const chaveAssunto = Object.keys(configData.assuntos).find(
            (k) => k.toLowerCase() === slug.toLowerCase()
          );

          if (chaveAssunto) {
            novasTraducoes[slug.toLowerCase()] = configData.assuntos[chaveAssunto];
          }
        }

        if (!cancelado) {
          setTraducoesCustom(novasTraducoes);
        }
      }
    };

    carregarConfig();

    return () => {
      cancelado = true;
    };
  }, [materia, atividade, slug, location.pathname]);

  const formatarNome = (value: string) => {
    const valLower = value.toLowerCase();

    if (traducoesCustom[valLower]) {
      return traducoesCustom[valLower];
    }

    if (TRADUCAO_NOMES[value]) {
      return TRADUCAO_NOMES[value];
    }

    return value.replace(/-/g, ' ');
  };

  // Função para resolver o destino de cada link do Breadcrumbs
  const obterDestino = (index: number, value: string) => {
    // Se clicar em 'atividades' ou 'assuntos', redireciona para a página da matéria!
    if ((value === 'atividades' || value === 'assuntos') && periodo && materia) {
      return `/${periodo}/${materia}`;
    }

    return `/${pathnames.slice(0, index + 1).join('/')}`;
  };

  return (
    <S.BreadcrumbsContainer aria-label="breadcrumb">
      <S.BreadcrumbsList>
        <S.BreadcrumbsItem $corPrimaria={corPrimaria}>
          <Link to="/">Início</Link>
        </S.BreadcrumbsItem>

        {pathnames.map((value, index) => {
          const to = obterDestino(index, value);
          const isLast = index === pathnames.length - 1;
          const nomeFormatado = formatarNome(value);

          return (
            <S.BreadcrumbsItem key={to + index} $isLast={isLast} $corPrimaria={corPrimaria}>
              <S.Separator>/</S.Separator>
              {isLast ? (
                <span>{nomeFormatado}</span>
              ) : (
                <Link to={to}>{nomeFormatado}</Link>
              )}
            </S.BreadcrumbsItem>
          );
        })}
      </S.BreadcrumbsList>
    </S.BreadcrumbsContainer>
  );
};