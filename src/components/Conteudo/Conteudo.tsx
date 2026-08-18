import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, ComponentType } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';

import { MDX } from '../MDX';
import { IGNORED_PATHS_IN_PROD } from '../../config/ignorePaths';
import * as S from './styles';

import { Breadcrumbs } from '../Breadcrumbs';
import { TableOfContents } from '../TableOfContents';
import { ListaWrapper } from '../MDX/Questao/styles';

const components = {
  a: MDX.Link,
  table: MDX.Table,
  h1: MDX.TituloH1,
  h2: MDX.TituloH2,
  h3: MDX.TituloH3,
  h4: MDX.TituloH4,
  p: MDX.Paragraph,
  strong: MDX.Strong,
  code: MDX.CodeInline,
  pre: MDX.CodePre,
  ol: MDX.ListaNaoOrdenada,
  ul: MDX.ListaNaoOrdenada,
  li: MDX.ItemListaNaoOrdenada,
  img: MDX.Imagem,
  Terminal: MDX.Box,
  Abas: MDX.TabsContainer,
  Aba: MDX.AbaTerminal,
  Code: MDX.CodeArea,
  Comentario: MDX.Comment,
  Resultado: MDX.Resultado,
  Linha: MDX.LinhaTerminal,
  Questao: MDX.Questao,
  QuestaoLink: MDX.QuestaoLink,
};

// Declarados FORA do componente para não recriar referências a cada renderização
const todosArquivosBrutos = import.meta.glob('/src/contents/**/*.mdx');
const todasConfigs = import.meta.glob('/src/contents/**/config.ts');

const todosArquivos = Object.fromEntries(
  Object.entries(todosArquivosBrutos).filter(([path]) => {
    if (import.meta.env.PROD) {
      const deveIgnorar = IGNORED_PATHS_IN_PROD.some((caminhoProibido) =>
        path.includes(caminhoProibido)
      );
      return !deveIgnorar;
    }
    return true;
  })
);

