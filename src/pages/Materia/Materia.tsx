import { useState, useMemo, useEffect } from 'react';
// Adicionado o 'useLocation' nos imports do react-router-dom
import { useParams, Link, useLocation } from 'react-router-dom'; 
import { ThemeProvider } from 'styled-components';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from './styles';
import { TRADUCAO_NOMES } from '../../utils/traducoes';

interface ConfigMateria {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  periodo: string;
  assuntos?: Record<string, string>;
  atividades?: Record<string, string>;
}

export const Materia = () => {
  const { periodo, materia } = useParams<{ periodo: string; materia: string }>();
  const location = useLocation(); // Instancia o hook de localização para ler o state dinâmico
  
  // Captura o estado enviado pelo clique do Breadcrumb se ele existir
  const estadoNavegacao = location.state as { tab?: 'assuntos' | 'atividades' } | null;

  const [tabAtiva, setTabAtiva] = useState<'assuntos' | 'atividades'>('assuntos');

  // REQUISITO: Sincroniza a aba ativa caso o usuário venha de um clique do Breadcrumbs
  useEffect(() => {
    if (estadoNavegacao?.tab) {
      setTabAtiva(estadoNavegacao.tab);
    }
  }, [estadoNavegacao]);

  const [configMateria, setConfigMateria] = useState<ConfigMateria>({
    nome: '',
    corPrimaria: '#2c3e50',
    corSecundaria: '#3498db',
    periodo: ''
  });

  const todosArquivos = import.meta.glob('/src/contents/**/*.{mdx,pdf,txt}');
  const todasConfigs = import.meta.glob('/src/contents/**/config.ts');

  const numeroPeriodo = periodo?.split('-')[0] || '';
  const nomePastaPeriodo = `periodo${numeroPeriodo.padStart(2, '0')}`;

  useEffect(() => {
    const carregarConfig = async () => {
      const materiaLower = materia?.toLowerCase();
      const caminhoConfig = Object.keys(todasConfigs).find(path => 
        path.toLowerCase().includes(`/${materiaLower}/config.ts`)
      );

      if (caminhoConfig) {
        const modConfig = (await todasConfigs[caminhoConfig]()) as { config: ConfigMateria };
        setConfigMateria(modConfig.config);
      }
    };
    carregarConfig();
  }, [materia, todasConfigs]);

  const listaAssuntos = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const materiaLower = materia?.toLowerCase();
    const periodoLower = nomePastaPeriodo.toLowerCase();

    return caminhos
      .filter(path => path.toLowerCase().includes(`/${periodoLower}/${materiaLower}/assuntos/`))
      .map(path => {
        const slugReal = path.split('/').pop()?.replace(/\.(mdx|pdf|txt)$/, '') || '';
        const nomeCatalogado = configMateria.assuntos?.[slugReal];
        const nomeExibicao = nomeCatalogado || slugReal.replace(/[-_]/g, ' ');

        return { path, slug: slugReal, nomeExibicao };
      })
      .sort((a, b) => a.nomeExibicao.localeCompare(b.nomeExibicao));
  }, [nomePastaPeriodo, materia, todosArquivos, configMateria]);

  const listaAtividades = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const materiaLower = materia?.toLowerCase();
    const periodoLower = nomePastaPeriodo.toLowerCase();

    return caminhos
      .filter(path => path.toLowerCase().includes(`/${periodoLower}/${materiaLower}/atividades/`))
      .map(path => {
        const partes = path.split('/');
        const idxAtividades = partes.findIndex(p => p.toLowerCase() === 'atividades');
        const nomePasta = partes[idxAtividades + 1];
        
        const nomeCatalogado = configMateria.atividades?.[nomePasta];
        const nomeExibicao = nomeCatalogado || nomePasta.replace(/[-_]/g, ' ');

        return { path, nomePasta, nomeExibicao };
      })
      .filter((value, index, self) => 
        self.findIndex(v => v.nomePasta === value.nomePasta) === index
      )
      .sort((a, b) => a.nomeExibicao.localeCompare(b.nomeExibicao));
  }, [nomePastaPeriodo, materia, todosArquivos, configMateria]);

  return (
    <ThemeProvider theme={configMateria}>
      {/* REQUISITO: Passamos a propriedade informando qual aba está renderizada na tela */}
      <Breadcrumbs abaAtiva={tabAtiva} />
      <S.PageWrapper>
        <S.Header>
          <h1>{configMateria.nome || (materia ? (TRADUCAO_NOMES[materia] || materia.replace(/[-_]/g, ' ')) : '')}</h1>
        </S.Header>

        <S.TabContainer>
          <S.TabButton $active={tabAtiva === 'assuntos'} onClick={() => setTabAtiva('assuntos')}>
            Assuntos
          </S.TabButton>
          
          {listaAtividades.length > 0 && (
            <S.TabButton $active={tabAtiva === 'atividades'} onClick={() => setTabAtiva('atividades')}>
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
                  📁 {item.nomeExibicao}
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