import { useParams } from 'react-router-dom';
import { useEffect, useState, ComponentType } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import * as MDX from '../../components/MDX-Elements'
import * as S from './styles';

const components = {
  // Componentes Básicos
  h1: MDX.H1,
  h2: MDX.H2,
  p: MDX.Paragraph,
  strong: MDX.Strong,
  code: MDX.CodeBlock,

  // Componentes para Terminal Personalizado
  Box: MDX.Box,
  Tabs: MDX.TabsContainer,
  Tab: MDX.Tab,
  Code: MDX.CodeArea,
  Comment: MDX.Comment,
  Prompt: MDX.Prompt,
  Line: MDX.Line
};

export const Conteudo = () => {
  const { periodo, materia, slug } = useParams();
  const [MDXComponent, setMDXComponent] = useState<ComponentType | null>(null);
  
  // Estado para armazenar o tema dinâmico da matéria
  const [temaMateria, setTemaMateria] = useState({
    corPrimaria: '#2c3e50',
    corSecundaria: '#3498db'
  });

  // Globals para arquivos e configurações
  const todosArquivos = import.meta.glob('/src/contents/**/*.mdx');
  const todasConfigs = import.meta.glob('/src/contents/**/config.ts');

  useEffect(() => {
    const carregarTudo = async () => {
      const numero = periodo?.split('-')[0] || '';
      const pastaPeriodo = `periodo${numero.padStart(2, '0')}`;
      const materiaLower = materia?.toLowerCase();

      // 1. Carregar Configuração de Cores da Matéria
      const caminhoConfig = Object.keys(todasConfigs).find(path => 
        path.toLowerCase().includes(`/${materiaLower}/config.ts`)
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as { config: typeof temaMateria };
        setTemaMateria(modConfig.config);
      }

      // 2. Carregar o Arquivo MDX
      const caminhosMDX = Object.keys(todosArquivos);
      const caminhoReal = caminhosMDX.find(path => {
        const nomeArquivo = path.split('/').pop()?.replace('.mdx', '').toLowerCase();
        return (
          path.toLowerCase().includes(`/${pastaPeriodo}/`) &&
          path.toLowerCase().includes(`/${materiaLower}/`) &&
          nomeArquivo === slug?.toLowerCase()
        );
      });

      if (caminhoReal) {
        const modulo = (await todosArquivos[caminhoReal]()) as { default: ComponentType };
        setMDXComponent(() => modulo.default);
      }
    };

    carregarTudo();
  }, [periodo, materia, slug, todosArquivos, todasConfigs]);

  return (
    <ThemeProvider theme={temaMateria}>
      <Breadcrumbs />
      <S.PageContainer>
        {MDXComponent ? (
          <S.ArticleWrapper>
            <MDXProvider components={components}>
              <MDXComponent />
            </MDXProvider>
          </S.ArticleWrapper>
        ) : (
          <p>Carregando conteúdo ou arquivo não encontrado...</p>
        )}
      </S.PageContainer>
    </ThemeProvider>
  );
};