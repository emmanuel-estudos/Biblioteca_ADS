import { useParams } from 'react-router-dom';
import { useEffect, useState, ComponentType } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';

import { MDX } from '../MDX';
import { IGNORED_PATHS_IN_PROD } from '@/config/ignorePaths';
import * as S from './styles';

import { Breadcrumbs } from '../Breadcrumbs';
import { TableOfContents } from '../TableOfContents';

const components = {
  h1: MDX.TituloH1,
  h2: MDX.TituloH2,
  h3: MDX.TituloH3,
  h4: MDX.TituloH4,
  p: MDX.Paragraph,
  strong: MDX.Strong,
  code: MDX.CodeBlock,
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
            nomeAmigavel = configData.atividades?.[atividade]?.arquivos?.[slug] || nomeAmigavel;
          } else if (configData.assuntos) {
            nomeAmigavel = configData.assuntos[slug] || nomeAmigavel;
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
                <MDXComponent />
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