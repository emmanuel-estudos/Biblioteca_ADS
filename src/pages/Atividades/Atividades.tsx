import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import * as S from '../Materia/styles'; 
import { TRADUCAO_NOMES } from '../../utils/traducoes';

interface ConfigMateria {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  periodo: string;
  atividades?: Record<string, {
    nome: string;
    arquivos: Record<string, string>;
  }>;
}

export const Atividades = () => {
  const { periodo, materia, atividade } = useParams<{ periodo: string; materia: string; atividade: string }>();
  
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

  // Encontra a chave exata dentro do config ignorando maiúsculas/minúsculas
  const chaveAtividadeConfig = useMemo(() => {
    if (!atividade || !configMateria.atividades) return null;
    return Object.keys(configMateria.atividades).find(
      key => key.toLowerCase() === atividade.toLowerCase()
    );
  }, [atividade, configMateria]);

  // Busca a propriedade '.nome' definida em config.ts ou formata o nome da pasta
  const tituloAtividade = useMemo(() => {
    if (!atividade) return '';
    const dadosAtividade = chaveAtividadeConfig ? configMateria.atividades?.[chaveAtividadeConfig] : null;
    return dadosAtividade?.nome || atividade.replace(/[-_]/g, ' ');
  }, [atividade, configMateria, chaveAtividadeConfig]);

  const arquivosDaAtividade = useMemo(() => {
    const caminhos = Object.keys(todosArquivos);
    const materiaLower = materia?.toLowerCase();
    const periodoLower = nomePastaPeriodo.toLowerCase();
    const atividadeLower = atividade?.toLowerCase();

    return caminhos
      .filter(path => 
        path.toLowerCase().includes(`/${periodoLower}/${materiaLower}/atividades/${atividadeLower}/`)
      )
      .map(path => {
        const slugReal = path.split('/').pop()?.replace(/\.(mdx|pdf|txt)$/, '') || '';
        
        const dadosAtividade = chaveAtividadeConfig ? configMateria.atividades?.[chaveAtividadeConfig] : null;
        const nomeAmigavel = dadosAtividade?.arquivos?.[slugReal] || slugReal.replace(/[-_]/g, ' ');

        return { path, slug: slugReal, nomeExibicao: nomeAmigavel };
      })
      .sort((a, b) => a.nomeExibicao.localeCompare(b.nomeExibicao));
  }, [nomePastaPeriodo, materia, atividade, todosArquivos, configMateria, chaveAtividadeConfig]);

  return (
    <ThemeProvider theme={configMateria}>
      <Breadcrumbs />
      <S.PageWrapper>
        <S.Header>
          <h1>{tituloAtividade}</h1>
          <p style={{ color: '#64748b', marginTop: '0.5rem' }}>
            Arquivos referentes a "{tituloAtividade}" de {nomeMateriaExibicao}.
          </p>
        </S.Header>

        <S.ContentList>
          {arquivosDaAtividade.map(arquivo => (
            <S.ListItem key={arquivo.path}>
              <Link to={`/${periodo}/${materia}/atividades/${atividade}/${arquivo.slug}`}>
                📄 {arquivo.nomeExibicao}
              </Link>
            </S.ListItem>
          ))}
        </S.ContentList>

        {arquivosDaAtividade.length === 0 && (
          <p style={{ textAlign: 'center', color: '#64748b', marginTop: '2rem' }}>
            Nenhum arquivo encontrado em "{tituloAtividade}"...
          </p>
        )}
      </S.PageWrapper>
    </ThemeProvider>
  );
};