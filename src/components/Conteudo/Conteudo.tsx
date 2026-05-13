import { useParams } from 'react-router-dom';
import { useMemo, useEffect, useState, ComponentType } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { MDXProvider } from '@mdx-js/react'
import * as S from './styles';


const components = {
  h1: (props: any) => <S.Title {...props} />,
  p: (props: any) => <S.Paragraph {...props} />,
  code: (props: any) => <S.CodeBlock {...props} />,
  // ... outros componentes
};

export const Conteudo = () => {
  const { periodo, materia, slug } = useParams();
  const [MDXComponent, setMDXComponent] = useState<ComponentType | null>(null);

  // Importamos todos os arquivos MDX como componentes
  const todosArquivos = import.meta.glob('/src/contents/**/*.mdx');

  useEffect(() => {
    const carregarConteudo = async () => {
      const numero = periodo?.split('-')[0] || '';
      const pastaPeriodo = `periodo${numero.padStart(2, '0')}`;
      
      const caminhos = Object.keys(todosArquivos);
      const caminhoReal = caminhos.find(path => {
        const nomeArquivo = path.split('/').pop()?.replace('.mdx', '').toLowerCase();
        return (
          path.toLowerCase().includes(`/${pastaPeriodo}/`) &&
          path.toLowerCase().includes(`/${materia?.toLowerCase()}/`) &&
          nomeArquivo === slug?.toLowerCase()
        );
      });

      if (caminhoReal) {
        // Importa o arquivo dinamicamente como um componente React
        const modulo: any = await todosArquivos[caminhoReal]();
        setMDXComponent(() => modulo.default);
      }
    };

    carregarConteudo();
  }, [periodo, materia, slug, todosArquivos]);

  return (
    <>
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
    </>
  );
};