import { useState, useMemo, useEffect } from 'react'; // ADICIONADO: useEffect
import { useParams, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'; // ADICIONADO: ThemeProvider
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

export const Materia = () => {
  const { periodo, materia } = useParams<{ periodo: string; materia: string }>();
  const [tabAtiva, setTabAtiva] = useState<'assuntos' | 'atividades'>('assuntos');

  // ADICIONADO: Estado para o tema dinâmico igual ao Conteudo.tsx
  const [temaMateria, setTemaMateria] = useState({
    nome: '',
    corPrimaria: '#2c3e50',
    corSecundaria: '#3498db',
    periodo: ''
  });

  const todosArquivos = import.meta.glob('/src/contents/**/*.{mdx,pdf,txt}');
  const todasConfigs = import.meta.glob('/src/contents/**/config.ts'); // ADICIONADO

  const numeroPeriodo = periodo?.split('-')[0] || '';
  const nomePastaPeriodo = `periodo${numeroPeriodo.padStart(2, '0')}`;

  // ADICIONADO: Carregar as configurações de cores da matéria atual
  useEffect(() => {
    const carregarConfig = async () => {
      const materiaLower = materia?.toLowerCase();
      const caminhoConfig = Object.keys(todasConfigs).find(path => 
        path.toLowerCase().includes(`/${materiaLower}/config.ts`)
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as { config: typeof temaMateria };
        setTemaMateria(modConfig.config);
      }
    };
    carregarConfig();
  }, [materia, todasConfigs]);

  // Filtro inteligente para Assuntos
  const listaAssuntos = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const materiaLower = materia?.toLowerCase();
    const periodoLower = nomePastaPeriodo.toLowerCase();

    return caminhos
      .filter(path => {
        const pathLower = path.toLowerCase();
        return pathLower.includes(`/${periodoLower}/${materiaLower}/assuntos/`);
      })
      .map(path => {
        const slugReal = path.split('/').pop()?.replace(/\.(mdx|pdf|txt)$/, '') || '';
        return {
          path,
          slug: slugReal,
          nomeExibicao: slugReal.replace(/-/g, ' ')
        };
      })
      .sort((a, b) => a.nomeExibicao.localeCompare(b.nomeExibicao));
  }, [nomePastaPeriodo, materia, todosArquivos]);

  // Filtro inteligente para Atividades
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
        const idxAtividades = partes.findIndex(p => p.toLowerCase() === 'atividades');
        const nomePasta = partes[idxAtividades + 1];
        return { path, nomePasta };
      })
      .filter((value, index, self) => 
        self.findIndex(v => v.nomePasta === value.nomePasta) === index
      );
  }, [nomePastaPeriodo, materia, todosArquivos]);

  return (
    // ADICIONADO: ThemeProvider envelopando tudo para o Breadcrumbs e os estilos herdarem as cores
    <ThemeProvider theme={temaMateria}>
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
                <Link to={`${window.location.pathname}/assuntos/${item.slug}`}>
                  📄 {item.nomeExibicao}
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
    </ThemeProvider>
  );
};