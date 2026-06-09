import { useParams } from 'react-router-dom';
import { useEffect, useState, ComponentType } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';

import { MDX } from '../MDX';
import * as S from './styles';

// Importação de Componentes Individualmente
import { Breadcrumbs } from '../Breadcrumbs';
import { TableOfContents } from '../TableOfContents';

const components = {
  h1: MDX.TituloH1,
  h2: MDX.TituloH2,
  h3: MDX.TituloH3,
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
  const { periodo, materia, slug } = useParams();
  const [MDXComponent, setMDXComponent] = useState<ComponentType | null>(null);
  const [tituloAula, setTituloAula] = useState<string>('');

  const [temaMateria, setTemaMateria] = useState({
    nome: '',
    corPrimaria: '#2c3e50',
    corSecundaria: '#3498db',
    periodo: '',
    assuntos: {} as Record<string, string>,
  });

  const todosArquivos = import.meta.glob('/src/contents/**/*.mdx');
  const todasConfigs = import.meta.glob('/src/contents/**/config.ts');

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

        // Define o título amigável baseado no slug atual
        if (slug && configData.assuntos) {
          const nomeAmigavel = configData.assuntos[slug] || slug;
          setTituloAula(nomeAmigavel);
          document.title = `${nomeAmigavel} | Biblioteca ADS`;
        }
      }

      // 2. Carregar o Arquivo MDX
      const caminhosMDX = Object.keys(todosArquivos);
      const caminhoReal = caminhosMDX.find((path) => {
        const nomeArquivo = path
          .split('/')
          .pop()
          ?.replace('.mdx', '')
          .toLowerCase();
        return (
          path.toLowerCase().includes(`/${pastaPeriodo}/`) &&
          path.toLowerCase().includes(`/${materiaLower}/`) &&
          nomeArquivo === slug?.toLowerCase()
        );
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
  }, [periodo, materia, slug, todosArquivos, todasConfigs]);

  return (
    <ThemeProvider theme={temaMateria}>
      {/* Passamos o título da aula para o Breadcrumbs exibir o nome bonito */}
      <Breadcrumbs aulaAtual={tituloAula} />

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
          <p>Carregando conteúdo ou arquivo não encontrado...</p>
        )}
      </S.PageContainer>
    </ThemeProvider>
  );
};
