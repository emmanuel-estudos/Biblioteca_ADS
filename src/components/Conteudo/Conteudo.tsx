import { useParams } from 'react-router-dom';
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
  QuestaoLink: MDX.QuestaoLink
};

export const Conteudo = () => {
  const { periodo, materia, atividade, slug } = useParams<{
    periodo: string;
    materia: string;
    atividade?: string;
    slug: string;
  }>();

  const [MDXComponent, setMDXComponent] = useState<ComponentType | null>(null);
  const [, setTituloAula] = useState<string>('');

  // Atualizada a tipagem padrão do estado para aceitar objetos em atividades
  const [temaMateria, setTemaMateria] = useState({
    nome: '',
    corPrimaria: '#2c3e50',
    corSecundaria: '#3498db',
    periodo: '',
    assuntos: {} as Record<string, string>,
    atividades: {} as Record<string, { nome: string; arquivos: Record<string, string> }>,
  });

  const todosArquivosBrutos = import.meta.glob('/src/contents/**/*.mdx');
  const todasConfigs = import.meta.glob('/src/contents/**/config.ts');

  const todosArquivos = Object.fromEntries(
    Object.entries(todosArquivosBrutos).filter(([path]) => {
      if (import.meta.env.PROD) {
        // Verifica se o caminho do arquivo inclui ALGUM dos itens da lista de ignorados
        const deveIgnorar = IGNORED_PATHS_IN_PROD.some((caminhoProibido) =>
          path.includes(caminhoProibido)
        );
        return !deveIgnorar;
      }
      return true; // Em modo dev (npm run dev), carrega tudo
    })
  );

  useEffect(() => {
    const carregarTudo = async () => {
      const numero = periodo?.split('-')[0] || '';
      const pastaPeriodo = `periodo${numero.padStart(2, '0')}`;
      const materiaLower = materia?.toLowerCase();

      // 1. Carregar Configuração da Matéria
      const caminhoConfig = Object.keys(todasConfigs).find((path) =>
        path.toLowerCase().includes(`/${materiaLower}/config.ts`),
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as {
          config: typeof temaMateria;
        };
        const configData = modConfig.config;
        setTemaMateria(configData);

        // 2. Definir o título amigável com fallback inteligente
        if (slug) {
          let nomeAmigavel = slug.replace(/[-_]/g, ' '); // Fallback padrão
          
          // Rota de busca corrigida para navegar por dentro de atividades[atividade].arquivos[slug]
          if (atividade) {
            // 1. Busca a atividade ignorando maiúsculas/minúsculas (ex: 'Lista01' vs 'lista01')
            const chaveAtividade = Object.keys(configData.atividades || {}).find(
              (key) => key.toLowerCase() === atividade.toLowerCase()
            );

            const atividadeEncontrada = chaveAtividade 
              ? configData.atividades[chaveAtividade] 
              : null;

            if (atividadeEncontrada?.arquivos) {
              // 2. Busca o arquivo dentro da atividade ignorando maiúsculas/minúsculas (ex: 'q001' vs 'Q001')
              const chaveArquivo = Object.keys(atividadeEncontrada.arquivos).find(
                (key) => key.toLowerCase() === slug.toLowerCase()
              );

              if (chaveArquivo) {
                nomeAmigavel = atividadeEncontrada.arquivos[chaveArquivo];
              }
            }
          } else if (configData.assuntos) {
            // Mantém a busca de assuntos (também com busca segura e insensível a maiúsculas)
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

      // 3. Carregar o Arquivo MDX com Filtro Dinâmico de Escopo
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
        setMDXComponent(() => modulo.default);
      } else {
        setMDXComponent(null);
      }
    };

    carregarTudo();
  }, [periodo, materia, atividade, slug, todosArquivos, todasConfigs]);

  return (
    <ThemeProvider theme={temaMateria}>
      <Breadcrumbs />

      <S.PageContainer>
        {MDXComponent ? (
          <>
            <TableOfContents />
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