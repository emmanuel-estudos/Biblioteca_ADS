import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom'; 
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
  atividades?: Record<string, {
    nome: string;
    arquivos: Record<string, string>;
  }>;
}

export const Materia = () => {
  const { periodo, materia } = useParams<{ periodo: string; materia: string }>();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const estadoNavegacao = location.state as { tab?: 'assuntos' | 'atividades' } | null;

  // Deriva a aba ativa diretamente dos parâmetros de URL ou estado de navegação (sem useState/useEffect)
  const paramAba = searchParams.get('aba');
  const tabAtiva: 'assuntos' | 'atividades' =
    paramAba === 'assuntos' || paramAba === 'atividades'
      ? paramAba
      : estadoNavegacao?.tab || 'assuntos';

  // Atualiza a URL com o Query Parameter correspondente ao clicar na aba
  const handleTrocaTab = (novaTab: 'assuntos' | 'atividades') => {
    if (novaTab === 'atividades') {
      setSearchParams({ aba: 'atividades' }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

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

  const nomeMateriaExibicao = configMateria.nome || (materia ? (TRADUCAO_NOMES[materia] || materia.replace(/[-_]/g, ' ')) : '');

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
        
        const chaveConfig = Object.keys(configMateria.atividades || {}).find(
          key => key.toLowerCase() === nomePasta.toLowerCase()
        );
        
        const dadosCatalogados = chaveConfig ? configMateria.atividades?.[chaveConfig] : null;
        const nomeExibicao = dadosCatalogados?.nome || nomePasta.replace(/[-_]/g, ' ');

        return { path, nomePasta, nomeExibicao };
      })
      .filter((value, index, self) => 
        self.findIndex(v => v.nomePasta === value.nomePasta) === index
      )
      .sort((a, b) => String(a.nomeExibicao).localeCompare(String(b.nomeExibicao)));
  }, [nomePastaPeriodo, materia, todosArquivos, configMateria]);

  return (
    <ThemeProvider theme={configMateria}>
      <Breadcrumbs abaAtiva={tabAtiva} />
      <S.PageWrapper>
        <S.Header>
          <h1>{nomeMateriaExibicao}</h1>
        </S.Header>

        <S.TabContainer>
          <S.TabButton $active={tabAtiva === 'assuntos'} onClick={() => handleTrocaTab('assuntos')}>
            Assuntos
          </S.TabButton>
          
          <S.TabButton $active={tabAtiva === 'atividades'} onClick={() => handleTrocaTab('atividades')}>
            Atividades
          </S.TabButton>
        </S.TabContainer>

        <S.ContentList>
          {tabAtiva === 'assuntos' ? (
            listaAssuntos.map(item => (
              <S.ListItem key={item.path}>
                <Link to={`/${periodo}/${materia}/assuntos/${item.slug}`}>
                  📄 {item.nomeExibicao}
                </Link>
              </S.ListItem>
            ))
          ) : (
            listaAtividades.map(item => (
              <S.ListItem key={item.nomePasta}>
                <Link to={`/${periodo}/${materia}/atividades/${item.nomePasta}`}>
                  📁 {item.nomeExibicao}
                </Link>
              </S.ListItem>
            ))
          )}
        </S.ContentList>

        {tabAtiva === 'assuntos' && listaAssuntos.length === 0 && (
          <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
            Nenhum assunto encontrado referente a {nomeMateriaExibicao}...
          </p>
        )}

        {tabAtiva === 'atividades' && listaAtividades.length === 0 && (
          <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
            Nenhuma atividade encontrada referente a {nomeMateriaExibicao}...
          </p>
        )}
      </S.PageWrapper>
    </ThemeProvider>
  );
};