export const Conteudo = () => {
  const { periodo, materia, atividade, slug } = useParams<{
    periodo: string;
    materia: string;
    atividade?: string;
    slug: string;
  }>();

  const navigate = useNavigate();
  const location = useLocation();

  const [MDXComponent, setMDXComponent] = useState<ComponentType | null>(null);
  const [, setTituloAula] = useState<string>('');

  const [temaMateria, setTemaMateria] = useState({
    nome: '',
    corPrimaria: '#2c3e50',
    corSecundaria: '#3498db',
    periodo: '',
    assuntos: {} as Record<string, string>,
    atividades: {} as Record<string, { nome: string; arquivos: Record<string, string> }>,
  });

  const isArquivoResolucao = Boolean(atividade && slug && slug.toLowerCase() !== 'lista');
  const questaoId = slug && isArquivoResolucao ? slug.split('-')[0] : undefined;

  // Verifica se a atividade atual realmente possui um arquivo MDX de Lista
  const temListaNaAtividade = Boolean(
    atividade &&
      Object.keys(todosArquivos).some((path) => {
        const pathLower = path.toLowerCase();
        return (
          pathLower.includes(`/atividades/${atividade.toLowerCase()}/`) &&
          pathLower.endsWith('/lista.mdx')
        );
      })
  );

  // Define se o retorno deve ser direcionado para a Lista
  const deveVoltarParaLista = isArquivoResolucao && temListaNaAtividade;

  // 1. Redireciona do arquivo de resolução para a Lista correspondente
  const handleVoltarParaLista = () => {
    if (!periodo || !materia || !atividade) return;

    const rotaLista = `/${periodo}/${materia}/atividades/${atividade}/Lista`;

    navigate(rotaLista, {
      state: { scrollTargetId: questaoId },
    });
  };

  // 2. Redireciona da Lista (ou assunto geral) para a página/aba anterior de atividades
  const handleVoltarGeral = () => {
    if (!periodo || !materia) return;

    if (atividade) {
      // Como veio de uma atividade, volta explicitamente apontando a aba 'atividades'
      navigate(`/${periodo}/${materia}?aba=atividades`);
    } else {
      // Se veio de um 'assunto', basta voltar para a matéria (ela já abrirá a aba 'assuntos' por padrão)
      navigate(`/${periodo}/${materia}`);
    }
  };

  // Efeito de rolagem até a questão assim que a Lista é carregada
  useEffect(() => {
    const stateTarget = (location.state as { scrollTargetId?: string })?.scrollTargetId;

    if (stateTarget && MDXComponent && slug?.toLowerCase() === 'lista') {
      const timer = setTimeout(() => {
        const elemento = document.getElementById(stateTarget);
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // LIMPA O STATE do histórico do navegador após fazer o scroll
        // Impede que a Lista "lembre" que veio de uma questão em futuros cliques de voltar
        window.history.replaceState({}, document.title);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.state, MDXComponent, slug]);

  useEffect(() => {
    let cancelado = false;

    const carregarTudo = async () => {
      const numero = periodo?.split('-')[0] || '';
      const pastaPeriodo = `periodo${numero.padStart(2, '0')}`;
      const materiaLower = materia?.toLowerCase();

      const caminhoConfig = Object.keys(todasConfigs).find((path) =>
        path.toLowerCase().includes(`/${materiaLower}/config.ts`),
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as {
          config: typeof temaMateria;
        };

        if (cancelado) return;

        const configData = modConfig.config;
        setTemaMateria(configData);

        if (slug) {
          let nomeAmigavel = slug.replace(/[-_]/g, ' ');

          if (atividade) {
            const chaveAtividade = Object.keys(configData.atividades || {}).find(
              (key) => key.toLowerCase() === atividade.toLowerCase()
            );

            const atividadeEncontrada = chaveAtividade
              ? configData.atividades[chaveAtividade]
              : null;

            if (atividadeEncontrada?.arquivos) {
              const chaveArquivo = Object.keys(atividadeEncontrada.arquivos).find(
                (key) => key.toLowerCase() === slug.toLowerCase()
              );

              if (chaveArquivo) {
                nomeAmigavel = atividadeEncontrada.arquivos[chaveArquivo];
              }
            }
          } else if (configData.assuntos) {
            const chaveAssunto = Object.keys(configData.assuntos).find(
              (key) => key.toLowerCase() === slug.toLowerCase()
            );

            if (chaveAssunto) {
              nomeAmigavel = configData.assuntos[chaveAssunto];
            }
          }

          setTituloAula(nomeAmigavel);
          document.title = `${nomeAmigavel} | Biblioteca ADS`;
        }
      }

      const caminhosMDX = Object.keys(todosArquivos);
      const caminhoReal = caminhosMDX.find((path) => {
        const pathLower = path.toLowerCase();
        const nomeArquivo = path.split('/').pop()?.replace('.mdx', '').toLowerCase();

        const pertenceAMateria =
          pathLower.includes(`/${pastaPeriodo}/`) &&
          pathLower.includes(`/${materiaLower}/`);

        const nomeIdentico = nomeArquivo === slug?.toLowerCase();

        if (!pertenceAMateria || !nomeIdentico) return false;

        if (atividade) {
          return pathLower.includes(`/atividades/${atividade.toLowerCase()}/`);
        }

        return pathLower.includes('/assuntos/');
      });

      if (caminhoReal) {
        const modulo = (await todosArquivos[caminhoReal]()) as {
          default: ComponentType;
        };
        if (!cancelado) {
          setMDXComponent(() => modulo.default);
        }
      } else {
        if (!cancelado) {
          setMDXComponent(null);
        }
      }
    };

    carregarTudo();

    return () => {
      cancelado = true;
    };
  }, [periodo, materia, atividade, slug]);

  return (
    <ThemeProvider theme={temaMateria}>
      <Breadcrumbs />

      <S.PageContainer>
        {MDXComponent ? (
          <>
            <TableOfContents 
              onVoltar={deveVoltarParaLista ? handleVoltarParaLista : handleVoltarGeral} 
            />
            <S.ArticleWrapper>
              <MDXProvider components={components}>
                <ListaWrapper>
                  <MDXComponent />
                </ListaWrapper>
              </MDXProvider>
            </S.ArticleWrapper>
          </>
        ) : (
          <p style={{ color: '#64748b', textAlign: 'center', marginTop: '4rem' }}>
            Carregando conteúdo ou arquivo .mdx não encontrado...
          </p>
        )}
      </S.PageContainer>
    </ThemeProvider>
  );
};

export default Conteudo;