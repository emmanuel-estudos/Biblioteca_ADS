import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

export const Materia = () => {
  const { periodo, materia } = useParams();
  const [tabAtiva, setTabAtiva] = useState<'assuntos' | 'atividades'>('assuntos');

  // 1. Buscamos todos os arquivos dentro de src/content
  const todosArquivos = import.meta.glob('/src/contents/**/*.{mdx,pdf,txt}');

  // 2. Filtramos os arquivos baseado na URL atual (periodo e materia)
  const listaAssuntos = useMemo(() => {
    return Object.keys(todosArquivos)
      .filter(path => path.includes(`/${periodo}/${materia}/assuntos/`))
      .map(path => ({
        path,
        nome: path.split('/').pop()?.replace('.mdx', '').replace(/-/g, ' ') || ''
      }));
  }, [periodo, materia, todosArquivos]);

  const listaAtividades = useMemo(() => {
    return Object.keys(todosArquivos)
      .filter(path => path.includes(`/${periodo}/${materia}/atividades/`))
      .map(path => {
        const partes = path.split('/');
        // Pega o nome da pasta que contém o arquivo da atividade
        const nomePasta = partes[partes.indexOf('atividades') + 1];
        return { path, nomePasta };
      })
      // Remove duplicatas de pastas
      .filter((value, index, self) => 
        self.findIndex(v => v.nomePasta === value.nomePasta) === index
      );
  }, [periodo, materia, todosArquivos]);

  return (
    <>
      <Breadcrumbs />
      <S.PageWrapper>
        <S.Header>
          <h1>{materia ? (TRADUCAO_NOMES[materia] || materia.replace(/-/g, ' ')) : ''}</h1>
        </S.Header>

        <S.TabContainer>
          <S.TabButton 
            $active={tabAtiva === 'assuntos'} 
            onClick={() => setTabAtiva('assuntos')}
          >
            Assuntos
          </S.TabButton>
          
          {/* Só exibe o botão Atividades se houver arquivos na pasta */}
          {listaAtividades.length > 0 && (
            <S.TabButton 
              $active={tabAtiva === 'atividades'} 
              onClick={() => setTabAtiva('atividades')}
            >
              Atividades
            </S.TabButton>
          )}
        </S.TabContainer>

        <S.ContentList>
          {tabAtiva === 'assuntos' ? (
            listaAssuntos.map(item => (
              <S.ListItem key={item.path}>
                {/* A rota final deve ser ajustada conforme seu App.tsx */}
                <Link to={`${window.location.pathname}/assuntos/${item.nome.replace(/\s/g, '-')}`}>
                  📄 {item.nome}
                </Link>
              </S.ListItem>
            ))
          ) : (
            listaAtividades.map(item => (
              <S.ListItem key={item.nomePasta}>
                <Link to={`${window.location.pathname}/atividades/${item.nomePasta}`}>
                  📁 {item.nomePasta.replace(/-/g, ' ')}
                </Link>
              </S.ListItem>
            ))
          )}
        </S.ContentList>
      </S.PageWrapper>
    </>
  );
};