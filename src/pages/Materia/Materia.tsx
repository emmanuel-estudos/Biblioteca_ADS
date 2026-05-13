import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

export const Materia = () => {
  const { periodo, materia } = useParams<{ periodo: string; materia: string }>();
  const [tabAtiva, setTabAtiva] = useState<'assuntos' | 'atividades'>('assuntos');

  // 1. Buscamos todos os arquivos dentro de src/contents
  const todosArquivos = import.meta.glob('/src/contents/**/*.{mdx,pdf,txt}');

  // 2. Lógica de normalização de caminho (ex: 5-periodo -> periodo05)
  const numeroPeriodo = periodo?.split('-')[0] || '';
  const nomePastaPeriodo = `periodo${numeroPeriodo.padStart(2, '0')}`;

  // 3. Filtro inteligente para Assuntos
  const listaAssuntos = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const materiaLower = materia?.toLowerCase();
    const periodoLower = nomePastaPeriodo.toLowerCase();

    return caminhos
      .filter(path => {
        const pathLower = path.toLowerCase();
        // Verifica se o caminho contém /periodoXX/materia-nome/assuntos/
        return (
          pathLower.includes(`/${periodoLower}/${materiaLower}/assuntos/`)
        );
      })
      .map(path => ({
        path,
        nome: path.split('/').pop()?.replace(/\.(mdx|pdf|txt)$/, '').replace(/-/g, ' ') || ''
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }, [nomePastaPeriodo, materia, todosArquivos]);

  // 4. Filtro inteligente para Atividades
  const listaAtividades = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const materiaLower = materia?.toLowerCase();
    const periodoLower = nomePastaPeriodo.toLowerCase();

    return caminhos
      .filter(path => {
        const pathLower = path.toLowerCase();
        return pathLower.includes(`/${periodoLower}/${materiaLower}/atividades/`);
      })
      .map(path => {
        const partes = path.split('/');
        // Localizamos o índice da pasta 'atividades' para pegar a subpasta seguinte
        const idxAtividades = partes.findIndex(p => p.toLowerCase() === 'atividades');
        const nomePasta = partes[idxAtividades + 1];
        return { path, nomePasta };
      })
      // Remove duplicatas caso haja vários arquivos na mesma pasta de atividade
      .filter((value, index, self) => 
        self.findIndex(v => v.nomePasta === value.nomePasta) === index
      );
  }, [nomePastaPeriodo, materia, todosArquivos]);

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

        {tabAtiva === 'assuntos' && listaAssuntos.length === 0 && (
          <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
            Nenhum assunto encontrado na pasta /assuntos/
          </p>
        )}
      </S.PageWrapper>
    </>
  );
};